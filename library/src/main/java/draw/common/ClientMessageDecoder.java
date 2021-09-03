package draw.common;

import draw.common.messages.ClientMessage;
import jakarta.websocket.DecodeException;
import jakarta.websocket.Decoder;
import jakarta.websocket.EndpointConfig;

import java.io.IOException;
import java.io.InputStream;

public class ClientMessageDecoder implements Decoder.BinaryStream<ClientMessage> {
    @Override
    public ClientMessage decode(InputStream is) throws DecodeException, IOException {
        return ClientMessage.parseFrom(is);
    }

    @Override
    public void init(EndpointConfig config) {

    }

    @Override
    public void destroy() {

    }
}
