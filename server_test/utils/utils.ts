import {ClientMessage, ServerMessage} from "../messages";
import {Client} from "./client";

export async function expectMessage<T extends NonNullable<ServerMessage['message']>>(client: Client, type: T): Promise<NonNullable<ServerMessage[T]>> {
    const receivedMessage = await client.receive();

    expect(receivedMessage.message).toBe(type);
    expect(receivedMessage[type]).toBeDefined();

    return receivedMessage[type]!;
}

export async function expectError(client: Client, message?: string) {
    const receivedMessage = await expectMessage(client, 'errorMessage');

    expect(receivedMessage.message).toBe(message);
}

export async function sendConnectMessage(client: Client, name: string, roomId?: string) {
    await client.send(ClientMessage.create({ connectMessage: ClientMessage.ConnectMessage.create({ name, roomId }) }));
}
