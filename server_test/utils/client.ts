import {ClientMessage, ServerMessage} from "../messages";
import {client as WebsocketClient, connection as WebsocketConnection} from "websocket";
import {ENDPOINT} from "../config";

export type Client = {
    close: () => void,
    send: (message: ClientMessage) => Promise<void>,
    receive: () => Promise<ServerMessage>
}

type ServerMessageListener = (err?: Error, message?: ServerMessage) => void;

const connections: WebsocketConnection[] = [];

export const closeConnections = () => {
    while (connections.length !== 0) {
        const connection = connections.pop()!;

        connection.close();
    }
}

function createClient(connection: WebsocketConnection): Client {
    connections.push(connection);

    let nextError: any;
    let closed = false;

    const messages: ServerMessage[] = [];
    const messageListeners: ServerMessageListener[] = [];

    connection.on('error', (error) => {
        nextError = error;
    });

    connection.on('close', () => {
        closed = true;
    });

    const process = () => {
        if (messageListeners.length === 0) return;
        if (messages.length === 0 && nextError == null) return;

        const nextMessageListener = messageListeners.shift()!;

        if (nextError != null) {
            nextMessageListener(nextError);
            nextError = null;
        } else if (messages.length !== 0) {
            nextMessageListener(undefined, messages.shift());
        }

        process();
    }

    connection.on('message', (message) => {
        if (message.type === 'binary') {
            try {
                messages.push(ServerMessage.decode(message.binaryData));
            } catch (e) {
                nextError = e;
            }
        } else if (message.type === 'utf8') {
            nextError = new Error('Received unexpected data of string type');
        }

        process();
    });

    const close = () => connection.close();

    const send = (message: ClientMessage): Promise<void> => {
        return new Promise((resolve, reject) => {
            connection.sendBytes(ClientMessage.encode(message).finish() as any, (err) => {
                if (err != null) {
                    reject(err)
                    return
                }

                resolve();
            })
        })
    }

    const receive = (): Promise<ServerMessage> => new Promise((resolve, reject) => {
        messageListeners.push((err, message) => {
            if (err != null) {
                reject(err);
                return;
            }

            if (message == null) {
                reject(new Error('Unexpectedly message is null;'))
                return;
            }

            resolve(message);
        })

        process();
    })

    return {
        close,
        send,
        receive
    }
}

export async function newConnection(): Promise<Client> {
    const client = new WebsocketClient({})

    return new Promise((resolve, reject) => {
        client.on('connectFailed', function (error) {
            reject(error);
        });

        client.on('connect', function (connection) {
            resolve(createClient(connection));
        });

        client.connect(ENDPOINT)
    })
}