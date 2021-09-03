package draw.common;

import draw.common.messages.ServerMessage;
import jakarta.websocket.DecodeException;
import jakarta.websocket.Decoder;
import jakarta.websocket.EndpointConfig;

import java.io.IOException;
import java.io.InputStream;

public class ServerMessageDecoder implements Decoder.BinaryStream<ServerMessage> {
    @Override
    public ServerMessage decode(InputStream is) throws DecodeException, IOException {
        return ServerMessage.parseFrom(is);
    }

    @Override
    public void init(EndpointConfig config) {

    }

    @Override
    public void destroy() {

    }
}
