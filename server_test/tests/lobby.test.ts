import { closeConnections, newConnection } from "../utils/client";
import {
  expectError,
  expectMessage,
  sendConnectMessage,
  sendStartGameMessage,
} from "../utils/utils";

afterEach(() => {
  closeConnections();
});

describe("connect", () => {
  test("server should send an errorMessage when provided with empty name", async () => {
    const client = await newConnection();

    await sendConnectMessage(client, "");
    await expectError(client, `User name can't be empty`);
  });
});

describe("lobby", () => {
  test("server should send showRoom message when provided with name", async () => {
    const clientA = await newConnection();

    await sendConnectMessage(clientA, "A");
    await expectMessage(clientA, "showRoom");
  });

  test("server should send errorMessage when provided with invalid room id", async () => {
    const clientA = await newConnection();

    await sendConnectMessage(clientA, "A", "123");
    await expectError(clientA, `Room with id: "123" does not exists`);
  });

  test("server should send showRoom message when provided with correct room id", async () => {
    const clientA = await newConnection();
    const clientB = await newConnection();

    await sendConnectMessage(clientA, "A");
    const showRoomMessageA = await expectMessage(clientA, "showRoom");

    expect(showRoomMessageA.roomId).toBeDefined();
    expect(showRoomMessageA.ownerId).toBe(showRoomMessageA.clientId);

    await sendConnectMessage(clientB, "B", showRoomMessageA.roomId!);
    const showRoomMessageB = await expectMessage(clientB, "showRoom");

    expect(showRoomMessageB.roomId).toBe(showRoomMessageA.roomId);
    expect(showRoomMessageB.inGame).toBe(false);
    expect(showRoomMessageB.ownerId).toBe(showRoomMessageA.clientId);
    expect(showRoomMessageB.drawingId).toBe("");
    expect(showRoomMessageB.players).toEqual([
      {
        playerId: showRoomMessageA.clientId,
        playerName: "A",
      },
    ]);
  });

  test("server should send error message when provided with invalidated room id (after all previous clients closes connection)", async () => {
    const clientA = await newConnection();
    const clientB = await newConnection();

    await sendConnectMessage(clientA, "A");
    const showRoomMessageA = await expectMessage(clientA, "showRoom");

    await sendConnectMessage(clientB, "B", showRoomMessageA.roomId!);
    await expectMessage(clientB, "showRoom");

    clientA.close();
    clientB.close();

    const clientC = await newConnection();

    await sendConnectMessage(clientC, "C", showRoomMessageA.roomId!);
    await expectError(
      clientC,
      `Room with id: "${showRoomMessageA.roomId!}" does not exists`
    );
  });

  test("server should send error message when only one person in lobby tries to start game", async () => {
    const clientA = await newConnection();
    await sendConnectMessage(clientA, "A");
    await expectMessage(clientA, "showRoom");
    await sendStartGameMessage(clientA);
    await expectError(clientA, "Can't start game - Only one person in lobby");
  });

  test("server should send error message when non-leader sent start game message", async () => {
    const clientA = await newConnection();
    const clientB = await newConnection();

    await sendConnectMessage(clientA, "A");
    const showRoomMessageA = await expectMessage(clientA, "showRoom");

    await sendConnectMessage(clientB, "B", showRoomMessageA.roomId!);
    await expectMessage(clientB, "showRoom");

    await sendStartGameMessage(clientB);
    await expectError(clientB, "Can't start game - Only leader can start game");
  });

  test("server should send information about new player arriving", async () => {
    const clientA = await newConnection();
    const clientB = await newConnection();

    await sendConnectMessage(clientA, "A");
    const showRoomMessageA = await expectMessage(clientA, "showRoom");

    await sendConnectMessage(clientB, "B", showRoomMessageA.roomId!);
    const showRoomMessageB = await expectMessage(clientB, "showRoom");

    const playerConnectedMessageA = await expectMessage(
      clientA,
      "playerConnected"
    );

    expect(playerConnectedMessageA.guessedWord).toBe(false);
    expect(playerConnectedMessageA.playerId).toBe(showRoomMessageB.clientId);
    expect(playerConnectedMessageA.playerName).toBe("B");
    expect(playerConnectedMessageA.playerScore).toBe(0);
  });

  test("server should promote another user to leader when original leader leaves", async () => {
    const clientA = await newConnection();
    const clientB = await newConnection();

    await sendConnectMessage(clientA, "A");
    const showRoomMessageA = await expectMessage(clientA, "showRoom");

    await sendConnectMessage(clientB, "B", showRoomMessageA.roomId!);
    const showRoomMessageB = await expectMessage(clientB, "showRoom");

    clientA.close();

    const lobbyOwnerChangeMessageB = await expectMessage(
      clientB,
      "lobbyOwnerChange"
    );

    expect(lobbyOwnerChangeMessageB.newOwnerId).toBe(showRoomMessageB.clientId);
  });
});
