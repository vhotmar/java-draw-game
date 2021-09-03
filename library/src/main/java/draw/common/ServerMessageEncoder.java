package draw.common;

import draw.common.messages.ServerMessage;
import jakarta.websocket.EncodeException;
import jakarta.websocket.Encoder;
import jakarta.websocket.EndpointConfig;


import java.io.IOException;
import java.io.OutputStream;

public class ServerMessageEncoder implements Encoder.BinaryStream<ServerMessage> {
    @Override
    public void encode(ServerMessage object, OutputStream os) throws EncodeException, IOException {
        object.writeTo(os);
    }

    @Override
    public void init(EndpointConfig config) {

    }

    @Override
    public void destroy() {

    }
}