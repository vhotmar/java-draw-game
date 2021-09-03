package draw.common;

import draw.common.messages.ClientMessage;
import jakarta.websocket.EncodeException;
import jakarta.websocket.Encoder;
import jakarta.websocket.EndpointConfig;

import java.io.IOException;
import java.io.OutputStream;

public class ClientMessageEncoder implements Encoder.BinaryStream<ClientMessage> {
    @Override
    public void encode(ClientMessage object, OutputStream os) throws EncodeException, IOException {
        object.writeTo(os);
    }

    @Override
    public void init(EndpointConfig config) {

    }

    @Override
    public void destroy() {

    }
}