import * as $protobuf from "protobufjs";
/** Properties of a ClientMessage. */
export interface IClientMessage {
  /** ClientMessage chooseWord */
  chooseWord?: ClientMessage.IChooseWordMessage | null;

  /** ClientMessage clearCanvas */
  clearCanvas?: ClientMessage.IClearCanvasMessage | null;

  /** ClientMessage draw */
  draw?: ClientMessage.IDrawMessage | null;

  /** ClientMessage chatMessage */
  chatMessage?: ClientMessage.IChatMessage | null;

  /** ClientMessage startGame */
  startGame?: ClientMessage.IStartGameMessage | null;

  /** ClientMessage connectMessage */
  connectMessage?: ClientMessage.IConnectMessage | null;
}

/** Represents a ClientMessage. */
export class ClientMessage implements IClientMessage {
  /**
   * Constructs a new ClientMessage.
   * @param [properties] Properties to set
   */
  constructor(properties?: IClientMessage);

  /** ClientMessage chooseWord. */
  public chooseWord?: ClientMessage.IChooseWordMessage | null;

  /** ClientMessage clearCanvas. */
  public clearCanvas?: ClientMessage.IClearCanvasMessage | null;

  /** ClientMessage draw. */
  public draw?: ClientMessage.IDrawMessage | null;

  /** ClientMessage chatMessage. */
  public chatMessage?: ClientMessage.IChatMessage | null;

  /** ClientMessage startGame. */
  public startGame?: ClientMessage.IStartGameMessage | null;

  /** ClientMessage connectMessage. */
  public connectMessage?: ClientMessage.IConnectMessage | null;

  /** ClientMessage message. */
  public message?:
    | "chooseWord"
    | "clearCanvas"
    | "draw"
    | "chatMessage"
    | "startGame"
    | "connectMessage";

  /**
   * Creates a new ClientMessage instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ClientMessage instance
   */
  public static create(properties?: IClientMessage): ClientMessage;

  /**
   * Encodes the specified ClientMessage message. Does not implicitly {@link ClientMessage.verify|verify} messages.
   * @param message ClientMessage message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IClientMessage,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link ClientMessage.verify|verify} messages.
   * @param message ClientMessage message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IClientMessage,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ClientMessage message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ClientMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ClientMessage;

  /**
   * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ClientMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ClientMessage;

  /**
   * Verifies a ClientMessage message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ClientMessage
   */
  public static fromObject(object: { [k: string]: any }): ClientMessage;

  /**
   * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
   * @param message ClientMessage
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ClientMessage,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ClientMessage to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

export namespace ClientMessage {
  /** Properties of a ConnectMessage. */
  interface IConnectMessage {
    /** ConnectMessage name */
    name?: string | null;

    /** ConnectMessage roomId */
    roomId?: string | null;
  }

  /** Represents a ConnectMessage. */
  class ConnectMessage implements IConnectMessage {
    /**
     * Constructs a new ConnectMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ClientMessage.IConnectMessage);

    /** ConnectMessage name. */
    public name: string;

    /** ConnectMessage roomId. */
    public roomId: string;

    /**
     * Creates a new ConnectMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectMessage instance
     */
    public static create(
      properties?: ClientMessage.IConnectMessage
    ): ClientMessage.ConnectMessage;

    /**
     * Encodes the specified ConnectMessage message. Does not implicitly {@link ClientMessage.ConnectMessage.verify|verify} messages.
     * @param message ConnectMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ClientMessage.IConnectMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ConnectMessage message, length delimited. Does not implicitly {@link ClientMessage.ConnectMessage.verify|verify} messages.
     * @param message ConnectMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ClientMessage.IConnectMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ConnectMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ClientMessage.ConnectMessage;

    /**
     * Decodes a ConnectMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ClientMessage.ConnectMessage;

    /**
     * Verifies a ConnectMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConnectMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ClientMessage.ConnectMessage;

    /**
     * Creates a plain object from a ConnectMessage message. Also converts values to other types if specified.
     * @param message ConnectMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ClientMessage.ConnectMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ConnectMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ChooseWordMessage. */
  interface IChooseWordMessage {
    /** ChooseWordMessage wordIndex */
    wordIndex?: number | null;
  }

  /** Represents a ChooseWordMessage. */
  class ChooseWordMessage implements IChooseWordMessage {
    /**
     * Constructs a new ChooseWordMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ClientMessage.IChooseWordMessage);

    /** ChooseWordMessage wordIndex. */
    public wordIndex: number;

    /**
     * Creates a new ChooseWordMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChooseWordMessage instance
     */
    public static create(
      properties?: ClientMessage.IChooseWordMessage
    ): ClientMessage.ChooseWordMessage;

    /**
     * Encodes the specified ChooseWordMessage message. Does not implicitly {@link ClientMessage.ChooseWordMessage.verify|verify} messages.
     * @param message ChooseWordMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ClientMessage.IChooseWordMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ChooseWordMessage message, length delimited. Does not implicitly {@link ClientMessage.ChooseWordMessage.verify|verify} messages.
     * @param message ChooseWordMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ClientMessage.IChooseWordMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ChooseWordMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChooseWordMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ClientMessage.ChooseWordMessage;

    /**
     * Decodes a ChooseWordMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChooseWordMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ClientMessage.ChooseWordMessage;

    /**
     * Verifies a ChooseWordMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChooseWordMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChooseWordMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ClientMessage.ChooseWordMessage;

    /**
     * Creates a plain object from a ChooseWordMessage message. Also converts values to other types if specified.
     * @param message ChooseWordMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ClientMessage.ChooseWordMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ChooseWordMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ClearCanvasMessage. */
  interface IClearCanvasMessage {}

  /** Represents a ClearCanvasMessage. */
  class ClearCanvasMessage implements IClearCanvasMessage {
    /**
     * Constructs a new ClearCanvasMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ClientMessage.IClearCanvasMessage);

    /**
     * Creates a new ClearCanvasMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearCanvasMessage instance
     */
    public static create(
      properties?: ClientMessage.IClearCanvasMessage
    ): ClientMessage.ClearCanvasMessage;

    /**
     * Encodes the specified ClearCanvasMessage message. Does not implicitly {@link ClientMessage.ClearCanvasMessage.verify|verify} messages.
     * @param message ClearCanvasMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ClientMessage.IClearCanvasMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ClearCanvasMessage message, length delimited. Does not implicitly {@link ClientMessage.ClearCanvasMessage.verify|verify} messages.
     * @param message ClearCanvasMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ClientMessage.IClearCanvasMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ClearCanvasMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClearCanvasMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ClientMessage.ClearCanvasMessage;

    /**
     * Decodes a ClearCanvasMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClearCanvasMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ClientMessage.ClearCanvasMessage;

    /**
     * Verifies a ClearCanvasMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClearCanvasMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClearCanvasMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ClientMessage.ClearCanvasMessage;

    /**
     * Creates a plain object from a ClearCanvasMessage message. Also converts values to other types if specified.
     * @param message ClearCanvasMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ClientMessage.ClearCanvasMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ClearCanvasMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DrawMessage. */
  interface IDrawMessage {
    /** DrawMessage commands */
    commands?: IDrawCommand[] | null;
  }

  /** Represents a DrawMessage. */
  class DrawMessage implements IDrawMessage {
    /**
     * Constructs a new DrawMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ClientMessage.IDrawMessage);

    /** DrawMessage commands. */
    public commands: IDrawCommand[];

    /**
     * Creates a new DrawMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawMessage instance
     */
    public static create(
      properties?: ClientMessage.IDrawMessage
    ): ClientMessage.DrawMessage;

    /**
     * Encodes the specified DrawMessage message. Does not implicitly {@link ClientMessage.DrawMessage.verify|verify} messages.
     * @param message DrawMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ClientMessage.IDrawMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DrawMessage message, length delimited. Does not implicitly {@link ClientMessage.DrawMessage.verify|verify} messages.
     * @param message DrawMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ClientMessage.IDrawMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DrawMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ClientMessage.DrawMessage;

    /**
     * Decodes a DrawMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DrawMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ClientMessage.DrawMessage;

    /**
     * Verifies a DrawMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DrawMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DrawMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ClientMessage.DrawMessage;

    /**
     * Creates a plain object from a DrawMessage message. Also converts values to other types if specified.
     * @param message DrawMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ClientMessage.DrawMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DrawMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ChatMessage. */
  interface IChatMessage {
    /** ChatMessage message */
    message?: string | null;
  }

  /** Represents a ChatMessage. */
  class ChatMessage implements IChatMessage {
    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ClientMessage.IChatMessage);

    /** ChatMessage message. */
    public message: string;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(
      properties?: ClientMessage.IChatMessage
    ): ClientMessage.ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ClientMessage.ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ClientMessage.IChatMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ClientMessage.ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ClientMessage.IChatMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ClientMessage.ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ClientMessage.ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ClientMessage.ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ClientMessage.ChatMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a StartGameMessage. */
  interface IStartGameMessage {}

  /** Represents a StartGameMessage. */
  class StartGameMessage implements IStartGameMessage {
    /**
     * Constructs a new StartGameMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ClientMessage.IStartGameMessage);

    /**
     * Creates a new StartGameMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartGameMessage instance
     */
    public static create(
      properties?: ClientMessage.IStartGameMessage
    ): ClientMessage.StartGameMessage;

    /**
     * Encodes the specified StartGameMessage message. Does not implicitly {@link ClientMessage.StartGameMessage.verify|verify} messages.
     * @param message StartGameMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ClientMessage.IStartGameMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StartGameMessage message, length delimited. Does not implicitly {@link ClientMessage.StartGameMessage.verify|verify} messages.
     * @param message StartGameMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ClientMessage.IStartGameMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StartGameMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ClientMessage.StartGameMessage;

    /**
     * Decodes a StartGameMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ClientMessage.StartGameMessage;

    /**
     * Verifies a StartGameMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a StartGameMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartGameMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ClientMessage.StartGameMessage;

    /**
     * Creates a plain object from a StartGameMessage message. Also converts values to other types if specified.
     * @param message StartGameMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ClientMessage.StartGameMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StartGameMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}

/** Properties of a Color. */
export interface IColor {
  /** Color red */
  red?: number | null;

  /** Color green */
  green?: number | null;

  /** Color blue */
  blue?: number | null;

  /** Color opacity */
  opacity?: number | null;
}

/** Represents a Color. */
export class Color implements IColor {
  /**
   * Constructs a new Color.
   * @param [properties] Properties to set
   */
  constructor(properties?: IColor);

  /** Color red. */
  public red: number;

  /** Color green. */
  public green: number;

  /** Color blue. */
  public blue: number;

  /** Color opacity. */
  public opacity: number;

  /**
   * Creates a new Color instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Color instance
   */
  public static create(properties?: IColor): Color;

  /**
   * Encodes the specified Color message. Does not implicitly {@link Color.verify|verify} messages.
   * @param message Color message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IColor,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Color message, length delimited. Does not implicitly {@link Color.verify|verify} messages.
   * @param message Color message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IColor,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Color message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Color
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Color;

  /**
   * Decodes a Color message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Color
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Color;

  /**
   * Verifies a Color message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Color message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Color
   */
  public static fromObject(object: { [k: string]: any }): Color;

  /**
   * Creates a plain object from a Color message. Also converts values to other types if specified.
   * @param message Color
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Color,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Color to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DrawState. */
export interface IDrawState {
  /** DrawState color */
  color?: IColor | null;

  /** DrawState lineWidth */
  lineWidth?: number | null;
}

/** Represents a DrawState. */
export class DrawState implements IDrawState {
  /**
   * Constructs a new DrawState.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDrawState);

  /** DrawState color. */
  public color?: IColor | null;

  /** DrawState lineWidth. */
  public lineWidth: number;

  /**
   * Creates a new DrawState instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DrawState instance
   */
  public static create(properties?: IDrawState): DrawState;

  /**
   * Encodes the specified DrawState message. Does not implicitly {@link DrawState.verify|verify} messages.
   * @param message DrawState message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDrawState,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DrawState message, length delimited. Does not implicitly {@link DrawState.verify|verify} messages.
   * @param message DrawState message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDrawState,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DrawState message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DrawState
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DrawState;

  /**
   * Decodes a DrawState message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DrawState
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DrawState;

  /**
   * Verifies a DrawState message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DrawState message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DrawState
   */
  public static fromObject(object: { [k: string]: any }): DrawState;

  /**
   * Creates a plain object from a DrawState message. Also converts values to other types if specified.
   * @param message DrawState
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DrawState,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DrawState to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DrawBeginPath. */
export interface IDrawBeginPath {
  /** DrawBeginPath state */
  state?: IDrawState | null;
}

/** Represents a DrawBeginPath. */
export class DrawBeginPath implements IDrawBeginPath {
  /**
   * Constructs a new DrawBeginPath.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDrawBeginPath);

  /** DrawBeginPath state. */
  public state?: IDrawState | null;

  /**
   * Creates a new DrawBeginPath instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DrawBeginPath instance
   */
  public static create(properties?: IDrawBeginPath): DrawBeginPath;

  /**
   * Encodes the specified DrawBeginPath message. Does not implicitly {@link DrawBeginPath.verify|verify} messages.
   * @param message DrawBeginPath message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDrawBeginPath,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DrawBeginPath message, length delimited. Does not implicitly {@link DrawBeginPath.verify|verify} messages.
   * @param message DrawBeginPath message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDrawBeginPath,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DrawBeginPath message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DrawBeginPath
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DrawBeginPath;

  /**
   * Decodes a DrawBeginPath message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DrawBeginPath
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DrawBeginPath;

  /**
   * Verifies a DrawBeginPath message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DrawBeginPath message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DrawBeginPath
   */
  public static fromObject(object: { [k: string]: any }): DrawBeginPath;

  /**
   * Creates a plain object from a DrawBeginPath message. Also converts values to other types if specified.
   * @param message DrawBeginPath
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DrawBeginPath,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DrawBeginPath to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DrawLineTo. */
export interface IDrawLineTo {
  /** DrawLineTo fromX */
  fromX?: number | null;

  /** DrawLineTo fromY */
  fromY?: number | null;

  /** DrawLineTo toX */
  toX?: number | null;

  /** DrawLineTo toY */
  toY?: number | null;
}

/** Represents a DrawLineTo. */
export class DrawLineTo implements IDrawLineTo {
  /**
   * Constructs a new DrawLineTo.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDrawLineTo);

  /** DrawLineTo fromX. */
  public fromX: number;

  /** DrawLineTo fromY. */
  public fromY: number;

  /** DrawLineTo toX. */
  public toX: number;

  /** DrawLineTo toY. */
  public toY: number;

  /**
   * Creates a new DrawLineTo instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DrawLineTo instance
   */
  public static create(properties?: IDrawLineTo): DrawLineTo;

  /**
   * Encodes the specified DrawLineTo message. Does not implicitly {@link DrawLineTo.verify|verify} messages.
   * @param message DrawLineTo message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDrawLineTo,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DrawLineTo message, length delimited. Does not implicitly {@link DrawLineTo.verify|verify} messages.
   * @param message DrawLineTo message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDrawLineTo,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DrawLineTo message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DrawLineTo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DrawLineTo;

  /**
   * Decodes a DrawLineTo message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DrawLineTo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DrawLineTo;

  /**
   * Verifies a DrawLineTo message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DrawLineTo message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DrawLineTo
   */
  public static fromObject(object: { [k: string]: any }): DrawLineTo;

  /**
   * Creates a plain object from a DrawLineTo message. Also converts values to other types if specified.
   * @param message DrawLineTo
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DrawLineTo,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DrawLineTo to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DrawClosePath. */
export interface IDrawClosePath {}

/** Represents a DrawClosePath. */
export class DrawClosePath implements IDrawClosePath {
  /**
   * Constructs a new DrawClosePath.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDrawClosePath);

  /**
   * Creates a new DrawClosePath instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DrawClosePath instance
   */
  public static create(properties?: IDrawClosePath): DrawClosePath;

  /**
   * Encodes the specified DrawClosePath message. Does not implicitly {@link DrawClosePath.verify|verify} messages.
   * @param message DrawClosePath message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDrawClosePath,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DrawClosePath message, length delimited. Does not implicitly {@link DrawClosePath.verify|verify} messages.
   * @param message DrawClosePath message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDrawClosePath,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DrawClosePath message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DrawClosePath
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DrawClosePath;

  /**
   * Decodes a DrawClosePath message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DrawClosePath
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DrawClosePath;

  /**
   * Verifies a DrawClosePath message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DrawClosePath message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DrawClosePath
   */
  public static fromObject(object: { [k: string]: any }): DrawClosePath;

  /**
   * Creates a plain object from a DrawClosePath message. Also converts values to other types if specified.
   * @param message DrawClosePath
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DrawClosePath,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DrawClosePath to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DrawFill. */
export interface IDrawFill {
  /** DrawFill color */
  color?: IColor | null;
}

/** Represents a DrawFill. */
export class DrawFill implements IDrawFill {
  /**
   * Constructs a new DrawFill.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDrawFill);

  /** DrawFill color. */
  public color?: IColor | null;

  /**
   * Creates a new DrawFill instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DrawFill instance
   */
  public static create(properties?: IDrawFill): DrawFill;

  /**
   * Encodes the specified DrawFill message. Does not implicitly {@link DrawFill.verify|verify} messages.
   * @param message DrawFill message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDrawFill,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DrawFill message, length delimited. Does not implicitly {@link DrawFill.verify|verify} messages.
   * @param message DrawFill message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDrawFill,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DrawFill message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DrawFill
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DrawFill;

  /**
   * Decodes a DrawFill message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DrawFill
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DrawFill;

  /**
   * Verifies a DrawFill message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DrawFill message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DrawFill
   */
  public static fromObject(object: { [k: string]: any }): DrawFill;

  /**
   * Creates a plain object from a DrawFill message. Also converts values to other types if specified.
   * @param message DrawFill
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DrawFill,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DrawFill to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DrawCommand. */
export interface IDrawCommand {
  /** DrawCommand beginPath */
  beginPath?: IDrawBeginPath | null;

  /** DrawCommand lineTo */
  lineTo?: IDrawLineTo | null;

  /** DrawCommand closePath */
  closePath?: IDrawClosePath | null;

  /** DrawCommand fill */
  fill?: IDrawFill | null;
}

/** Represents a DrawCommand. */
export class DrawCommand implements IDrawCommand {
  /**
   * Constructs a new DrawCommand.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDrawCommand);

  /** DrawCommand beginPath. */
  public beginPath?: IDrawBeginPath | null;

  /** DrawCommand lineTo. */
  public lineTo?: IDrawLineTo | null;

  /** DrawCommand closePath. */
  public closePath?: IDrawClosePath | null;

  /** DrawCommand fill. */
  public fill?: IDrawFill | null;

  /** DrawCommand command. */
  public command?: "beginPath" | "lineTo" | "closePath" | "fill";

  /**
   * Creates a new DrawCommand instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DrawCommand instance
   */
  public static create(properties?: IDrawCommand): DrawCommand;

  /**
   * Encodes the specified DrawCommand message. Does not implicitly {@link DrawCommand.verify|verify} messages.
   * @param message DrawCommand message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDrawCommand,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DrawCommand message, length delimited. Does not implicitly {@link DrawCommand.verify|verify} messages.
   * @param message DrawCommand message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDrawCommand,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DrawCommand message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DrawCommand
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DrawCommand;

  /**
   * Decodes a DrawCommand message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DrawCommand
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DrawCommand;

  /**
   * Verifies a DrawCommand message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DrawCommand message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DrawCommand
   */
  public static fromObject(object: { [k: string]: any }): DrawCommand;

  /**
   * Creates a plain object from a DrawCommand message. Also converts values to other types if specified.
   * @param message DrawCommand
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DrawCommand,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DrawCommand to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ServerMessage. */
export interface IServerMessage {
  /** ServerMessage chooseWord */
  chooseWord?: ServerMessage.IChooseWordMessage | null;

  /** ServerMessage clearCanvas */
  clearCanvas?: ServerMessage.IClearCanvasMessage | null;

  /** ServerMessage connected */
  connected?: ServerMessage.IConnectedMessage | null;

  /** ServerMessage currentWordUpdate */
  currentWordUpdate?: ServerMessage.ICurrentWordUpdateMessage | null;

  /** ServerMessage disconnected */
  disconnected?: ServerMessage.IDisconnectedMessage | null;

  /** ServerMessage playerConnected */
  playerConnected?: ServerMessage.IPlayerConnectedMessage | null;

  /** ServerMessage playerDisconnected */
  playerDisconnected?: ServerMessage.IPlayerDisconnectedMessage | null;

  /** ServerMessage playerGuessed */
  playerGuessed?: ServerMessage.IPlayerGuessedMessage | null;

  /** ServerMessage wordReveal */
  wordReveal?: ServerMessage.IWordRevealMessage | null;

  /** ServerMessage chatMessage */
  chatMessage?: ServerMessage.IChatMessage | null;

  /** ServerMessage gameStarted */
  gameStarted?: ServerMessage.IGameStartedMessage | null;

  /** ServerMessage updatePlayerDrawing */
  updatePlayerDrawing?: ServerMessage.IUpdateDrawingPlayerMessage | null;

  /** ServerMessage errorMessage */
  errorMessage?: ServerMessage.IErrorMessage | null;

  /** ServerMessage showRoom */
  showRoom?: ServerMessage.IShowRoomMessage | null;

  /** ServerMessage lobbyOwnerChange */
  lobbyOwnerChange?: ServerMessage.ILobbyOwnerChanged | null;
}

/** Represents a ServerMessage. */
export class ServerMessage implements IServerMessage {
  /**
   * Constructs a new ServerMessage.
   * @param [properties] Properties to set
   */
  constructor(properties?: IServerMessage);

  /** ServerMessage chooseWord. */
  public chooseWord?: ServerMessage.IChooseWordMessage | null;

  /** ServerMessage clearCanvas. */
  public clearCanvas?: ServerMessage.IClearCanvasMessage | null;

  /** ServerMessage connected. */
  public connected?: ServerMessage.IConnectedMessage | null;

  /** ServerMessage currentWordUpdate. */
  public currentWordUpdate?: ServerMessage.ICurrentWordUpdateMessage | null;

  /** ServerMessage disconnected. */
  public disconnected?: ServerMessage.IDisconnectedMessage | null;

  /** ServerMessage playerConnected. */
  public playerConnected?: ServerMessage.IPlayerConnectedMessage | null;

  /** ServerMessage playerDisconnected. */
  public playerDisconnected?: ServerMessage.IPlayerDisconnectedMessage | null;

  /** ServerMessage playerGuessed. */
  public playerGuessed?: ServerMessage.IPlayerGuessedMessage | null;

  /** ServerMessage wordReveal. */
  public wordReveal?: ServerMessage.IWordRevealMessage | null;

  /** ServerMessage chatMessage. */
  public chatMessage?: ServerMessage.IChatMessage | null;

  /** ServerMessage gameStarted. */
  public gameStarted?: ServerMessage.IGameStartedMessage | null;

  /** ServerMessage updatePlayerDrawing. */
  public updatePlayerDrawing?: ServerMessage.IUpdateDrawingPlayerMessage | null;

  /** ServerMessage errorMessage. */
  public errorMessage?: ServerMessage.IErrorMessage | null;

  /** ServerMessage showRoom. */
  public showRoom?: ServerMessage.IShowRoomMessage | null;

  /** ServerMessage lobbyOwnerChange. */
  public lobbyOwnerChange?: ServerMessage.ILobbyOwnerChanged | null;

  /** ServerMessage message. */
  public message?:
    | "chooseWord"
    | "clearCanvas"
    | "connected"
    | "currentWordUpdate"
    | "disconnected"
    | "playerConnected"
    | "playerDisconnected"
    | "playerGuessed"
    | "wordReveal"
    | "chatMessage"
    | "gameStarted"
    | "updatePlayerDrawing"
    | "errorMessage"
    | "showRoom"
    | "lobbyOwnerChange";

  /**
   * Creates a new ServerMessage instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ServerMessage instance
   */
  public static create(properties?: IServerMessage): ServerMessage;

  /**
   * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
   * @param message ServerMessage message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IServerMessage,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
   * @param message ServerMessage message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IServerMessage,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ServerMessage message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ServerMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ServerMessage;

  /**
   * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ServerMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ServerMessage;

  /**
   * Verifies a ServerMessage message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ServerMessage
   */
  public static fromObject(object: { [k: string]: any }): ServerMessage;

  /**
   * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
   * @param message ServerMessage
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ServerMessage,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ServerMessage to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

export namespace ServerMessage {
  /** Properties of a ChooseWordMessage. */
  interface IChooseWordMessage {
    /** ChooseWordMessage playerId */
    playerId?: string | null;

    /** ChooseWordMessage words */
    words?: string[] | null;
  }

  /** Represents a ChooseWordMessage. */
  class ChooseWordMessage implements IChooseWordMessage {
    /**
     * Constructs a new ChooseWordMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IChooseWordMessage);

    /** ChooseWordMessage playerId. */
    public playerId: string;

    /** ChooseWordMessage words. */
    public words: string[];

    /**
     * Creates a new ChooseWordMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChooseWordMessage instance
     */
    public static create(
      properties?: ServerMessage.IChooseWordMessage
    ): ServerMessage.ChooseWordMessage;

    /**
     * Encodes the specified ChooseWordMessage message. Does not implicitly {@link ServerMessage.ChooseWordMessage.verify|verify} messages.
     * @param message ChooseWordMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IChooseWordMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ChooseWordMessage message, length delimited. Does not implicitly {@link ServerMessage.ChooseWordMessage.verify|verify} messages.
     * @param message ChooseWordMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IChooseWordMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ChooseWordMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChooseWordMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.ChooseWordMessage;

    /**
     * Decodes a ChooseWordMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChooseWordMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.ChooseWordMessage;

    /**
     * Verifies a ChooseWordMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChooseWordMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChooseWordMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.ChooseWordMessage;

    /**
     * Creates a plain object from a ChooseWordMessage message. Also converts values to other types if specified.
     * @param message ChooseWordMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.ChooseWordMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ChooseWordMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ClearCanvasMessage. */
  interface IClearCanvasMessage {}

  /** Represents a ClearCanvasMessage. */
  class ClearCanvasMessage implements IClearCanvasMessage {
    /**
     * Constructs a new ClearCanvasMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IClearCanvasMessage);

    /**
     * Creates a new ClearCanvasMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearCanvasMessage instance
     */
    public static create(
      properties?: ServerMessage.IClearCanvasMessage
    ): ServerMessage.ClearCanvasMessage;

    /**
     * Encodes the specified ClearCanvasMessage message. Does not implicitly {@link ServerMessage.ClearCanvasMessage.verify|verify} messages.
     * @param message ClearCanvasMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IClearCanvasMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ClearCanvasMessage message, length delimited. Does not implicitly {@link ServerMessage.ClearCanvasMessage.verify|verify} messages.
     * @param message ClearCanvasMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IClearCanvasMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ClearCanvasMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClearCanvasMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.ClearCanvasMessage;

    /**
     * Decodes a ClearCanvasMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClearCanvasMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.ClearCanvasMessage;

    /**
     * Verifies a ClearCanvasMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClearCanvasMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClearCanvasMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.ClearCanvasMessage;

    /**
     * Creates a plain object from a ClearCanvasMessage message. Also converts values to other types if specified.
     * @param message ClearCanvasMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.ClearCanvasMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ClearCanvasMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ConnectedMessage. */
  interface IConnectedMessage {}

  /** Represents a ConnectedMessage. */
  class ConnectedMessage implements IConnectedMessage {
    /**
     * Constructs a new ConnectedMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IConnectedMessage);

    /**
     * Creates a new ConnectedMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectedMessage instance
     */
    public static create(
      properties?: ServerMessage.IConnectedMessage
    ): ServerMessage.ConnectedMessage;

    /**
     * Encodes the specified ConnectedMessage message. Does not implicitly {@link ServerMessage.ConnectedMessage.verify|verify} messages.
     * @param message ConnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IConnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ConnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.ConnectedMessage.verify|verify} messages.
     * @param message ConnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IConnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ConnectedMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.ConnectedMessage;

    /**
     * Decodes a ConnectedMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.ConnectedMessage;

    /**
     * Verifies a ConnectedMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConnectedMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectedMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.ConnectedMessage;

    /**
     * Creates a plain object from a ConnectedMessage message. Also converts values to other types if specified.
     * @param message ConnectedMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.ConnectedMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ConnectedMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a CurrentWordUpdateMessage. */
  interface ICurrentWordUpdateMessage {
    /** CurrentWordUpdateMessage word */
    word?: string | null;
  }

  /** Represents a CurrentWordUpdateMessage. */
  class CurrentWordUpdateMessage implements ICurrentWordUpdateMessage {
    /**
     * Constructs a new CurrentWordUpdateMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.ICurrentWordUpdateMessage);

    /** CurrentWordUpdateMessage word. */
    public word: string;

    /**
     * Creates a new CurrentWordUpdateMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CurrentWordUpdateMessage instance
     */
    public static create(
      properties?: ServerMessage.ICurrentWordUpdateMessage
    ): ServerMessage.CurrentWordUpdateMessage;

    /**
     * Encodes the specified CurrentWordUpdateMessage message. Does not implicitly {@link ServerMessage.CurrentWordUpdateMessage.verify|verify} messages.
     * @param message CurrentWordUpdateMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.ICurrentWordUpdateMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CurrentWordUpdateMessage message, length delimited. Does not implicitly {@link ServerMessage.CurrentWordUpdateMessage.verify|verify} messages.
     * @param message CurrentWordUpdateMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.ICurrentWordUpdateMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CurrentWordUpdateMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CurrentWordUpdateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.CurrentWordUpdateMessage;

    /**
     * Decodes a CurrentWordUpdateMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CurrentWordUpdateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.CurrentWordUpdateMessage;

    /**
     * Verifies a CurrentWordUpdateMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CurrentWordUpdateMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CurrentWordUpdateMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.CurrentWordUpdateMessage;

    /**
     * Creates a plain object from a CurrentWordUpdateMessage message. Also converts values to other types if specified.
     * @param message CurrentWordUpdateMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.CurrentWordUpdateMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CurrentWordUpdateMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DisconnectedMessage. */
  interface IDisconnectedMessage {}

  /** Represents a DisconnectedMessage. */
  class DisconnectedMessage implements IDisconnectedMessage {
    /**
     * Constructs a new DisconnectedMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IDisconnectedMessage);

    /**
     * Creates a new DisconnectedMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisconnectedMessage instance
     */
    public static create(
      properties?: ServerMessage.IDisconnectedMessage
    ): ServerMessage.DisconnectedMessage;

    /**
     * Encodes the specified DisconnectedMessage message. Does not implicitly {@link ServerMessage.DisconnectedMessage.verify|verify} messages.
     * @param message DisconnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IDisconnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DisconnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.DisconnectedMessage.verify|verify} messages.
     * @param message DisconnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IDisconnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DisconnectedMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisconnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.DisconnectedMessage;

    /**
     * Decodes a DisconnectedMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisconnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.DisconnectedMessage;

    /**
     * Verifies a DisconnectedMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DisconnectedMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisconnectedMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.DisconnectedMessage;

    /**
     * Creates a plain object from a DisconnectedMessage message. Also converts values to other types if specified.
     * @param message DisconnectedMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.DisconnectedMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DisconnectedMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DrawMessage. */
  interface IDrawMessage {
    /** DrawMessage commands */
    commands?: IDrawCommand[] | null;
  }

  /** Represents a DrawMessage. */
  class DrawMessage implements IDrawMessage {
    /**
     * Constructs a new DrawMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IDrawMessage);

    /** DrawMessage commands. */
    public commands: IDrawCommand[];

    /**
     * Creates a new DrawMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DrawMessage instance
     */
    public static create(
      properties?: ServerMessage.IDrawMessage
    ): ServerMessage.DrawMessage;

    /**
     * Encodes the specified DrawMessage message. Does not implicitly {@link ServerMessage.DrawMessage.verify|verify} messages.
     * @param message DrawMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IDrawMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DrawMessage message, length delimited. Does not implicitly {@link ServerMessage.DrawMessage.verify|verify} messages.
     * @param message DrawMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IDrawMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DrawMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DrawMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.DrawMessage;

    /**
     * Decodes a DrawMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DrawMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.DrawMessage;

    /**
     * Verifies a DrawMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DrawMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DrawMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.DrawMessage;

    /**
     * Creates a plain object from a DrawMessage message. Also converts values to other types if specified.
     * @param message DrawMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.DrawMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DrawMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PlayerConnectedMessage. */
  interface IPlayerConnectedMessage {
    /** PlayerConnectedMessage playerId */
    playerId?: string | null;

    /** PlayerConnectedMessage playerName */
    playerName?: string | null;

    /** PlayerConnectedMessage playerScore */
    playerScore?: number | null;

    /** PlayerConnectedMessage guessedWord */
    guessedWord?: boolean | null;
  }

  /** Represents a PlayerConnectedMessage. */
  class PlayerConnectedMessage implements IPlayerConnectedMessage {
    /**
     * Constructs a new PlayerConnectedMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IPlayerConnectedMessage);

    /** PlayerConnectedMessage playerId. */
    public playerId: string;

    /** PlayerConnectedMessage playerName. */
    public playerName: string;

    /** PlayerConnectedMessage playerScore. */
    public playerScore: number;

    /** PlayerConnectedMessage guessedWord. */
    public guessedWord: boolean;

    /**
     * Creates a new PlayerConnectedMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerConnectedMessage instance
     */
    public static create(
      properties?: ServerMessage.IPlayerConnectedMessage
    ): ServerMessage.PlayerConnectedMessage;

    /**
     * Encodes the specified PlayerConnectedMessage message. Does not implicitly {@link ServerMessage.PlayerConnectedMessage.verify|verify} messages.
     * @param message PlayerConnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IPlayerConnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PlayerConnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.PlayerConnectedMessage.verify|verify} messages.
     * @param message PlayerConnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IPlayerConnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PlayerConnectedMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerConnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.PlayerConnectedMessage;

    /**
     * Decodes a PlayerConnectedMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerConnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.PlayerConnectedMessage;

    /**
     * Verifies a PlayerConnectedMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PlayerConnectedMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerConnectedMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.PlayerConnectedMessage;

    /**
     * Creates a plain object from a PlayerConnectedMessage message. Also converts values to other types if specified.
     * @param message PlayerConnectedMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.PlayerConnectedMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PlayerConnectedMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PlayerDisconnectedMessage. */
  interface IPlayerDisconnectedMessage {
    /** PlayerDisconnectedMessage playerId */
    playerId?: string | null;
  }

  /** Represents a PlayerDisconnectedMessage. */
  class PlayerDisconnectedMessage implements IPlayerDisconnectedMessage {
    /**
     * Constructs a new PlayerDisconnectedMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IPlayerDisconnectedMessage);

    /** PlayerDisconnectedMessage playerId. */
    public playerId: string;

    /**
     * Creates a new PlayerDisconnectedMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerDisconnectedMessage instance
     */
    public static create(
      properties?: ServerMessage.IPlayerDisconnectedMessage
    ): ServerMessage.PlayerDisconnectedMessage;

    /**
     * Encodes the specified PlayerDisconnectedMessage message. Does not implicitly {@link ServerMessage.PlayerDisconnectedMessage.verify|verify} messages.
     * @param message PlayerDisconnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IPlayerDisconnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PlayerDisconnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.PlayerDisconnectedMessage.verify|verify} messages.
     * @param message PlayerDisconnectedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IPlayerDisconnectedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PlayerDisconnectedMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerDisconnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.PlayerDisconnectedMessage;

    /**
     * Decodes a PlayerDisconnectedMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerDisconnectedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.PlayerDisconnectedMessage;

    /**
     * Verifies a PlayerDisconnectedMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PlayerDisconnectedMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerDisconnectedMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.PlayerDisconnectedMessage;

    /**
     * Creates a plain object from a PlayerDisconnectedMessage message. Also converts values to other types if specified.
     * @param message PlayerDisconnectedMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.PlayerDisconnectedMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PlayerDisconnectedMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PlayerGuessedMessage. */
  interface IPlayerGuessedMessage {
    /** PlayerGuessedMessage playerId */
    playerId?: string | null;
  }

  /** Represents a PlayerGuessedMessage. */
  class PlayerGuessedMessage implements IPlayerGuessedMessage {
    /**
     * Constructs a new PlayerGuessedMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IPlayerGuessedMessage);

    /** PlayerGuessedMessage playerId. */
    public playerId: string;

    /**
     * Creates a new PlayerGuessedMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerGuessedMessage instance
     */
    public static create(
      properties?: ServerMessage.IPlayerGuessedMessage
    ): ServerMessage.PlayerGuessedMessage;

    /**
     * Encodes the specified PlayerGuessedMessage message. Does not implicitly {@link ServerMessage.PlayerGuessedMessage.verify|verify} messages.
     * @param message PlayerGuessedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IPlayerGuessedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PlayerGuessedMessage message, length delimited. Does not implicitly {@link ServerMessage.PlayerGuessedMessage.verify|verify} messages.
     * @param message PlayerGuessedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IPlayerGuessedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PlayerGuessedMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerGuessedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.PlayerGuessedMessage;

    /**
     * Decodes a PlayerGuessedMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerGuessedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.PlayerGuessedMessage;

    /**
     * Verifies a PlayerGuessedMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PlayerGuessedMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerGuessedMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.PlayerGuessedMessage;

    /**
     * Creates a plain object from a PlayerGuessedMessage message. Also converts values to other types if specified.
     * @param message PlayerGuessedMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.PlayerGuessedMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PlayerGuessedMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a WordRevealMessage. */
  interface IWordRevealMessage {
    /** WordRevealMessage reason */
    reason?: ServerMessage.WordRevealMessage.RevealReason | null;

    /** WordRevealMessage word */
    word?: string | null;

    /** WordRevealMessage scores */
    scores?: ServerMessage.WordRevealMessage.IPlayerScore[] | null;
  }

  /** Represents a WordRevealMessage. */
  class WordRevealMessage implements IWordRevealMessage {
    /**
     * Constructs a new WordRevealMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IWordRevealMessage);

    /** WordRevealMessage reason. */
    public reason: ServerMessage.WordRevealMessage.RevealReason;

    /** WordRevealMessage word. */
    public word: string;

    /** WordRevealMessage scores. */
    public scores: ServerMessage.WordRevealMessage.IPlayerScore[];

    /**
     * Creates a new WordRevealMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WordRevealMessage instance
     */
    public static create(
      properties?: ServerMessage.IWordRevealMessage
    ): ServerMessage.WordRevealMessage;

    /**
     * Encodes the specified WordRevealMessage message. Does not implicitly {@link ServerMessage.WordRevealMessage.verify|verify} messages.
     * @param message WordRevealMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IWordRevealMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WordRevealMessage message, length delimited. Does not implicitly {@link ServerMessage.WordRevealMessage.verify|verify} messages.
     * @param message WordRevealMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IWordRevealMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WordRevealMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WordRevealMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.WordRevealMessage;

    /**
     * Decodes a WordRevealMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WordRevealMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.WordRevealMessage;

    /**
     * Verifies a WordRevealMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a WordRevealMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WordRevealMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.WordRevealMessage;

    /**
     * Creates a plain object from a WordRevealMessage message. Also converts values to other types if specified.
     * @param message WordRevealMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.WordRevealMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WordRevealMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace WordRevealMessage {
    /** RevealReason enum. */
    enum RevealReason {
      EVERYONE_GUESSED = 0,
      TIMEOUT = 1,
    }

    /** Properties of a PlayerScore. */
    interface IPlayerScore {
      /** PlayerScore playerId */
      playerId?: number | null;

      /** PlayerScore playerScore */
      playerScore?: number | null;
    }

    /** Represents a PlayerScore. */
    class PlayerScore implements IPlayerScore {
      /**
       * Constructs a new PlayerScore.
       * @param [properties] Properties to set
       */
      constructor(properties?: ServerMessage.WordRevealMessage.IPlayerScore);

      /** PlayerScore playerId. */
      public playerId: number;

      /** PlayerScore playerScore. */
      public playerScore: number;

      /**
       * Creates a new PlayerScore instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PlayerScore instance
       */
      public static create(
        properties?: ServerMessage.WordRevealMessage.IPlayerScore
      ): ServerMessage.WordRevealMessage.PlayerScore;

      /**
       * Encodes the specified PlayerScore message. Does not implicitly {@link ServerMessage.WordRevealMessage.PlayerScore.verify|verify} messages.
       * @param message PlayerScore message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: ServerMessage.WordRevealMessage.IPlayerScore,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified PlayerScore message, length delimited. Does not implicitly {@link ServerMessage.WordRevealMessage.PlayerScore.verify|verify} messages.
       * @param message PlayerScore message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: ServerMessage.WordRevealMessage.IPlayerScore,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a PlayerScore message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns PlayerScore
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): ServerMessage.WordRevealMessage.PlayerScore;

      /**
       * Decodes a PlayerScore message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns PlayerScore
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): ServerMessage.WordRevealMessage.PlayerScore;

      /**
       * Verifies a PlayerScore message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a PlayerScore message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PlayerScore
       */
      public static fromObject(object: {
        [k: string]: any;
      }): ServerMessage.WordRevealMessage.PlayerScore;

      /**
       * Creates a plain object from a PlayerScore message. Also converts values to other types if specified.
       * @param message PlayerScore
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: ServerMessage.WordRevealMessage.PlayerScore,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this PlayerScore to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Properties of a ChatMessage. */
  interface IChatMessage {
    /** ChatMessage playerId */
    playerId?: string | null;

    /** ChatMessage message */
    message?: string | null;
  }

  /** Represents a ChatMessage. */
  class ChatMessage implements IChatMessage {
    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IChatMessage);

    /** ChatMessage playerId. */
    public playerId: string;

    /** ChatMessage message. */
    public message: string;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(
      properties?: ServerMessage.IChatMessage
    ): ServerMessage.ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ServerMessage.ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IChatMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ServerMessage.ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IChatMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.ChatMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an ErrorMessage. */
  interface IErrorMessage {
    /** ErrorMessage message */
    message?: string | null;
  }

  /** Represents an ErrorMessage. */
  class ErrorMessage implements IErrorMessage {
    /**
     * Constructs a new ErrorMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IErrorMessage);

    /** ErrorMessage message. */
    public message: string;

    /**
     * Creates a new ErrorMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ErrorMessage instance
     */
    public static create(
      properties?: ServerMessage.IErrorMessage
    ): ServerMessage.ErrorMessage;

    /**
     * Encodes the specified ErrorMessage message. Does not implicitly {@link ServerMessage.ErrorMessage.verify|verify} messages.
     * @param message ErrorMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IErrorMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ErrorMessage message, length delimited. Does not implicitly {@link ServerMessage.ErrorMessage.verify|verify} messages.
     * @param message ErrorMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IErrorMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an ErrorMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ErrorMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.ErrorMessage;

    /**
     * Decodes an ErrorMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ErrorMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.ErrorMessage;

    /**
     * Verifies an ErrorMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an ErrorMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ErrorMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.ErrorMessage;

    /**
     * Creates a plain object from an ErrorMessage message. Also converts values to other types if specified.
     * @param message ErrorMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.ErrorMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ErrorMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ShowRoomMessage. */
  interface IShowRoomMessage {
    /** ShowRoomMessage roomId */
    roomId?: string | null;

    /** ShowRoomMessage clientId */
    clientId?: string | null;

    /** ShowRoomMessage inGame */
    inGame?: boolean | null;

    /** ShowRoomMessage drawCommands */
    drawCommands?: IDrawCommand[] | null;

    /** ShowRoomMessage players */
    players?: ServerMessage.ShowRoomMessage.IPlayer[] | null;

    /** ShowRoomMessage ownerId */
    ownerId?: string | null;

    /** ShowRoomMessage drawingId */
    drawingId?: string | null;
  }

  /** Represents a ShowRoomMessage. */
  class ShowRoomMessage implements IShowRoomMessage {
    /**
     * Constructs a new ShowRoomMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IShowRoomMessage);

    /** ShowRoomMessage roomId. */
    public roomId: string;

    /** ShowRoomMessage clientId. */
    public clientId: string;

    /** ShowRoomMessage inGame. */
    public inGame: boolean;

    /** ShowRoomMessage drawCommands. */
    public drawCommands: IDrawCommand[];

    /** ShowRoomMessage players. */
    public players: ServerMessage.ShowRoomMessage.IPlayer[];

    /** ShowRoomMessage ownerId. */
    public ownerId: string;

    /** ShowRoomMessage drawingId. */
    public drawingId: string;

    /**
     * Creates a new ShowRoomMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShowRoomMessage instance
     */
    public static create(
      properties?: ServerMessage.IShowRoomMessage
    ): ServerMessage.ShowRoomMessage;

    /**
     * Encodes the specified ShowRoomMessage message. Does not implicitly {@link ServerMessage.ShowRoomMessage.verify|verify} messages.
     * @param message ShowRoomMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IShowRoomMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ShowRoomMessage message, length delimited. Does not implicitly {@link ServerMessage.ShowRoomMessage.verify|verify} messages.
     * @param message ShowRoomMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IShowRoomMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ShowRoomMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShowRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.ShowRoomMessage;

    /**
     * Decodes a ShowRoomMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShowRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.ShowRoomMessage;

    /**
     * Verifies a ShowRoomMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ShowRoomMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShowRoomMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.ShowRoomMessage;

    /**
     * Creates a plain object from a ShowRoomMessage message. Also converts values to other types if specified.
     * @param message ShowRoomMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.ShowRoomMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ShowRoomMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace ShowRoomMessage {
    /** Properties of a Player. */
    interface IPlayer {
      /** Player playerId */
      playerId?: string | null;

      /** Player playerName */
      playerName?: string | null;

      /** Player playerScore */
      playerScore?: number | null;

      /** Player guessedWord */
      guessedWord?: boolean | null;
    }

    /** Represents a Player. */
    class Player implements IPlayer {
      /**
       * Constructs a new Player.
       * @param [properties] Properties to set
       */
      constructor(properties?: ServerMessage.ShowRoomMessage.IPlayer);

      /** Player playerId. */
      public playerId: string;

      /** Player playerName. */
      public playerName: string;

      /** Player playerScore. */
      public playerScore: number;

      /** Player guessedWord. */
      public guessedWord: boolean;

      /**
       * Creates a new Player instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Player instance
       */
      public static create(
        properties?: ServerMessage.ShowRoomMessage.IPlayer
      ): ServerMessage.ShowRoomMessage.Player;

      /**
       * Encodes the specified Player message. Does not implicitly {@link ServerMessage.ShowRoomMessage.Player.verify|verify} messages.
       * @param message Player message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: ServerMessage.ShowRoomMessage.IPlayer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Player message, length delimited. Does not implicitly {@link ServerMessage.ShowRoomMessage.Player.verify|verify} messages.
       * @param message Player message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: ServerMessage.ShowRoomMessage.IPlayer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Player message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Player
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): ServerMessage.ShowRoomMessage.Player;

      /**
       * Decodes a Player message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Player
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): ServerMessage.ShowRoomMessage.Player;

      /**
       * Verifies a Player message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Player message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Player
       */
      public static fromObject(object: {
        [k: string]: any;
      }): ServerMessage.ShowRoomMessage.Player;

      /**
       * Creates a plain object from a Player message. Also converts values to other types if specified.
       * @param message Player
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: ServerMessage.ShowRoomMessage.Player,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Player to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Properties of a LobbyOwnerChanged. */
  interface ILobbyOwnerChanged {
    /** LobbyOwnerChanged newOwnerId */
    newOwnerId?: string | null;
  }

  /** Represents a LobbyOwnerChanged. */
  class LobbyOwnerChanged implements ILobbyOwnerChanged {
    /**
     * Constructs a new LobbyOwnerChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.ILobbyOwnerChanged);

    /** LobbyOwnerChanged newOwnerId. */
    public newOwnerId: string;

    /**
     * Creates a new LobbyOwnerChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LobbyOwnerChanged instance
     */
    public static create(
      properties?: ServerMessage.ILobbyOwnerChanged
    ): ServerMessage.LobbyOwnerChanged;

    /**
     * Encodes the specified LobbyOwnerChanged message. Does not implicitly {@link ServerMessage.LobbyOwnerChanged.verify|verify} messages.
     * @param message LobbyOwnerChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.ILobbyOwnerChanged,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LobbyOwnerChanged message, length delimited. Does not implicitly {@link ServerMessage.LobbyOwnerChanged.verify|verify} messages.
     * @param message LobbyOwnerChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.ILobbyOwnerChanged,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LobbyOwnerChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LobbyOwnerChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.LobbyOwnerChanged;

    /**
     * Decodes a LobbyOwnerChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LobbyOwnerChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.LobbyOwnerChanged;

    /**
     * Verifies a LobbyOwnerChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LobbyOwnerChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LobbyOwnerChanged
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.LobbyOwnerChanged;

    /**
     * Creates a plain object from a LobbyOwnerChanged message. Also converts values to other types if specified.
     * @param message LobbyOwnerChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.LobbyOwnerChanged,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this LobbyOwnerChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GameStartedMessage. */
  interface IGameStartedMessage {}

  /** Represents a GameStartedMessage. */
  class GameStartedMessage implements IGameStartedMessage {
    /**
     * Constructs a new GameStartedMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IGameStartedMessage);

    /**
     * Creates a new GameStartedMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameStartedMessage instance
     */
    public static create(
      properties?: ServerMessage.IGameStartedMessage
    ): ServerMessage.GameStartedMessage;

    /**
     * Encodes the specified GameStartedMessage message. Does not implicitly {@link ServerMessage.GameStartedMessage.verify|verify} messages.
     * @param message GameStartedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IGameStartedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GameStartedMessage message, length delimited. Does not implicitly {@link ServerMessage.GameStartedMessage.verify|verify} messages.
     * @param message GameStartedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IGameStartedMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GameStartedMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameStartedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.GameStartedMessage;

    /**
     * Decodes a GameStartedMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameStartedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.GameStartedMessage;

    /**
     * Verifies a GameStartedMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GameStartedMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameStartedMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.GameStartedMessage;

    /**
     * Creates a plain object from a GameStartedMessage message. Also converts values to other types if specified.
     * @param message GameStartedMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.GameStartedMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GameStartedMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an UpdateDrawingPlayerMessage. */
  interface IUpdateDrawingPlayerMessage {}

  /** Represents an UpdateDrawingPlayerMessage. */
  class UpdateDrawingPlayerMessage implements IUpdateDrawingPlayerMessage {
    /**
     * Constructs a new UpdateDrawingPlayerMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ServerMessage.IUpdateDrawingPlayerMessage);

    /**
     * Creates a new UpdateDrawingPlayerMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateDrawingPlayerMessage instance
     */
    public static create(
      properties?: ServerMessage.IUpdateDrawingPlayerMessage
    ): ServerMessage.UpdateDrawingPlayerMessage;

    /**
     * Encodes the specified UpdateDrawingPlayerMessage message. Does not implicitly {@link ServerMessage.UpdateDrawingPlayerMessage.verify|verify} messages.
     * @param message UpdateDrawingPlayerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: ServerMessage.IUpdateDrawingPlayerMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified UpdateDrawingPlayerMessage message, length delimited. Does not implicitly {@link ServerMessage.UpdateDrawingPlayerMessage.verify|verify} messages.
     * @param message UpdateDrawingPlayerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: ServerMessage.IUpdateDrawingPlayerMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an UpdateDrawingPlayerMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateDrawingPlayerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): ServerMessage.UpdateDrawingPlayerMessage;

    /**
     * Decodes an UpdateDrawingPlayerMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateDrawingPlayerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): ServerMessage.UpdateDrawingPlayerMessage;

    /**
     * Verifies an UpdateDrawingPlayerMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an UpdateDrawingPlayerMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateDrawingPlayerMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): ServerMessage.UpdateDrawingPlayerMessage;

    /**
     * Creates a plain object from an UpdateDrawingPlayerMessage message. Also converts values to other types if specified.
     * @param message UpdateDrawingPlayerMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: ServerMessage.UpdateDrawingPlayerMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this UpdateDrawingPlayerMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
