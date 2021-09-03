package draw.server;

import draw.common.messages.ClientMessage;

public enum PartyState {
    Lobby {
        @Override
        public PartyState processMessage(ClientMessage message) {
            return null;
        }
    },
    ChoosingWord {
        @Override
        public PartyState processMessage(ClientMessage message) {
            return null;
        }
    },
    Drawing {
        @Override
        public PartyState processMessage(ClientMessage message) {
            return null;
        }
    };

    public abstract PartyState processMessage(ClientMessage message);
}
