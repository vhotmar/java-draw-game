import {closeConnections, newConnection} from "../utils/client";
import {expectError, expectMessage, sendConnectMessage} from "../utils/utils";

afterEach(() => {
    closeConnections();
})

test('server should send an errorMessage when provided with empty name', async () => {
    const client = await newConnection();

    await sendConnectMessage(client, '');
    await expectError(client, 'Parameter name is required');
})

test('server should send showLobby message when provided with name', async () => {
    const clientA = await newConnection();

    await sendConnectMessage(clientA, 'A');
    await expectMessage(clientA, 'showLobby');
})

test('server should send errorMessage when provided with invalid room id', async () => {
    const clientA = await newConnection();

    await sendConnectMessage(clientA, 'A', '123');
    await expectError(clientA, 'Invalid roomId');
});

test('server should send showLobby message when provided with correct room id', async () => {
    const clientA = await newConnection();
    const clientB = await newConnection();

    await sendConnectMessage(clientA, 'A');
    const showLobbyMessageA = await expectMessage(clientA, 'showLobby');

    expect(showLobbyMessageA.roomId).toBeDefined();

    await sendConnectMessage(clientB, 'B', showLobbyMessageA.roomId!);
    await expectMessage(clientB, 'showLobby');
})

test('server should send error message when provided with invalidated room id (after all previous clients closes connection)', async () => {
    const clientA = await newConnection();
    const clientB = await newConnection();

    await sendConnectMessage(clientA, 'A');
    const showLobbyMessageA = await expectMessage(clientA, 'showLobby');

    expect(showLobbyMessageA.roomId).toBeDefined();

    await sendConnectMessage(clientB, 'B', showLobbyMessageA.roomId!);
    await expectMessage(clientB, 'showLobby');

    clientA.close();
    clientB.close();

    const clientC = await newConnection();

    await sendConnectMessage(clientC, 'B', showLobbyMessageA.roomId!);
    await expectError(clientC, 'Invalid roomId');
})