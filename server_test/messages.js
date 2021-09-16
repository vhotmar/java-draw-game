/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function (global, factory) {
  /* global define, require, module */

  /* AMD */ if (typeof define === "function" && define.amd)
    define(["protobufjs/minimal"], factory);
  /* CommonJS */ else if (
    typeof require === "function" &&
    typeof module === "object" &&
    module &&
    module.exports
  )
    module.exports = factory(require("protobufjs/minimal"));
})(this, function ($protobuf) {
  "use strict";

  // Common aliases
  var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

  // Exported root namespace
  var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

  $root.ClientMessage = (function () {
    /**
     * Properties of a ClientMessage.
     * @exports IClientMessage
     * @interface IClientMessage
     * @property {ClientMessage.IChooseWordMessage|null} [chooseWord] ClientMessage chooseWord
     * @property {ClientMessage.IClearCanvasMessage|null} [clearCanvas] ClientMessage clearCanvas
     * @property {ClientMessage.IDrawMessage|null} [draw] ClientMessage draw
     * @property {ClientMessage.IChatMessage|null} [chatMessage] ClientMessage chatMessage
     * @property {ClientMessage.IStartGameMessage|null} [startGame] ClientMessage startGame
     * @property {ClientMessage.IConnectMessage|null} [connectMessage] ClientMessage connectMessage
     */

    /**
     * Constructs a new ClientMessage.
     * @exports ClientMessage
     * @classdesc Represents a ClientMessage.
     * @implements IClientMessage
     * @constructor
     * @param {IClientMessage=} [properties] Properties to set
     */
    function ClientMessage(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientMessage chooseWord.
     * @member {ClientMessage.IChooseWordMessage|null|undefined} chooseWord
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.chooseWord = null;

    /**
     * ClientMessage clearCanvas.
     * @member {ClientMessage.IClearCanvasMessage|null|undefined} clearCanvas
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.clearCanvas = null;

    /**
     * ClientMessage draw.
     * @member {ClientMessage.IDrawMessage|null|undefined} draw
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.draw = null;

    /**
     * ClientMessage chatMessage.
     * @member {ClientMessage.IChatMessage|null|undefined} chatMessage
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.chatMessage = null;

    /**
     * ClientMessage startGame.
     * @member {ClientMessage.IStartGameMessage|null|undefined} startGame
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.startGame = null;

    /**
     * ClientMessage connectMessage.
     * @member {ClientMessage.IConnectMessage|null|undefined} connectMessage
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.connectMessage = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClientMessage message.
     * @member {"chooseWord"|"clearCanvas"|"draw"|"chatMessage"|"startGame"|"connectMessage"|undefined} message
     * @memberof ClientMessage
     * @instance
     */
    Object.defineProperty(ClientMessage.prototype, "message", {
      get: $util.oneOfGetter(
        ($oneOfFields = [
          "chooseWord",
          "clearCanvas",
          "draw",
          "chatMessage",
          "startGame",
          "connectMessage",
        ])
      ),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new ClientMessage instance using the specified properties.
     * @function create
     * @memberof ClientMessage
     * @static
     * @param {IClientMessage=} [properties] Properties to set
     * @returns {ClientMessage} ClientMessage instance
     */
    ClientMessage.create = function create(properties) {
      return new ClientMessage(properties);
    };

    /**
     * Encodes the specified ClientMessage message. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @function encode
     * @memberof ClientMessage
     * @static
     * @param {IClientMessage} message ClientMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientMessage.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.chooseWord != null &&
        Object.hasOwnProperty.call(message, "chooseWord")
      )
        $root.ClientMessage.ChooseWordMessage.encode(
          message.chooseWord,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clearCanvas != null &&
        Object.hasOwnProperty.call(message, "clearCanvas")
      )
        $root.ClientMessage.ClearCanvasMessage.encode(
          message.clearCanvas,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (message.draw != null && Object.hasOwnProperty.call(message, "draw"))
        $root.ClientMessage.DrawMessage.encode(
          message.draw,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.chatMessage != null &&
        Object.hasOwnProperty.call(message, "chatMessage")
      )
        $root.ClientMessage.ChatMessage.encode(
          message.chatMessage,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.startGame != null &&
        Object.hasOwnProperty.call(message, "startGame")
      )
        $root.ClientMessage.StartGameMessage.encode(
          message.startGame,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.connectMessage != null &&
        Object.hasOwnProperty.call(message, "connectMessage")
      )
        $root.ClientMessage.ConnectMessage.encode(
          message.connectMessage,
          writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientMessage
     * @static
     * @param {IClientMessage} message ClientMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ClientMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientMessage} ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ClientMessage();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.chooseWord = $root.ClientMessage.ChooseWordMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clearCanvas = $root.ClientMessage.ClearCanvasMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.draw = $root.ClientMessage.DrawMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.chatMessage = $root.ClientMessage.ChatMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.startGame = $root.ClientMessage.StartGameMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 6:
            message.connectMessage = $root.ClientMessage.ConnectMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientMessage} ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientMessage message.
     * @function verify
     * @memberof ClientMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientMessage.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var properties = {};
      if (message.chooseWord != null && message.hasOwnProperty("chooseWord")) {
        properties.message = 1;
        {
          var error = $root.ClientMessage.ChooseWordMessage.verify(
            message.chooseWord
          );
          if (error) return "chooseWord." + error;
        }
      }
      if (
        message.clearCanvas != null &&
        message.hasOwnProperty("clearCanvas")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ClientMessage.ClearCanvasMessage.verify(
            message.clearCanvas
          );
          if (error) return "clearCanvas." + error;
        }
      }
      if (message.draw != null && message.hasOwnProperty("draw")) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ClientMessage.DrawMessage.verify(message.draw);
          if (error) return "draw." + error;
        }
      }
      if (
        message.chatMessage != null &&
        message.hasOwnProperty("chatMessage")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ClientMessage.ChatMessage.verify(
            message.chatMessage
          );
          if (error) return "chatMessage." + error;
        }
      }
      if (message.startGame != null && message.hasOwnProperty("startGame")) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ClientMessage.StartGameMessage.verify(
            message.startGame
          );
          if (error) return "startGame." + error;
        }
      }
      if (
        message.connectMessage != null &&
        message.hasOwnProperty("connectMessage")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ClientMessage.ConnectMessage.verify(
            message.connectMessage
          );
          if (error) return "connectMessage." + error;
        }
      }
      return null;
    };

    /**
     * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientMessage} ClientMessage
     */
    ClientMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.ClientMessage) return object;
      var message = new $root.ClientMessage();
      if (object.chooseWord != null) {
        if (typeof object.chooseWord !== "object")
          throw TypeError(".ClientMessage.chooseWord: object expected");
        message.chooseWord = $root.ClientMessage.ChooseWordMessage.fromObject(
          object.chooseWord
        );
      }
      if (object.clearCanvas != null) {
        if (typeof object.clearCanvas !== "object")
          throw TypeError(".ClientMessage.clearCanvas: object expected");
        message.clearCanvas = $root.ClientMessage.ClearCanvasMessage.fromObject(
          object.clearCanvas
        );
      }
      if (object.draw != null) {
        if (typeof object.draw !== "object")
          throw TypeError(".ClientMessage.draw: object expected");
        message.draw = $root.ClientMessage.DrawMessage.fromObject(object.draw);
      }
      if (object.chatMessage != null) {
        if (typeof object.chatMessage !== "object")
          throw TypeError(".ClientMessage.chatMessage: object expected");
        message.chatMessage = $root.ClientMessage.ChatMessage.fromObject(
          object.chatMessage
        );
      }
      if (object.startGame != null) {
        if (typeof object.startGame !== "object")
          throw TypeError(".ClientMessage.startGame: object expected");
        message.startGame = $root.ClientMessage.StartGameMessage.fromObject(
          object.startGame
        );
      }
      if (object.connectMessage != null) {
        if (typeof object.connectMessage !== "object")
          throw TypeError(".ClientMessage.connectMessage: object expected");
        message.connectMessage = $root.ClientMessage.ConnectMessage.fromObject(
          object.connectMessage
        );
      }
      return message;
    };

    /**
     * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientMessage
     * @static
     * @param {ClientMessage} message ClientMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientMessage.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (message.chooseWord != null && message.hasOwnProperty("chooseWord")) {
        object.chooseWord = $root.ClientMessage.ChooseWordMessage.toObject(
          message.chooseWord,
          options
        );
        if (options.oneofs) object.message = "chooseWord";
      }
      if (
        message.clearCanvas != null &&
        message.hasOwnProperty("clearCanvas")
      ) {
        object.clearCanvas = $root.ClientMessage.ClearCanvasMessage.toObject(
          message.clearCanvas,
          options
        );
        if (options.oneofs) object.message = "clearCanvas";
      }
      if (message.draw != null && message.hasOwnProperty("draw")) {
        object.draw = $root.ClientMessage.DrawMessage.toObject(
          message.draw,
          options
        );
        if (options.oneofs) object.message = "draw";
      }
      if (
        message.chatMessage != null &&
        message.hasOwnProperty("chatMessage")
      ) {
        object.chatMessage = $root.ClientMessage.ChatMessage.toObject(
          message.chatMessage,
          options
        );
        if (options.oneofs) object.message = "chatMessage";
      }
      if (message.startGame != null && message.hasOwnProperty("startGame")) {
        object.startGame = $root.ClientMessage.StartGameMessage.toObject(
          message.startGame,
          options
        );
        if (options.oneofs) object.message = "startGame";
      }
      if (
        message.connectMessage != null &&
        message.hasOwnProperty("connectMessage")
      ) {
        object.connectMessage = $root.ClientMessage.ConnectMessage.toObject(
          message.connectMessage,
          options
        );
        if (options.oneofs) object.message = "connectMessage";
      }
      return object;
    };

    /**
     * Converts this ClientMessage to JSON.
     * @function toJSON
     * @memberof ClientMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ClientMessage.ConnectMessage = (function () {
      /**
       * Properties of a ConnectMessage.
       * @memberof ClientMessage
       * @interface IConnectMessage
       * @property {string|null} [name] ConnectMessage name
       * @property {string|null} [roomId] ConnectMessage roomId
       */

      /**
       * Constructs a new ConnectMessage.
       * @memberof ClientMessage
       * @classdesc Represents a ConnectMessage.
       * @implements IConnectMessage
       * @constructor
       * @param {ClientMessage.IConnectMessage=} [properties] Properties to set
       */
      function ConnectMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * ConnectMessage name.
       * @member {string} name
       * @memberof ClientMessage.ConnectMessage
       * @instance
       */
      ConnectMessage.prototype.name = "";

      /**
       * ConnectMessage roomId.
       * @member {string} roomId
       * @memberof ClientMessage.ConnectMessage
       * @instance
       */
      ConnectMessage.prototype.roomId = "";

      /**
       * Creates a new ConnectMessage instance using the specified properties.
       * @function create
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {ClientMessage.IConnectMessage=} [properties] Properties to set
       * @returns {ClientMessage.ConnectMessage} ConnectMessage instance
       */
      ConnectMessage.create = function create(properties) {
        return new ConnectMessage(properties);
      };

      /**
       * Encodes the specified ConnectMessage message. Does not implicitly {@link ClientMessage.ConnectMessage.verify|verify} messages.
       * @function encode
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {ClientMessage.IConnectMessage} message ConnectMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ConnectMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
        if (
          message.roomId != null &&
          Object.hasOwnProperty.call(message, "roomId")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.roomId);
        return writer;
      };

      /**
       * Encodes the specified ConnectMessage message, length delimited. Does not implicitly {@link ClientMessage.ConnectMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {ClientMessage.IConnectMessage} message ConnectMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ConnectMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ConnectMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientMessage.ConnectMessage} ConnectMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConnectMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientMessage.ConnectMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;
            case 2:
              message.roomId = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ConnectMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientMessage.ConnectMessage} ConnectMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConnectMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ConnectMessage message.
       * @function verify
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ConnectMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
          if (!$util.isString(message.name)) return "name: string expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
          if (!$util.isString(message.roomId)) return "roomId: string expected";
        return null;
      };

      /**
       * Creates a ConnectMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientMessage.ConnectMessage} ConnectMessage
       */
      ConnectMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMessage.ConnectMessage) return object;
        var message = new $root.ClientMessage.ConnectMessage();
        if (object.name != null) message.name = String(object.name);
        if (object.roomId != null) message.roomId = String(object.roomId);
        return message;
      };

      /**
       * Creates a plain object from a ConnectMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientMessage.ConnectMessage
       * @static
       * @param {ClientMessage.ConnectMessage} message ConnectMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ConnectMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.name = "";
          object.roomId = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
          object.name = message.name;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
          object.roomId = message.roomId;
        return object;
      };

      /**
       * Converts this ConnectMessage to JSON.
       * @function toJSON
       * @memberof ClientMessage.ConnectMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ConnectMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ConnectMessage;
    })();

    ClientMessage.ChooseWordMessage = (function () {
      /**
       * Properties of a ChooseWordMessage.
       * @memberof ClientMessage
       * @interface IChooseWordMessage
       * @property {number|null} [wordIndex] ChooseWordMessage wordIndex
       */

      /**
       * Constructs a new ChooseWordMessage.
       * @memberof ClientMessage
       * @classdesc Represents a ChooseWordMessage.
       * @implements IChooseWordMessage
       * @constructor
       * @param {ClientMessage.IChooseWordMessage=} [properties] Properties to set
       */
      function ChooseWordMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * ChooseWordMessage wordIndex.
       * @member {number} wordIndex
       * @memberof ClientMessage.ChooseWordMessage
       * @instance
       */
      ChooseWordMessage.prototype.wordIndex = 0;

      /**
       * Creates a new ChooseWordMessage instance using the specified properties.
       * @function create
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {ClientMessage.IChooseWordMessage=} [properties] Properties to set
       * @returns {ClientMessage.ChooseWordMessage} ChooseWordMessage instance
       */
      ChooseWordMessage.create = function create(properties) {
        return new ChooseWordMessage(properties);
      };

      /**
       * Encodes the specified ChooseWordMessage message. Does not implicitly {@link ClientMessage.ChooseWordMessage.verify|verify} messages.
       * @function encode
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {ClientMessage.IChooseWordMessage} message ChooseWordMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChooseWordMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.wordIndex != null &&
          Object.hasOwnProperty.call(message, "wordIndex")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.wordIndex);
        return writer;
      };

      /**
       * Encodes the specified ChooseWordMessage message, length delimited. Does not implicitly {@link ClientMessage.ChooseWordMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {ClientMessage.IChooseWordMessage} message ChooseWordMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChooseWordMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ChooseWordMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientMessage.ChooseWordMessage} ChooseWordMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChooseWordMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientMessage.ChooseWordMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.wordIndex = reader.int32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ChooseWordMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientMessage.ChooseWordMessage} ChooseWordMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChooseWordMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ChooseWordMessage message.
       * @function verify
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ChooseWordMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.wordIndex != null && message.hasOwnProperty("wordIndex"))
          if (!$util.isInteger(message.wordIndex))
            return "wordIndex: integer expected";
        return null;
      };

      /**
       * Creates a ChooseWordMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientMessage.ChooseWordMessage} ChooseWordMessage
       */
      ChooseWordMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMessage.ChooseWordMessage)
          return object;
        var message = new $root.ClientMessage.ChooseWordMessage();
        if (object.wordIndex != null) message.wordIndex = object.wordIndex | 0;
        return message;
      };

      /**
       * Creates a plain object from a ChooseWordMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientMessage.ChooseWordMessage
       * @static
       * @param {ClientMessage.ChooseWordMessage} message ChooseWordMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ChooseWordMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.wordIndex = 0;
        if (message.wordIndex != null && message.hasOwnProperty("wordIndex"))
          object.wordIndex = message.wordIndex;
        return object;
      };

      /**
       * Converts this ChooseWordMessage to JSON.
       * @function toJSON
       * @memberof ClientMessage.ChooseWordMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ChooseWordMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ChooseWordMessage;
    })();

    ClientMessage.ClearCanvasMessage = (function () {
      /**
       * Properties of a ClearCanvasMessage.
       * @memberof ClientMessage
       * @interface IClearCanvasMessage
       */

      /**
       * Constructs a new ClearCanvasMessage.
       * @memberof ClientMessage
       * @classdesc Represents a ClearCanvasMessage.
       * @implements IClearCanvasMessage
       * @constructor
       * @param {ClientMessage.IClearCanvasMessage=} [properties] Properties to set
       */
      function ClearCanvasMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new ClearCanvasMessage instance using the specified properties.
       * @function create
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {ClientMessage.IClearCanvasMessage=} [properties] Properties to set
       * @returns {ClientMessage.ClearCanvasMessage} ClearCanvasMessage instance
       */
      ClearCanvasMessage.create = function create(properties) {
        return new ClearCanvasMessage(properties);
      };

      /**
       * Encodes the specified ClearCanvasMessage message. Does not implicitly {@link ClientMessage.ClearCanvasMessage.verify|verify} messages.
       * @function encode
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {ClientMessage.IClearCanvasMessage} message ClearCanvasMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ClearCanvasMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified ClearCanvasMessage message, length delimited. Does not implicitly {@link ClientMessage.ClearCanvasMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {ClientMessage.IClearCanvasMessage} message ClearCanvasMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ClearCanvasMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ClearCanvasMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientMessage.ClearCanvasMessage} ClearCanvasMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ClearCanvasMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientMessage.ClearCanvasMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ClearCanvasMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientMessage.ClearCanvasMessage} ClearCanvasMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ClearCanvasMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ClearCanvasMessage message.
       * @function verify
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ClearCanvasMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        return null;
      };

      /**
       * Creates a ClearCanvasMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientMessage.ClearCanvasMessage} ClearCanvasMessage
       */
      ClearCanvasMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMessage.ClearCanvasMessage)
          return object;
        return new $root.ClientMessage.ClearCanvasMessage();
      };

      /**
       * Creates a plain object from a ClearCanvasMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientMessage.ClearCanvasMessage
       * @static
       * @param {ClientMessage.ClearCanvasMessage} message ClearCanvasMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ClearCanvasMessage.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this ClearCanvasMessage to JSON.
       * @function toJSON
       * @memberof ClientMessage.ClearCanvasMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ClearCanvasMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ClearCanvasMessage;
    })();

    ClientMessage.DrawMessage = (function () {
      /**
       * Properties of a DrawMessage.
       * @memberof ClientMessage
       * @interface IDrawMessage
       * @property {Array.<IDrawCommand>|null} [commands] DrawMessage commands
       */

      /**
       * Constructs a new DrawMessage.
       * @memberof ClientMessage
       * @classdesc Represents a DrawMessage.
       * @implements IDrawMessage
       * @constructor
       * @param {ClientMessage.IDrawMessage=} [properties] Properties to set
       */
      function DrawMessage(properties) {
        this.commands = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * DrawMessage commands.
       * @member {Array.<IDrawCommand>} commands
       * @memberof ClientMessage.DrawMessage
       * @instance
       */
      DrawMessage.prototype.commands = $util.emptyArray;

      /**
       * Creates a new DrawMessage instance using the specified properties.
       * @function create
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {ClientMessage.IDrawMessage=} [properties] Properties to set
       * @returns {ClientMessage.DrawMessage} DrawMessage instance
       */
      DrawMessage.create = function create(properties) {
        return new DrawMessage(properties);
      };

      /**
       * Encodes the specified DrawMessage message. Does not implicitly {@link ClientMessage.DrawMessage.verify|verify} messages.
       * @function encode
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {ClientMessage.IDrawMessage} message DrawMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DrawMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.commands != null && message.commands.length)
          for (var i = 0; i < message.commands.length; ++i)
            $root.DrawCommand.encode(
              message.commands[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified DrawMessage message, length delimited. Does not implicitly {@link ClientMessage.DrawMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {ClientMessage.IDrawMessage} message DrawMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DrawMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DrawMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientMessage.DrawMessage} DrawMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DrawMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientMessage.DrawMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              if (!(message.commands && message.commands.length))
                message.commands = [];
              message.commands.push(
                $root.DrawCommand.decode(reader, reader.uint32())
              );
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DrawMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientMessage.DrawMessage} DrawMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DrawMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DrawMessage message.
       * @function verify
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DrawMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.commands != null && message.hasOwnProperty("commands")) {
          if (!Array.isArray(message.commands))
            return "commands: array expected";
          for (var i = 0; i < message.commands.length; ++i) {
            var error = $root.DrawCommand.verify(message.commands[i]);
            if (error) return "commands." + error;
          }
        }
        return null;
      };

      /**
       * Creates a DrawMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientMessage.DrawMessage} DrawMessage
       */
      DrawMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMessage.DrawMessage) return object;
        var message = new $root.ClientMessage.DrawMessage();
        if (object.commands) {
          if (!Array.isArray(object.commands))
            throw TypeError(
              ".ClientMessage.DrawMessage.commands: array expected"
            );
          message.commands = [];
          for (var i = 0; i < object.commands.length; ++i) {
            if (typeof object.commands[i] !== "object")
              throw TypeError(
                ".ClientMessage.DrawMessage.commands: object expected"
              );
            message.commands[i] = $root.DrawCommand.fromObject(
              object.commands[i]
            );
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a DrawMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientMessage.DrawMessage
       * @static
       * @param {ClientMessage.DrawMessage} message DrawMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DrawMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.commands = [];
        if (message.commands && message.commands.length) {
          object.commands = [];
          for (var j = 0; j < message.commands.length; ++j)
            object.commands[j] = $root.DrawCommand.toObject(
              message.commands[j],
              options
            );
        }
        return object;
      };

      /**
       * Converts this DrawMessage to JSON.
       * @function toJSON
       * @memberof ClientMessage.DrawMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DrawMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return DrawMessage;
    })();

    ClientMessage.ChatMessage = (function () {
      /**
       * Properties of a ChatMessage.
       * @memberof ClientMessage
       * @interface IChatMessage
       * @property {string|null} [message] ChatMessage message
       */

      /**
       * Constructs a new ChatMessage.
       * @memberof ClientMessage
       * @classdesc Represents a ChatMessage.
       * @implements IChatMessage
       * @constructor
       * @param {ClientMessage.IChatMessage=} [properties] Properties to set
       */
      function ChatMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * ChatMessage message.
       * @member {string} message
       * @memberof ClientMessage.ChatMessage
       * @instance
       */
      ChatMessage.prototype.message = "";

      /**
       * Creates a new ChatMessage instance using the specified properties.
       * @function create
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {ClientMessage.IChatMessage=} [properties] Properties to set
       * @returns {ClientMessage.ChatMessage} ChatMessage instance
       */
      ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
      };

      /**
       * Encodes the specified ChatMessage message. Does not implicitly {@link ClientMessage.ChatMessage.verify|verify} messages.
       * @function encode
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {ClientMessage.IChatMessage} message ChatMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChatMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.message != null &&
          Object.hasOwnProperty.call(message, "message")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.message);
        return writer;
      };

      /**
       * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ClientMessage.ChatMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {ClientMessage.IChatMessage} message ChatMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ChatMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientMessage.ChatMessage} ChatMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientMessage.ChatMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.message = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientMessage.ChatMessage} ChatMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ChatMessage message.
       * @function verify
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
          if (!$util.isString(message.message))
            return "message: string expected";
        return null;
      };

      /**
       * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientMessage.ChatMessage} ChatMessage
       */
      ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMessage.ChatMessage) return object;
        var message = new $root.ClientMessage.ChatMessage();
        if (object.message != null) message.message = String(object.message);
        return message;
      };

      /**
       * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientMessage.ChatMessage
       * @static
       * @param {ClientMessage.ChatMessage} message ChatMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ChatMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.message = "";
        if (message.message != null && message.hasOwnProperty("message"))
          object.message = message.message;
        return object;
      };

      /**
       * Converts this ChatMessage to JSON.
       * @function toJSON
       * @memberof ClientMessage.ChatMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ChatMessage;
    })();

    ClientMessage.StartGameMessage = (function () {
      /**
       * Properties of a StartGameMessage.
       * @memberof ClientMessage
       * @interface IStartGameMessage
       */

      /**
       * Constructs a new StartGameMessage.
       * @memberof ClientMessage
       * @classdesc Represents a StartGameMessage.
       * @implements IStartGameMessage
       * @constructor
       * @param {ClientMessage.IStartGameMessage=} [properties] Properties to set
       */
      function StartGameMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new StartGameMessage instance using the specified properties.
       * @function create
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {ClientMessage.IStartGameMessage=} [properties] Properties to set
       * @returns {ClientMessage.StartGameMessage} StartGameMessage instance
       */
      StartGameMessage.create = function create(properties) {
        return new StartGameMessage(properties);
      };

      /**
       * Encodes the specified StartGameMessage message. Does not implicitly {@link ClientMessage.StartGameMessage.verify|verify} messages.
       * @function encode
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {ClientMessage.IStartGameMessage} message StartGameMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StartGameMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified StartGameMessage message, length delimited. Does not implicitly {@link ClientMessage.StartGameMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {ClientMessage.IStartGameMessage} message StartGameMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StartGameMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a StartGameMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientMessage.StartGameMessage} StartGameMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StartGameMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientMessage.StartGameMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a StartGameMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientMessage.StartGameMessage} StartGameMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StartGameMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a StartGameMessage message.
       * @function verify
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      StartGameMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        return null;
      };

      /**
       * Creates a StartGameMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientMessage.StartGameMessage} StartGameMessage
       */
      StartGameMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMessage.StartGameMessage)
          return object;
        return new $root.ClientMessage.StartGameMessage();
      };

      /**
       * Creates a plain object from a StartGameMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientMessage.StartGameMessage
       * @static
       * @param {ClientMessage.StartGameMessage} message StartGameMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      StartGameMessage.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this StartGameMessage to JSON.
       * @function toJSON
       * @memberof ClientMessage.StartGameMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      StartGameMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return StartGameMessage;
    })();

    return ClientMessage;
  })();

  $root.Color = (function () {
    /**
     * Properties of a Color.
     * @exports IColor
     * @interface IColor
     * @property {number|null} [red] Color red
     * @property {number|null} [green] Color green
     * @property {number|null} [blue] Color blue
     * @property {number|null} [opacity] Color opacity
     */

    /**
     * Constructs a new Color.
     * @exports Color
     * @classdesc Represents a Color.
     * @implements IColor
     * @constructor
     * @param {IColor=} [properties] Properties to set
     */
    function Color(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Color red.
     * @member {number} red
     * @memberof Color
     * @instance
     */
    Color.prototype.red = 0;

    /**
     * Color green.
     * @member {number} green
     * @memberof Color
     * @instance
     */
    Color.prototype.green = 0;

    /**
     * Color blue.
     * @member {number} blue
     * @memberof Color
     * @instance
     */
    Color.prototype.blue = 0;

    /**
     * Color opacity.
     * @member {number} opacity
     * @memberof Color
     * @instance
     */
    Color.prototype.opacity = 0;

    /**
     * Creates a new Color instance using the specified properties.
     * @function create
     * @memberof Color
     * @static
     * @param {IColor=} [properties] Properties to set
     * @returns {Color} Color instance
     */
    Color.create = function create(properties) {
      return new Color(properties);
    };

    /**
     * Encodes the specified Color message. Does not implicitly {@link Color.verify|verify} messages.
     * @function encode
     * @memberof Color
     * @static
     * @param {IColor} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Color.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.red != null && Object.hasOwnProperty.call(message, "red"))
        writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.red);
      if (message.green != null && Object.hasOwnProperty.call(message, "green"))
        writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.green);
      if (message.blue != null && Object.hasOwnProperty.call(message, "blue"))
        writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.blue);
      if (
        message.opacity != null &&
        Object.hasOwnProperty.call(message, "opacity")
      )
        writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.opacity);
      return writer;
    };

    /**
     * Encodes the specified Color message, length delimited. Does not implicitly {@link Color.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Color
     * @static
     * @param {IColor} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Color.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Color message from the specified reader or buffer.
     * @function decode
     * @memberof Color
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Color} Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Color.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Color();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.red = reader.double();
            break;
          case 2:
            message.green = reader.double();
            break;
          case 3:
            message.blue = reader.double();
            break;
          case 4:
            message.opacity = reader.double();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Color message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Color
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Color} Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Color.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Color message.
     * @function verify
     * @memberof Color
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Color.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.red != null && message.hasOwnProperty("red"))
        if (typeof message.red !== "number") return "red: number expected";
      if (message.green != null && message.hasOwnProperty("green"))
        if (typeof message.green !== "number") return "green: number expected";
      if (message.blue != null && message.hasOwnProperty("blue"))
        if (typeof message.blue !== "number") return "blue: number expected";
      if (message.opacity != null && message.hasOwnProperty("opacity"))
        if (typeof message.opacity !== "number")
          return "opacity: number expected";
      return null;
    };

    /**
     * Creates a Color message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Color
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Color} Color
     */
    Color.fromObject = function fromObject(object) {
      if (object instanceof $root.Color) return object;
      var message = new $root.Color();
      if (object.red != null) message.red = Number(object.red);
      if (object.green != null) message.green = Number(object.green);
      if (object.blue != null) message.blue = Number(object.blue);
      if (object.opacity != null) message.opacity = Number(object.opacity);
      return message;
    };

    /**
     * Creates a plain object from a Color message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Color
     * @static
     * @param {Color} message Color
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Color.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.red = 0;
        object.green = 0;
        object.blue = 0;
        object.opacity = 0;
      }
      if (message.red != null && message.hasOwnProperty("red"))
        object.red =
          options.json && !isFinite(message.red)
            ? String(message.red)
            : message.red;
      if (message.green != null && message.hasOwnProperty("green"))
        object.green =
          options.json && !isFinite(message.green)
            ? String(message.green)
            : message.green;
      if (message.blue != null && message.hasOwnProperty("blue"))
        object.blue =
          options.json && !isFinite(message.blue)
            ? String(message.blue)
            : message.blue;
      if (message.opacity != null && message.hasOwnProperty("opacity"))
        object.opacity =
          options.json && !isFinite(message.opacity)
            ? String(message.opacity)
            : message.opacity;
      return object;
    };

    /**
     * Converts this Color to JSON.
     * @function toJSON
     * @memberof Color
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Color.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Color;
  })();

  $root.DrawState = (function () {
    /**
     * Properties of a DrawState.
     * @exports IDrawState
     * @interface IDrawState
     * @property {IColor|null} [color] DrawState color
     * @property {number|null} [lineWidth] DrawState lineWidth
     */

    /**
     * Constructs a new DrawState.
     * @exports DrawState
     * @classdesc Represents a DrawState.
     * @implements IDrawState
     * @constructor
     * @param {IDrawState=} [properties] Properties to set
     */
    function DrawState(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DrawState color.
     * @member {IColor|null|undefined} color
     * @memberof DrawState
     * @instance
     */
    DrawState.prototype.color = null;

    /**
     * DrawState lineWidth.
     * @member {number} lineWidth
     * @memberof DrawState
     * @instance
     */
    DrawState.prototype.lineWidth = 0;

    /**
     * Creates a new DrawState instance using the specified properties.
     * @function create
     * @memberof DrawState
     * @static
     * @param {IDrawState=} [properties] Properties to set
     * @returns {DrawState} DrawState instance
     */
    DrawState.create = function create(properties) {
      return new DrawState(properties);
    };

    /**
     * Encodes the specified DrawState message. Does not implicitly {@link DrawState.verify|verify} messages.
     * @function encode
     * @memberof DrawState
     * @static
     * @param {IDrawState} message DrawState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawState.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.color != null && Object.hasOwnProperty.call(message, "color"))
        $root.Color.encode(
          message.color,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.lineWidth != null &&
        Object.hasOwnProperty.call(message, "lineWidth")
      )
        writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.lineWidth);
      return writer;
    };

    /**
     * Encodes the specified DrawState message, length delimited. Does not implicitly {@link DrawState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DrawState
     * @static
     * @param {IDrawState} message DrawState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawState.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DrawState message from the specified reader or buffer.
     * @function decode
     * @memberof DrawState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DrawState} DrawState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawState.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.DrawState();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.color = $root.Color.decode(reader, reader.uint32());
            break;
          case 2:
            message.lineWidth = reader.double();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DrawState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DrawState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DrawState} DrawState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawState.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DrawState message.
     * @function verify
     * @memberof DrawState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DrawState.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.color != null && message.hasOwnProperty("color")) {
        var error = $root.Color.verify(message.color);
        if (error) return "color." + error;
      }
      if (message.lineWidth != null && message.hasOwnProperty("lineWidth"))
        if (typeof message.lineWidth !== "number")
          return "lineWidth: number expected";
      return null;
    };

    /**
     * Creates a DrawState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DrawState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DrawState} DrawState
     */
    DrawState.fromObject = function fromObject(object) {
      if (object instanceof $root.DrawState) return object;
      var message = new $root.DrawState();
      if (object.color != null) {
        if (typeof object.color !== "object")
          throw TypeError(".DrawState.color: object expected");
        message.color = $root.Color.fromObject(object.color);
      }
      if (object.lineWidth != null)
        message.lineWidth = Number(object.lineWidth);
      return message;
    };

    /**
     * Creates a plain object from a DrawState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DrawState
     * @static
     * @param {DrawState} message DrawState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DrawState.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.color = null;
        object.lineWidth = 0;
      }
      if (message.color != null && message.hasOwnProperty("color"))
        object.color = $root.Color.toObject(message.color, options);
      if (message.lineWidth != null && message.hasOwnProperty("lineWidth"))
        object.lineWidth =
          options.json && !isFinite(message.lineWidth)
            ? String(message.lineWidth)
            : message.lineWidth;
      return object;
    };

    /**
     * Converts this DrawState to JSON.
     * @function toJSON
     * @memberof DrawState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DrawState.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DrawState;
  })();

  $root.DrawBeginPath = (function () {
    /**
     * Properties of a DrawBeginPath.
     * @exports IDrawBeginPath
     * @interface IDrawBeginPath
     * @property {IDrawState|null} [state] DrawBeginPath state
     */

    /**
     * Constructs a new DrawBeginPath.
     * @exports DrawBeginPath
     * @classdesc Represents a DrawBeginPath.
     * @implements IDrawBeginPath
     * @constructor
     * @param {IDrawBeginPath=} [properties] Properties to set
     */
    function DrawBeginPath(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DrawBeginPath state.
     * @member {IDrawState|null|undefined} state
     * @memberof DrawBeginPath
     * @instance
     */
    DrawBeginPath.prototype.state = null;

    /**
     * Creates a new DrawBeginPath instance using the specified properties.
     * @function create
     * @memberof DrawBeginPath
     * @static
     * @param {IDrawBeginPath=} [properties] Properties to set
     * @returns {DrawBeginPath} DrawBeginPath instance
     */
    DrawBeginPath.create = function create(properties) {
      return new DrawBeginPath(properties);
    };

    /**
     * Encodes the specified DrawBeginPath message. Does not implicitly {@link DrawBeginPath.verify|verify} messages.
     * @function encode
     * @memberof DrawBeginPath
     * @static
     * @param {IDrawBeginPath} message DrawBeginPath message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawBeginPath.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.state != null && Object.hasOwnProperty.call(message, "state"))
        $root.DrawState.encode(
          message.state,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified DrawBeginPath message, length delimited. Does not implicitly {@link DrawBeginPath.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DrawBeginPath
     * @static
     * @param {IDrawBeginPath} message DrawBeginPath message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawBeginPath.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DrawBeginPath message from the specified reader or buffer.
     * @function decode
     * @memberof DrawBeginPath
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DrawBeginPath} DrawBeginPath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawBeginPath.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.DrawBeginPath();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.state = $root.DrawState.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DrawBeginPath message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DrawBeginPath
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DrawBeginPath} DrawBeginPath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawBeginPath.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DrawBeginPath message.
     * @function verify
     * @memberof DrawBeginPath
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DrawBeginPath.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.state != null && message.hasOwnProperty("state")) {
        var error = $root.DrawState.verify(message.state);
        if (error) return "state." + error;
      }
      return null;
    };

    /**
     * Creates a DrawBeginPath message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DrawBeginPath
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DrawBeginPath} DrawBeginPath
     */
    DrawBeginPath.fromObject = function fromObject(object) {
      if (object instanceof $root.DrawBeginPath) return object;
      var message = new $root.DrawBeginPath();
      if (object.state != null) {
        if (typeof object.state !== "object")
          throw TypeError(".DrawBeginPath.state: object expected");
        message.state = $root.DrawState.fromObject(object.state);
      }
      return message;
    };

    /**
     * Creates a plain object from a DrawBeginPath message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DrawBeginPath
     * @static
     * @param {DrawBeginPath} message DrawBeginPath
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DrawBeginPath.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.state = null;
      if (message.state != null && message.hasOwnProperty("state"))
        object.state = $root.DrawState.toObject(message.state, options);
      return object;
    };

    /**
     * Converts this DrawBeginPath to JSON.
     * @function toJSON
     * @memberof DrawBeginPath
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DrawBeginPath.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DrawBeginPath;
  })();

  $root.DrawLineTo = (function () {
    /**
     * Properties of a DrawLineTo.
     * @exports IDrawLineTo
     * @interface IDrawLineTo
     * @property {number|null} [fromX] DrawLineTo fromX
     * @property {number|null} [fromY] DrawLineTo fromY
     * @property {number|null} [toX] DrawLineTo toX
     * @property {number|null} [toY] DrawLineTo toY
     */

    /**
     * Constructs a new DrawLineTo.
     * @exports DrawLineTo
     * @classdesc Represents a DrawLineTo.
     * @implements IDrawLineTo
     * @constructor
     * @param {IDrawLineTo=} [properties] Properties to set
     */
    function DrawLineTo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DrawLineTo fromX.
     * @member {number} fromX
     * @memberof DrawLineTo
     * @instance
     */
    DrawLineTo.prototype.fromX = 0;

    /**
     * DrawLineTo fromY.
     * @member {number} fromY
     * @memberof DrawLineTo
     * @instance
     */
    DrawLineTo.prototype.fromY = 0;

    /**
     * DrawLineTo toX.
     * @member {number} toX
     * @memberof DrawLineTo
     * @instance
     */
    DrawLineTo.prototype.toX = 0;

    /**
     * DrawLineTo toY.
     * @member {number} toY
     * @memberof DrawLineTo
     * @instance
     */
    DrawLineTo.prototype.toY = 0;

    /**
     * Creates a new DrawLineTo instance using the specified properties.
     * @function create
     * @memberof DrawLineTo
     * @static
     * @param {IDrawLineTo=} [properties] Properties to set
     * @returns {DrawLineTo} DrawLineTo instance
     */
    DrawLineTo.create = function create(properties) {
      return new DrawLineTo(properties);
    };

    /**
     * Encodes the specified DrawLineTo message. Does not implicitly {@link DrawLineTo.verify|verify} messages.
     * @function encode
     * @memberof DrawLineTo
     * @static
     * @param {IDrawLineTo} message DrawLineTo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawLineTo.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fromX != null && Object.hasOwnProperty.call(message, "fromX"))
        writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.fromX);
      if (message.fromY != null && Object.hasOwnProperty.call(message, "fromY"))
        writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.fromY);
      if (message.toX != null && Object.hasOwnProperty.call(message, "toX"))
        writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.toX);
      if (message.toY != null && Object.hasOwnProperty.call(message, "toY"))
        writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.toY);
      return writer;
    };

    /**
     * Encodes the specified DrawLineTo message, length delimited. Does not implicitly {@link DrawLineTo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DrawLineTo
     * @static
     * @param {IDrawLineTo} message DrawLineTo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawLineTo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DrawLineTo message from the specified reader or buffer.
     * @function decode
     * @memberof DrawLineTo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DrawLineTo} DrawLineTo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawLineTo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.DrawLineTo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 4:
            message.fromX = reader.double();
            break;
          case 5:
            message.fromY = reader.double();
            break;
          case 6:
            message.toX = reader.double();
            break;
          case 7:
            message.toY = reader.double();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DrawLineTo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DrawLineTo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DrawLineTo} DrawLineTo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawLineTo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DrawLineTo message.
     * @function verify
     * @memberof DrawLineTo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DrawLineTo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fromX != null && message.hasOwnProperty("fromX"))
        if (typeof message.fromX !== "number") return "fromX: number expected";
      if (message.fromY != null && message.hasOwnProperty("fromY"))
        if (typeof message.fromY !== "number") return "fromY: number expected";
      if (message.toX != null && message.hasOwnProperty("toX"))
        if (typeof message.toX !== "number") return "toX: number expected";
      if (message.toY != null && message.hasOwnProperty("toY"))
        if (typeof message.toY !== "number") return "toY: number expected";
      return null;
    };

    /**
     * Creates a DrawLineTo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DrawLineTo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DrawLineTo} DrawLineTo
     */
    DrawLineTo.fromObject = function fromObject(object) {
      if (object instanceof $root.DrawLineTo) return object;
      var message = new $root.DrawLineTo();
      if (object.fromX != null) message.fromX = Number(object.fromX);
      if (object.fromY != null) message.fromY = Number(object.fromY);
      if (object.toX != null) message.toX = Number(object.toX);
      if (object.toY != null) message.toY = Number(object.toY);
      return message;
    };

    /**
     * Creates a plain object from a DrawLineTo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DrawLineTo
     * @static
     * @param {DrawLineTo} message DrawLineTo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DrawLineTo.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.fromX = 0;
        object.fromY = 0;
        object.toX = 0;
        object.toY = 0;
      }
      if (message.fromX != null && message.hasOwnProperty("fromX"))
        object.fromX =
          options.json && !isFinite(message.fromX)
            ? String(message.fromX)
            : message.fromX;
      if (message.fromY != null && message.hasOwnProperty("fromY"))
        object.fromY =
          options.json && !isFinite(message.fromY)
            ? String(message.fromY)
            : message.fromY;
      if (message.toX != null && message.hasOwnProperty("toX"))
        object.toX =
          options.json && !isFinite(message.toX)
            ? String(message.toX)
            : message.toX;
      if (message.toY != null && message.hasOwnProperty("toY"))
        object.toY =
          options.json && !isFinite(message.toY)
            ? String(message.toY)
            : message.toY;
      return object;
    };

    /**
     * Converts this DrawLineTo to JSON.
     * @function toJSON
     * @memberof DrawLineTo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DrawLineTo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DrawLineTo;
  })();

  $root.DrawClosePath = (function () {
    /**
     * Properties of a DrawClosePath.
     * @exports IDrawClosePath
     * @interface IDrawClosePath
     */

    /**
     * Constructs a new DrawClosePath.
     * @exports DrawClosePath
     * @classdesc Represents a DrawClosePath.
     * @implements IDrawClosePath
     * @constructor
     * @param {IDrawClosePath=} [properties] Properties to set
     */
    function DrawClosePath(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new DrawClosePath instance using the specified properties.
     * @function create
     * @memberof DrawClosePath
     * @static
     * @param {IDrawClosePath=} [properties] Properties to set
     * @returns {DrawClosePath} DrawClosePath instance
     */
    DrawClosePath.create = function create(properties) {
      return new DrawClosePath(properties);
    };

    /**
     * Encodes the specified DrawClosePath message. Does not implicitly {@link DrawClosePath.verify|verify} messages.
     * @function encode
     * @memberof DrawClosePath
     * @static
     * @param {IDrawClosePath} message DrawClosePath message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawClosePath.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified DrawClosePath message, length delimited. Does not implicitly {@link DrawClosePath.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DrawClosePath
     * @static
     * @param {IDrawClosePath} message DrawClosePath message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawClosePath.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DrawClosePath message from the specified reader or buffer.
     * @function decode
     * @memberof DrawClosePath
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DrawClosePath} DrawClosePath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawClosePath.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.DrawClosePath();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DrawClosePath message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DrawClosePath
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DrawClosePath} DrawClosePath
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawClosePath.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DrawClosePath message.
     * @function verify
     * @memberof DrawClosePath
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DrawClosePath.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };

    /**
     * Creates a DrawClosePath message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DrawClosePath
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DrawClosePath} DrawClosePath
     */
    DrawClosePath.fromObject = function fromObject(object) {
      if (object instanceof $root.DrawClosePath) return object;
      return new $root.DrawClosePath();
    };

    /**
     * Creates a plain object from a DrawClosePath message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DrawClosePath
     * @static
     * @param {DrawClosePath} message DrawClosePath
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DrawClosePath.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this DrawClosePath to JSON.
     * @function toJSON
     * @memberof DrawClosePath
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DrawClosePath.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DrawClosePath;
  })();

  $root.DrawFill = (function () {
    /**
     * Properties of a DrawFill.
     * @exports IDrawFill
     * @interface IDrawFill
     * @property {IColor|null} [color] DrawFill color
     */

    /**
     * Constructs a new DrawFill.
     * @exports DrawFill
     * @classdesc Represents a DrawFill.
     * @implements IDrawFill
     * @constructor
     * @param {IDrawFill=} [properties] Properties to set
     */
    function DrawFill(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DrawFill color.
     * @member {IColor|null|undefined} color
     * @memberof DrawFill
     * @instance
     */
    DrawFill.prototype.color = null;

    /**
     * Creates a new DrawFill instance using the specified properties.
     * @function create
     * @memberof DrawFill
     * @static
     * @param {IDrawFill=} [properties] Properties to set
     * @returns {DrawFill} DrawFill instance
     */
    DrawFill.create = function create(properties) {
      return new DrawFill(properties);
    };

    /**
     * Encodes the specified DrawFill message. Does not implicitly {@link DrawFill.verify|verify} messages.
     * @function encode
     * @memberof DrawFill
     * @static
     * @param {IDrawFill} message DrawFill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawFill.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.color != null && Object.hasOwnProperty.call(message, "color"))
        $root.Color.encode(
          message.color,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified DrawFill message, length delimited. Does not implicitly {@link DrawFill.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DrawFill
     * @static
     * @param {IDrawFill} message DrawFill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawFill.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DrawFill message from the specified reader or buffer.
     * @function decode
     * @memberof DrawFill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DrawFill} DrawFill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawFill.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.DrawFill();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.color = $root.Color.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DrawFill message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DrawFill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DrawFill} DrawFill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawFill.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DrawFill message.
     * @function verify
     * @memberof DrawFill
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DrawFill.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.color != null && message.hasOwnProperty("color")) {
        var error = $root.Color.verify(message.color);
        if (error) return "color." + error;
      }
      return null;
    };

    /**
     * Creates a DrawFill message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DrawFill
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DrawFill} DrawFill
     */
    DrawFill.fromObject = function fromObject(object) {
      if (object instanceof $root.DrawFill) return object;
      var message = new $root.DrawFill();
      if (object.color != null) {
        if (typeof object.color !== "object")
          throw TypeError(".DrawFill.color: object expected");
        message.color = $root.Color.fromObject(object.color);
      }
      return message;
    };

    /**
     * Creates a plain object from a DrawFill message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DrawFill
     * @static
     * @param {DrawFill} message DrawFill
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DrawFill.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.color = null;
      if (message.color != null && message.hasOwnProperty("color"))
        object.color = $root.Color.toObject(message.color, options);
      return object;
    };

    /**
     * Converts this DrawFill to JSON.
     * @function toJSON
     * @memberof DrawFill
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DrawFill.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DrawFill;
  })();

  $root.DrawCommand = (function () {
    /**
     * Properties of a DrawCommand.
     * @exports IDrawCommand
     * @interface IDrawCommand
     * @property {IDrawBeginPath|null} [beginPath] DrawCommand beginPath
     * @property {IDrawLineTo|null} [lineTo] DrawCommand lineTo
     * @property {IDrawClosePath|null} [closePath] DrawCommand closePath
     * @property {IDrawFill|null} [fill] DrawCommand fill
     */

    /**
     * Constructs a new DrawCommand.
     * @exports DrawCommand
     * @classdesc Represents a DrawCommand.
     * @implements IDrawCommand
     * @constructor
     * @param {IDrawCommand=} [properties] Properties to set
     */
    function DrawCommand(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DrawCommand beginPath.
     * @member {IDrawBeginPath|null|undefined} beginPath
     * @memberof DrawCommand
     * @instance
     */
    DrawCommand.prototype.beginPath = null;

    /**
     * DrawCommand lineTo.
     * @member {IDrawLineTo|null|undefined} lineTo
     * @memberof DrawCommand
     * @instance
     */
    DrawCommand.prototype.lineTo = null;

    /**
     * DrawCommand closePath.
     * @member {IDrawClosePath|null|undefined} closePath
     * @memberof DrawCommand
     * @instance
     */
    DrawCommand.prototype.closePath = null;

    /**
     * DrawCommand fill.
     * @member {IDrawFill|null|undefined} fill
     * @memberof DrawCommand
     * @instance
     */
    DrawCommand.prototype.fill = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * DrawCommand command.
     * @member {"beginPath"|"lineTo"|"closePath"|"fill"|undefined} command
     * @memberof DrawCommand
     * @instance
     */
    Object.defineProperty(DrawCommand.prototype, "command", {
      get: $util.oneOfGetter(
        ($oneOfFields = ["beginPath", "lineTo", "closePath", "fill"])
      ),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new DrawCommand instance using the specified properties.
     * @function create
     * @memberof DrawCommand
     * @static
     * @param {IDrawCommand=} [properties] Properties to set
     * @returns {DrawCommand} DrawCommand instance
     */
    DrawCommand.create = function create(properties) {
      return new DrawCommand(properties);
    };

    /**
     * Encodes the specified DrawCommand message. Does not implicitly {@link DrawCommand.verify|verify} messages.
     * @function encode
     * @memberof DrawCommand
     * @static
     * @param {IDrawCommand} message DrawCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawCommand.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.beginPath != null &&
        Object.hasOwnProperty.call(message, "beginPath")
      )
        $root.DrawBeginPath.encode(
          message.beginPath,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.lineTo != null &&
        Object.hasOwnProperty.call(message, "lineTo")
      )
        $root.DrawLineTo.encode(
          message.lineTo,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.closePath != null &&
        Object.hasOwnProperty.call(message, "closePath")
      )
        $root.DrawClosePath.encode(
          message.closePath,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (message.fill != null && Object.hasOwnProperty.call(message, "fill"))
        $root.DrawFill.encode(
          message.fill,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified DrawCommand message, length delimited. Does not implicitly {@link DrawCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DrawCommand
     * @static
     * @param {IDrawCommand} message DrawCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DrawCommand.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DrawCommand message from the specified reader or buffer.
     * @function decode
     * @memberof DrawCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DrawCommand} DrawCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawCommand.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.DrawCommand();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.beginPath = $root.DrawBeginPath.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.lineTo = $root.DrawLineTo.decode(reader, reader.uint32());
            break;
          case 3:
            message.closePath = $root.DrawClosePath.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.fill = $root.DrawFill.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DrawCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DrawCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DrawCommand} DrawCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DrawCommand.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DrawCommand message.
     * @function verify
     * @memberof DrawCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DrawCommand.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var properties = {};
      if (message.beginPath != null && message.hasOwnProperty("beginPath")) {
        properties.command = 1;
        {
          var error = $root.DrawBeginPath.verify(message.beginPath);
          if (error) return "beginPath." + error;
        }
      }
      if (message.lineTo != null && message.hasOwnProperty("lineTo")) {
        if (properties.command === 1) return "command: multiple values";
        properties.command = 1;
        {
          var error = $root.DrawLineTo.verify(message.lineTo);
          if (error) return "lineTo." + error;
        }
      }
      if (message.closePath != null && message.hasOwnProperty("closePath")) {
        if (properties.command === 1) return "command: multiple values";
        properties.command = 1;
        {
          var error = $root.DrawClosePath.verify(message.closePath);
          if (error) return "closePath." + error;
        }
      }
      if (message.fill != null && message.hasOwnProperty("fill")) {
        if (properties.command === 1) return "command: multiple values";
        properties.command = 1;
        {
          var error = $root.DrawFill.verify(message.fill);
          if (error) return "fill." + error;
        }
      }
      return null;
    };

    /**
     * Creates a DrawCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DrawCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DrawCommand} DrawCommand
     */
    DrawCommand.fromObject = function fromObject(object) {
      if (object instanceof $root.DrawCommand) return object;
      var message = new $root.DrawCommand();
      if (object.beginPath != null) {
        if (typeof object.beginPath !== "object")
          throw TypeError(".DrawCommand.beginPath: object expected");
        message.beginPath = $root.DrawBeginPath.fromObject(object.beginPath);
      }
      if (object.lineTo != null) {
        if (typeof object.lineTo !== "object")
          throw TypeError(".DrawCommand.lineTo: object expected");
        message.lineTo = $root.DrawLineTo.fromObject(object.lineTo);
      }
      if (object.closePath != null) {
        if (typeof object.closePath !== "object")
          throw TypeError(".DrawCommand.closePath: object expected");
        message.closePath = $root.DrawClosePath.fromObject(object.closePath);
      }
      if (object.fill != null) {
        if (typeof object.fill !== "object")
          throw TypeError(".DrawCommand.fill: object expected");
        message.fill = $root.DrawFill.fromObject(object.fill);
      }
      return message;
    };

    /**
     * Creates a plain object from a DrawCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DrawCommand
     * @static
     * @param {DrawCommand} message DrawCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DrawCommand.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (message.beginPath != null && message.hasOwnProperty("beginPath")) {
        object.beginPath = $root.DrawBeginPath.toObject(
          message.beginPath,
          options
        );
        if (options.oneofs) object.command = "beginPath";
      }
      if (message.lineTo != null && message.hasOwnProperty("lineTo")) {
        object.lineTo = $root.DrawLineTo.toObject(message.lineTo, options);
        if (options.oneofs) object.command = "lineTo";
      }
      if (message.closePath != null && message.hasOwnProperty("closePath")) {
        object.closePath = $root.DrawClosePath.toObject(
          message.closePath,
          options
        );
        if (options.oneofs) object.command = "closePath";
      }
      if (message.fill != null && message.hasOwnProperty("fill")) {
        object.fill = $root.DrawFill.toObject(message.fill, options);
        if (options.oneofs) object.command = "fill";
      }
      return object;
    };

    /**
     * Converts this DrawCommand to JSON.
     * @function toJSON
     * @memberof DrawCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DrawCommand.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DrawCommand;
  })();

  $root.ServerMessage = (function () {
    /**
     * Properties of a ServerMessage.
     * @exports IServerMessage
     * @interface IServerMessage
     * @property {ServerMessage.IChooseWordMessage|null} [chooseWord] ServerMessage chooseWord
     * @property {ServerMessage.IClearCanvasMessage|null} [clearCanvas] ServerMessage clearCanvas
     * @property {ServerMessage.IConnectedMessage|null} [connected] ServerMessage connected
     * @property {ServerMessage.ICurrentWordUpdateMessage|null} [currentWordUpdate] ServerMessage currentWordUpdate
     * @property {ServerMessage.IDisconnectedMessage|null} [disconnected] ServerMessage disconnected
     * @property {ServerMessage.IPlayerConnectedMessage|null} [playerConnected] ServerMessage playerConnected
     * @property {ServerMessage.IPlayerDisconnectedMessage|null} [playerDisconnected] ServerMessage playerDisconnected
     * @property {ServerMessage.IPlayerGuessedMessage|null} [playerGuessed] ServerMessage playerGuessed
     * @property {ServerMessage.IWordRevealMessage|null} [wordReveal] ServerMessage wordReveal
     * @property {ServerMessage.IChatMessage|null} [chatMessage] ServerMessage chatMessage
     * @property {ServerMessage.IGameStartedMessage|null} [gameStarted] ServerMessage gameStarted
     * @property {ServerMessage.IUpdateDrawingPlayerMessage|null} [updatePlayerDrawing] ServerMessage updatePlayerDrawing
     * @property {ServerMessage.IErrorMessage|null} [errorMessage] ServerMessage errorMessage
     * @property {ServerMessage.IShowRoomMessage|null} [showRoom] ServerMessage showRoom
     * @property {ServerMessage.ILobbyOwnerChanged|null} [lobbyOwnerChange] ServerMessage lobbyOwnerChange
     */

    /**
     * Constructs a new ServerMessage.
     * @exports ServerMessage
     * @classdesc Represents a ServerMessage.
     * @implements IServerMessage
     * @constructor
     * @param {IServerMessage=} [properties] Properties to set
     */
    function ServerMessage(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerMessage chooseWord.
     * @member {ServerMessage.IChooseWordMessage|null|undefined} chooseWord
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.chooseWord = null;

    /**
     * ServerMessage clearCanvas.
     * @member {ServerMessage.IClearCanvasMessage|null|undefined} clearCanvas
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.clearCanvas = null;

    /**
     * ServerMessage connected.
     * @member {ServerMessage.IConnectedMessage|null|undefined} connected
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.connected = null;

    /**
     * ServerMessage currentWordUpdate.
     * @member {ServerMessage.ICurrentWordUpdateMessage|null|undefined} currentWordUpdate
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.currentWordUpdate = null;

    /**
     * ServerMessage disconnected.
     * @member {ServerMessage.IDisconnectedMessage|null|undefined} disconnected
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.disconnected = null;

    /**
     * ServerMessage playerConnected.
     * @member {ServerMessage.IPlayerConnectedMessage|null|undefined} playerConnected
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.playerConnected = null;

    /**
     * ServerMessage playerDisconnected.
     * @member {ServerMessage.IPlayerDisconnectedMessage|null|undefined} playerDisconnected
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.playerDisconnected = null;

    /**
     * ServerMessage playerGuessed.
     * @member {ServerMessage.IPlayerGuessedMessage|null|undefined} playerGuessed
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.playerGuessed = null;

    /**
     * ServerMessage wordReveal.
     * @member {ServerMessage.IWordRevealMessage|null|undefined} wordReveal
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.wordReveal = null;

    /**
     * ServerMessage chatMessage.
     * @member {ServerMessage.IChatMessage|null|undefined} chatMessage
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.chatMessage = null;

    /**
     * ServerMessage gameStarted.
     * @member {ServerMessage.IGameStartedMessage|null|undefined} gameStarted
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.gameStarted = null;

    /**
     * ServerMessage updatePlayerDrawing.
     * @member {ServerMessage.IUpdateDrawingPlayerMessage|null|undefined} updatePlayerDrawing
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.updatePlayerDrawing = null;

    /**
     * ServerMessage errorMessage.
     * @member {ServerMessage.IErrorMessage|null|undefined} errorMessage
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.errorMessage = null;

    /**
     * ServerMessage showRoom.
     * @member {ServerMessage.IShowRoomMessage|null|undefined} showRoom
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.showRoom = null;

    /**
     * ServerMessage lobbyOwnerChange.
     * @member {ServerMessage.ILobbyOwnerChanged|null|undefined} lobbyOwnerChange
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.lobbyOwnerChange = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ServerMessage message.
     * @member {"chooseWord"|"clearCanvas"|"connected"|"currentWordUpdate"|"disconnected"|"playerConnected"|"playerDisconnected"|"playerGuessed"|"wordReveal"|"chatMessage"|"gameStarted"|"updatePlayerDrawing"|"errorMessage"|"showRoom"|"lobbyOwnerChange"|undefined} message
     * @memberof ServerMessage
     * @instance
     */
    Object.defineProperty(ServerMessage.prototype, "message", {
      get: $util.oneOfGetter(
        ($oneOfFields = [
          "chooseWord",
          "clearCanvas",
          "connected",
          "currentWordUpdate",
          "disconnected",
          "playerConnected",
          "playerDisconnected",
          "playerGuessed",
          "wordReveal",
          "chatMessage",
          "gameStarted",
          "updatePlayerDrawing",
          "errorMessage",
          "showRoom",
          "lobbyOwnerChange",
        ])
      ),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new ServerMessage instance using the specified properties.
     * @function create
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage=} [properties] Properties to set
     * @returns {ServerMessage} ServerMessage instance
     */
    ServerMessage.create = function create(properties) {
      return new ServerMessage(properties);
    };

    /**
     * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @function encode
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMessage.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.chooseWord != null &&
        Object.hasOwnProperty.call(message, "chooseWord")
      )
        $root.ServerMessage.ChooseWordMessage.encode(
          message.chooseWord,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clearCanvas != null &&
        Object.hasOwnProperty.call(message, "clearCanvas")
      )
        $root.ServerMessage.ClearCanvasMessage.encode(
          message.clearCanvas,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.connected != null &&
        Object.hasOwnProperty.call(message, "connected")
      )
        $root.ServerMessage.ConnectedMessage.encode(
          message.connected,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.currentWordUpdate != null &&
        Object.hasOwnProperty.call(message, "currentWordUpdate")
      )
        $root.ServerMessage.CurrentWordUpdateMessage.encode(
          message.currentWordUpdate,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.disconnected != null &&
        Object.hasOwnProperty.call(message, "disconnected")
      )
        $root.ServerMessage.DisconnectedMessage.encode(
          message.disconnected,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.playerConnected != null &&
        Object.hasOwnProperty.call(message, "playerConnected")
      )
        $root.ServerMessage.PlayerConnectedMessage.encode(
          message.playerConnected,
          writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
        ).ldelim();
      if (
        message.playerDisconnected != null &&
        Object.hasOwnProperty.call(message, "playerDisconnected")
      )
        $root.ServerMessage.PlayerDisconnectedMessage.encode(
          message.playerDisconnected,
          writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
        ).ldelim();
      if (
        message.playerGuessed != null &&
        Object.hasOwnProperty.call(message, "playerGuessed")
      )
        $root.ServerMessage.PlayerGuessedMessage.encode(
          message.playerGuessed,
          writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
        ).ldelim();
      if (
        message.wordReveal != null &&
        Object.hasOwnProperty.call(message, "wordReveal")
      )
        $root.ServerMessage.WordRevealMessage.encode(
          message.wordReveal,
          writer.uint32(/* id 11, wireType 2 =*/ 90).fork()
        ).ldelim();
      if (
        message.chatMessage != null &&
        Object.hasOwnProperty.call(message, "chatMessage")
      )
        $root.ServerMessage.ChatMessage.encode(
          message.chatMessage,
          writer.uint32(/* id 12, wireType 2 =*/ 98).fork()
        ).ldelim();
      if (
        message.gameStarted != null &&
        Object.hasOwnProperty.call(message, "gameStarted")
      )
        $root.ServerMessage.GameStartedMessage.encode(
          message.gameStarted,
          writer.uint32(/* id 14, wireType 2 =*/ 114).fork()
        ).ldelim();
      if (
        message.updatePlayerDrawing != null &&
        Object.hasOwnProperty.call(message, "updatePlayerDrawing")
      )
        $root.ServerMessage.UpdateDrawingPlayerMessage.encode(
          message.updatePlayerDrawing,
          writer.uint32(/* id 15, wireType 2 =*/ 122).fork()
        ).ldelim();
      if (
        message.errorMessage != null &&
        Object.hasOwnProperty.call(message, "errorMessage")
      )
        $root.ServerMessage.ErrorMessage.encode(
          message.errorMessage,
          writer.uint32(/* id 16, wireType 2 =*/ 130).fork()
        ).ldelim();
      if (
        message.showRoom != null &&
        Object.hasOwnProperty.call(message, "showRoom")
      )
        $root.ServerMessage.ShowRoomMessage.encode(
          message.showRoom,
          writer.uint32(/* id 17, wireType 2 =*/ 138).fork()
        ).ldelim();
      if (
        message.lobbyOwnerChange != null &&
        Object.hasOwnProperty.call(message, "lobbyOwnerChange")
      )
        $root.ServerMessage.LobbyOwnerChanged.encode(
          message.lobbyOwnerChange,
          writer.uint32(/* id 18, wireType 2 =*/ 146).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ServerMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerMessage} ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ServerMessage();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.chooseWord = $root.ServerMessage.ChooseWordMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clearCanvas = $root.ServerMessage.ClearCanvasMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.connected = $root.ServerMessage.ConnectedMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.currentWordUpdate =
              $root.ServerMessage.CurrentWordUpdateMessage.decode(
                reader,
                reader.uint32()
              );
            break;
          case 5:
            message.disconnected =
              $root.ServerMessage.DisconnectedMessage.decode(
                reader,
                reader.uint32()
              );
            break;
          case 7:
            message.playerConnected =
              $root.ServerMessage.PlayerConnectedMessage.decode(
                reader,
                reader.uint32()
              );
            break;
          case 8:
            message.playerDisconnected =
              $root.ServerMessage.PlayerDisconnectedMessage.decode(
                reader,
                reader.uint32()
              );
            break;
          case 10:
            message.playerGuessed =
              $root.ServerMessage.PlayerGuessedMessage.decode(
                reader,
                reader.uint32()
              );
            break;
          case 11:
            message.wordReveal = $root.ServerMessage.WordRevealMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 12:
            message.chatMessage = $root.ServerMessage.ChatMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 14:
            message.gameStarted = $root.ServerMessage.GameStartedMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 15:
            message.updatePlayerDrawing =
              $root.ServerMessage.UpdateDrawingPlayerMessage.decode(
                reader,
                reader.uint32()
              );
            break;
          case 16:
            message.errorMessage = $root.ServerMessage.ErrorMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 17:
            message.showRoom = $root.ServerMessage.ShowRoomMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 18:
            message.lobbyOwnerChange =
              $root.ServerMessage.LobbyOwnerChanged.decode(
                reader,
                reader.uint32()
              );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerMessage} ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerMessage message.
     * @function verify
     * @memberof ServerMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerMessage.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      var properties = {};
      if (message.chooseWord != null && message.hasOwnProperty("chooseWord")) {
        properties.message = 1;
        {
          var error = $root.ServerMessage.ChooseWordMessage.verify(
            message.chooseWord
          );
          if (error) return "chooseWord." + error;
        }
      }
      if (
        message.clearCanvas != null &&
        message.hasOwnProperty("clearCanvas")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.ClearCanvasMessage.verify(
            message.clearCanvas
          );
          if (error) return "clearCanvas." + error;
        }
      }
      if (message.connected != null && message.hasOwnProperty("connected")) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.ConnectedMessage.verify(
            message.connected
          );
          if (error) return "connected." + error;
        }
      }
      if (
        message.currentWordUpdate != null &&
        message.hasOwnProperty("currentWordUpdate")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.CurrentWordUpdateMessage.verify(
            message.currentWordUpdate
          );
          if (error) return "currentWordUpdate." + error;
        }
      }
      if (
        message.disconnected != null &&
        message.hasOwnProperty("disconnected")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.DisconnectedMessage.verify(
            message.disconnected
          );
          if (error) return "disconnected." + error;
        }
      }
      if (
        message.playerConnected != null &&
        message.hasOwnProperty("playerConnected")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.PlayerConnectedMessage.verify(
            message.playerConnected
          );
          if (error) return "playerConnected." + error;
        }
      }
      if (
        message.playerDisconnected != null &&
        message.hasOwnProperty("playerDisconnected")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.PlayerDisconnectedMessage.verify(
            message.playerDisconnected
          );
          if (error) return "playerDisconnected." + error;
        }
      }
      if (
        message.playerGuessed != null &&
        message.hasOwnProperty("playerGuessed")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.PlayerGuessedMessage.verify(
            message.playerGuessed
          );
          if (error) return "playerGuessed." + error;
        }
      }
      if (message.wordReveal != null && message.hasOwnProperty("wordReveal")) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.WordRevealMessage.verify(
            message.wordReveal
          );
          if (error) return "wordReveal." + error;
        }
      }
      if (
        message.chatMessage != null &&
        message.hasOwnProperty("chatMessage")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.ChatMessage.verify(
            message.chatMessage
          );
          if (error) return "chatMessage." + error;
        }
      }
      if (
        message.gameStarted != null &&
        message.hasOwnProperty("gameStarted")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.GameStartedMessage.verify(
            message.gameStarted
          );
          if (error) return "gameStarted." + error;
        }
      }
      if (
        message.updatePlayerDrawing != null &&
        message.hasOwnProperty("updatePlayerDrawing")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.UpdateDrawingPlayerMessage.verify(
            message.updatePlayerDrawing
          );
          if (error) return "updatePlayerDrawing." + error;
        }
      }
      if (
        message.errorMessage != null &&
        message.hasOwnProperty("errorMessage")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.ErrorMessage.verify(
            message.errorMessage
          );
          if (error) return "errorMessage." + error;
        }
      }
      if (message.showRoom != null && message.hasOwnProperty("showRoom")) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.ShowRoomMessage.verify(
            message.showRoom
          );
          if (error) return "showRoom." + error;
        }
      }
      if (
        message.lobbyOwnerChange != null &&
        message.hasOwnProperty("lobbyOwnerChange")
      ) {
        if (properties.message === 1) return "message: multiple values";
        properties.message = 1;
        {
          var error = $root.ServerMessage.LobbyOwnerChanged.verify(
            message.lobbyOwnerChange
          );
          if (error) return "lobbyOwnerChange." + error;
        }
      }
      return null;
    };

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerMessage} ServerMessage
     */
    ServerMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.ServerMessage) return object;
      var message = new $root.ServerMessage();
      if (object.chooseWord != null) {
        if (typeof object.chooseWord !== "object")
          throw TypeError(".ServerMessage.chooseWord: object expected");
        message.chooseWord = $root.ServerMessage.ChooseWordMessage.fromObject(
          object.chooseWord
        );
      }
      if (object.clearCanvas != null) {
        if (typeof object.clearCanvas !== "object")
          throw TypeError(".ServerMessage.clearCanvas: object expected");
        message.clearCanvas = $root.ServerMessage.ClearCanvasMessage.fromObject(
          object.clearCanvas
        );
      }
      if (object.connected != null) {
        if (typeof object.connected !== "object")
          throw TypeError(".ServerMessage.connected: object expected");
        message.connected = $root.ServerMessage.ConnectedMessage.fromObject(
          object.connected
        );
      }
      if (object.currentWordUpdate != null) {
        if (typeof object.currentWordUpdate !== "object")
          throw TypeError(".ServerMessage.currentWordUpdate: object expected");
        message.currentWordUpdate =
          $root.ServerMessage.CurrentWordUpdateMessage.fromObject(
            object.currentWordUpdate
          );
      }
      if (object.disconnected != null) {
        if (typeof object.disconnected !== "object")
          throw TypeError(".ServerMessage.disconnected: object expected");
        message.disconnected =
          $root.ServerMessage.DisconnectedMessage.fromObject(
            object.disconnected
          );
      }
      if (object.playerConnected != null) {
        if (typeof object.playerConnected !== "object")
          throw TypeError(".ServerMessage.playerConnected: object expected");
        message.playerConnected =
          $root.ServerMessage.PlayerConnectedMessage.fromObject(
            object.playerConnected
          );
      }
      if (object.playerDisconnected != null) {
        if (typeof object.playerDisconnected !== "object")
          throw TypeError(".ServerMessage.playerDisconnected: object expected");
        message.playerDisconnected =
          $root.ServerMessage.PlayerDisconnectedMessage.fromObject(
            object.playerDisconnected
          );
      }
      if (object.playerGuessed != null) {
        if (typeof object.playerGuessed !== "object")
          throw TypeError(".ServerMessage.playerGuessed: object expected");
        message.playerGuessed =
          $root.ServerMessage.PlayerGuessedMessage.fromObject(
            object.playerGuessed
          );
      }
      if (object.wordReveal != null) {
        if (typeof object.wordReveal !== "object")
          throw TypeError(".ServerMessage.wordReveal: object expected");
        message.wordReveal = $root.ServerMessage.WordRevealMessage.fromObject(
          object.wordReveal
        );
      }
      if (object.chatMessage != null) {
        if (typeof object.chatMessage !== "object")
          throw TypeError(".ServerMessage.chatMessage: object expected");
        message.chatMessage = $root.ServerMessage.ChatMessage.fromObject(
          object.chatMessage
        );
      }
      if (object.gameStarted != null) {
        if (typeof object.gameStarted !== "object")
          throw TypeError(".ServerMessage.gameStarted: object expected");
        message.gameStarted = $root.ServerMessage.GameStartedMessage.fromObject(
          object.gameStarted
        );
      }
      if (object.updatePlayerDrawing != null) {
        if (typeof object.updatePlayerDrawing !== "object")
          throw TypeError(
            ".ServerMessage.updatePlayerDrawing: object expected"
          );
        message.updatePlayerDrawing =
          $root.ServerMessage.UpdateDrawingPlayerMessage.fromObject(
            object.updatePlayerDrawing
          );
      }
      if (object.errorMessage != null) {
        if (typeof object.errorMessage !== "object")
          throw TypeError(".ServerMessage.errorMessage: object expected");
        message.errorMessage = $root.ServerMessage.ErrorMessage.fromObject(
          object.errorMessage
        );
      }
      if (object.showRoom != null) {
        if (typeof object.showRoom !== "object")
          throw TypeError(".ServerMessage.showRoom: object expected");
        message.showRoom = $root.ServerMessage.ShowRoomMessage.fromObject(
          object.showRoom
        );
      }
      if (object.lobbyOwnerChange != null) {
        if (typeof object.lobbyOwnerChange !== "object")
          throw TypeError(".ServerMessage.lobbyOwnerChange: object expected");
        message.lobbyOwnerChange =
          $root.ServerMessage.LobbyOwnerChanged.fromObject(
            object.lobbyOwnerChange
          );
      }
      return message;
    };

    /**
     * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerMessage
     * @static
     * @param {ServerMessage} message ServerMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerMessage.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (message.chooseWord != null && message.hasOwnProperty("chooseWord")) {
        object.chooseWord = $root.ServerMessage.ChooseWordMessage.toObject(
          message.chooseWord,
          options
        );
        if (options.oneofs) object.message = "chooseWord";
      }
      if (
        message.clearCanvas != null &&
        message.hasOwnProperty("clearCanvas")
      ) {
        object.clearCanvas = $root.ServerMessage.ClearCanvasMessage.toObject(
          message.clearCanvas,
          options
        );
        if (options.oneofs) object.message = "clearCanvas";
      }
      if (message.connected != null && message.hasOwnProperty("connected")) {
        object.connected = $root.ServerMessage.ConnectedMessage.toObject(
          message.connected,
          options
        );
        if (options.oneofs) object.message = "connected";
      }
      if (
        message.currentWordUpdate != null &&
        message.hasOwnProperty("currentWordUpdate")
      ) {
        object.currentWordUpdate =
          $root.ServerMessage.CurrentWordUpdateMessage.toObject(
            message.currentWordUpdate,
            options
          );
        if (options.oneofs) object.message = "currentWordUpdate";
      }
      if (
        message.disconnected != null &&
        message.hasOwnProperty("disconnected")
      ) {
        object.disconnected = $root.ServerMessage.DisconnectedMessage.toObject(
          message.disconnected,
          options
        );
        if (options.oneofs) object.message = "disconnected";
      }
      if (
        message.playerConnected != null &&
        message.hasOwnProperty("playerConnected")
      ) {
        object.playerConnected =
          $root.ServerMessage.PlayerConnectedMessage.toObject(
            message.playerConnected,
            options
          );
        if (options.oneofs) object.message = "playerConnected";
      }
      if (
        message.playerDisconnected != null &&
        message.hasOwnProperty("playerDisconnected")
      ) {
        object.playerDisconnected =
          $root.ServerMessage.PlayerDisconnectedMessage.toObject(
            message.playerDisconnected,
            options
          );
        if (options.oneofs) object.message = "playerDisconnected";
      }
      if (
        message.playerGuessed != null &&
        message.hasOwnProperty("playerGuessed")
      ) {
        object.playerGuessed =
          $root.ServerMessage.PlayerGuessedMessage.toObject(
            message.playerGuessed,
            options
          );
        if (options.oneofs) object.message = "playerGuessed";
      }
      if (message.wordReveal != null && message.hasOwnProperty("wordReveal")) {
        object.wordReveal = $root.ServerMessage.WordRevealMessage.toObject(
          message.wordReveal,
          options
        );
        if (options.oneofs) object.message = "wordReveal";
      }
      if (
        message.chatMessage != null &&
        message.hasOwnProperty("chatMessage")
      ) {
        object.chatMessage = $root.ServerMessage.ChatMessage.toObject(
          message.chatMessage,
          options
        );
        if (options.oneofs) object.message = "chatMessage";
      }
      if (
        message.gameStarted != null &&
        message.hasOwnProperty("gameStarted")
      ) {
        object.gameStarted = $root.ServerMessage.GameStartedMessage.toObject(
          message.gameStarted,
          options
        );
        if (options.oneofs) object.message = "gameStarted";
      }
      if (
        message.updatePlayerDrawing != null &&
        message.hasOwnProperty("updatePlayerDrawing")
      ) {
        object.updatePlayerDrawing =
          $root.ServerMessage.UpdateDrawingPlayerMessage.toObject(
            message.updatePlayerDrawing,
            options
          );
        if (options.oneofs) object.message = "updatePlayerDrawing";
      }
      if (
        message.errorMessage != null &&
        message.hasOwnProperty("errorMessage")
      ) {
        object.errorMessage = $root.ServerMessage.ErrorMessage.toObject(
          message.errorMessage,
          options
        );
        if (options.oneofs) object.message = "errorMessage";
      }
      if (message.showRoom != null && message.hasOwnProperty("showRoom")) {
        object.showRoom = $root.ServerMessage.ShowRoomMessage.toObject(
          message.showRoom,
          options
        );
        if (options.oneofs) object.message = "showRoom";
      }
      if (
        message.lobbyOwnerChange != null &&
        message.hasOwnProperty("lobbyOwnerChange")
      ) {
        object.lobbyOwnerChange =
          $root.ServerMessage.LobbyOwnerChanged.toObject(
            message.lobbyOwnerChange,
            options
          );
        if (options.oneofs) object.message = "lobbyOwnerChange";
      }
      return object;
    };

    /**
     * Converts this ServerMessage to JSON.
     * @function toJSON
     * @memberof ServerMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ServerMessage.ChooseWordMessage = (function () {
      /**
       * Properties of a ChooseWordMessage.
       * @memberof ServerMessage
       * @interface IChooseWordMessage
       * @property {string|null} [playerId] ChooseWordMessage playerId
       * @property {Array.<string>|null} [words] ChooseWordMessage words
       */

      /**
       * Constructs a new ChooseWordMessage.
       * @memberof ServerMessage
       * @classdesc Represents a ChooseWordMessage.
       * @implements IChooseWordMessage
       * @constructor
       * @param {ServerMessage.IChooseWordMessage=} [properties] Properties to set
       */
      function ChooseWordMessage(properties) {
        this.words = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * ChooseWordMessage playerId.
       * @member {string} playerId
       * @memberof ServerMessage.ChooseWordMessage
       * @instance
       */
      ChooseWordMessage.prototype.playerId = "";

      /**
       * ChooseWordMessage words.
       * @member {Array.<string>} words
       * @memberof ServerMessage.ChooseWordMessage
       * @instance
       */
      ChooseWordMessage.prototype.words = $util.emptyArray;

      /**
       * Creates a new ChooseWordMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {ServerMessage.IChooseWordMessage=} [properties] Properties to set
       * @returns {ServerMessage.ChooseWordMessage} ChooseWordMessage instance
       */
      ChooseWordMessage.create = function create(properties) {
        return new ChooseWordMessage(properties);
      };

      /**
       * Encodes the specified ChooseWordMessage message. Does not implicitly {@link ServerMessage.ChooseWordMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {ServerMessage.IChooseWordMessage} message ChooseWordMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChooseWordMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.playerId != null &&
          Object.hasOwnProperty.call(message, "playerId")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.playerId);
        if (message.words != null && message.words.length)
          for (var i = 0; i < message.words.length; ++i)
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.words[i]);
        return writer;
      };

      /**
       * Encodes the specified ChooseWordMessage message, length delimited. Does not implicitly {@link ServerMessage.ChooseWordMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {ServerMessage.IChooseWordMessage} message ChooseWordMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChooseWordMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ChooseWordMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.ChooseWordMessage} ChooseWordMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChooseWordMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.ChooseWordMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.playerId = reader.string();
              break;
            case 2:
              if (!(message.words && message.words.length)) message.words = [];
              message.words.push(reader.string());
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ChooseWordMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.ChooseWordMessage} ChooseWordMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChooseWordMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ChooseWordMessage message.
       * @function verify
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ChooseWordMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          if (!$util.isString(message.playerId))
            return "playerId: string expected";
        if (message.words != null && message.hasOwnProperty("words")) {
          if (!Array.isArray(message.words)) return "words: array expected";
          for (var i = 0; i < message.words.length; ++i)
            if (!$util.isString(message.words[i]))
              return "words: string[] expected";
        }
        return null;
      };

      /**
       * Creates a ChooseWordMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.ChooseWordMessage} ChooseWordMessage
       */
      ChooseWordMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.ChooseWordMessage)
          return object;
        var message = new $root.ServerMessage.ChooseWordMessage();
        if (object.playerId != null) message.playerId = String(object.playerId);
        if (object.words) {
          if (!Array.isArray(object.words))
            throw TypeError(
              ".ServerMessage.ChooseWordMessage.words: array expected"
            );
          message.words = [];
          for (var i = 0; i < object.words.length; ++i)
            message.words[i] = String(object.words[i]);
        }
        return message;
      };

      /**
       * Creates a plain object from a ChooseWordMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.ChooseWordMessage
       * @static
       * @param {ServerMessage.ChooseWordMessage} message ChooseWordMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ChooseWordMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.words = [];
        if (options.defaults) object.playerId = "";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          object.playerId = message.playerId;
        if (message.words && message.words.length) {
          object.words = [];
          for (var j = 0; j < message.words.length; ++j)
            object.words[j] = message.words[j];
        }
        return object;
      };

      /**
       * Converts this ChooseWordMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.ChooseWordMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ChooseWordMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ChooseWordMessage;
    })();

    ServerMessage.ClearCanvasMessage = (function () {
      /**
       * Properties of a ClearCanvasMessage.
       * @memberof ServerMessage
       * @interface IClearCanvasMessage
       */

      /**
       * Constructs a new ClearCanvasMessage.
       * @memberof ServerMessage
       * @classdesc Represents a ClearCanvasMessage.
       * @implements IClearCanvasMessage
       * @constructor
       * @param {ServerMessage.IClearCanvasMessage=} [properties] Properties to set
       */
      function ClearCanvasMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new ClearCanvasMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {ServerMessage.IClearCanvasMessage=} [properties] Properties to set
       * @returns {ServerMessage.ClearCanvasMessage} ClearCanvasMessage instance
       */
      ClearCanvasMessage.create = function create(properties) {
        return new ClearCanvasMessage(properties);
      };

      /**
       * Encodes the specified ClearCanvasMessage message. Does not implicitly {@link ServerMessage.ClearCanvasMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {ServerMessage.IClearCanvasMessage} message ClearCanvasMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ClearCanvasMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified ClearCanvasMessage message, length delimited. Does not implicitly {@link ServerMessage.ClearCanvasMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {ServerMessage.IClearCanvasMessage} message ClearCanvasMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ClearCanvasMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ClearCanvasMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.ClearCanvasMessage} ClearCanvasMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ClearCanvasMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.ClearCanvasMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ClearCanvasMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.ClearCanvasMessage} ClearCanvasMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ClearCanvasMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ClearCanvasMessage message.
       * @function verify
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ClearCanvasMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        return null;
      };

      /**
       * Creates a ClearCanvasMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.ClearCanvasMessage} ClearCanvasMessage
       */
      ClearCanvasMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.ClearCanvasMessage)
          return object;
        return new $root.ServerMessage.ClearCanvasMessage();
      };

      /**
       * Creates a plain object from a ClearCanvasMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.ClearCanvasMessage
       * @static
       * @param {ServerMessage.ClearCanvasMessage} message ClearCanvasMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ClearCanvasMessage.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this ClearCanvasMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.ClearCanvasMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ClearCanvasMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ClearCanvasMessage;
    })();

    ServerMessage.ConnectedMessage = (function () {
      /**
       * Properties of a ConnectedMessage.
       * @memberof ServerMessage
       * @interface IConnectedMessage
       */

      /**
       * Constructs a new ConnectedMessage.
       * @memberof ServerMessage
       * @classdesc Represents a ConnectedMessage.
       * @implements IConnectedMessage
       * @constructor
       * @param {ServerMessage.IConnectedMessage=} [properties] Properties to set
       */
      function ConnectedMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new ConnectedMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {ServerMessage.IConnectedMessage=} [properties] Properties to set
       * @returns {ServerMessage.ConnectedMessage} ConnectedMessage instance
       */
      ConnectedMessage.create = function create(properties) {
        return new ConnectedMessage(properties);
      };

      /**
       * Encodes the specified ConnectedMessage message. Does not implicitly {@link ServerMessage.ConnectedMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {ServerMessage.IConnectedMessage} message ConnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ConnectedMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified ConnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.ConnectedMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {ServerMessage.IConnectedMessage} message ConnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ConnectedMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ConnectedMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.ConnectedMessage} ConnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConnectedMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.ConnectedMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ConnectedMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.ConnectedMessage} ConnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConnectedMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ConnectedMessage message.
       * @function verify
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ConnectedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        return null;
      };

      /**
       * Creates a ConnectedMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.ConnectedMessage} ConnectedMessage
       */
      ConnectedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.ConnectedMessage)
          return object;
        return new $root.ServerMessage.ConnectedMessage();
      };

      /**
       * Creates a plain object from a ConnectedMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.ConnectedMessage
       * @static
       * @param {ServerMessage.ConnectedMessage} message ConnectedMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ConnectedMessage.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this ConnectedMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.ConnectedMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ConnectedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ConnectedMessage;
    })();

    ServerMessage.CurrentWordUpdateMessage = (function () {
      /**
       * Properties of a CurrentWordUpdateMessage.
       * @memberof ServerMessage
       * @interface ICurrentWordUpdateMessage
       * @property {string|null} [word] CurrentWordUpdateMessage word
       */

      /**
       * Constructs a new CurrentWordUpdateMessage.
       * @memberof ServerMessage
       * @classdesc Represents a CurrentWordUpdateMessage.
       * @implements ICurrentWordUpdateMessage
       * @constructor
       * @param {ServerMessage.ICurrentWordUpdateMessage=} [properties] Properties to set
       */
      function CurrentWordUpdateMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * CurrentWordUpdateMessage word.
       * @member {string} word
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @instance
       */
      CurrentWordUpdateMessage.prototype.word = "";

      /**
       * Creates a new CurrentWordUpdateMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {ServerMessage.ICurrentWordUpdateMessage=} [properties] Properties to set
       * @returns {ServerMessage.CurrentWordUpdateMessage} CurrentWordUpdateMessage instance
       */
      CurrentWordUpdateMessage.create = function create(properties) {
        return new CurrentWordUpdateMessage(properties);
      };

      /**
       * Encodes the specified CurrentWordUpdateMessage message. Does not implicitly {@link ServerMessage.CurrentWordUpdateMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {ServerMessage.ICurrentWordUpdateMessage} message CurrentWordUpdateMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CurrentWordUpdateMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.word != null && Object.hasOwnProperty.call(message, "word"))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.word);
        return writer;
      };

      /**
       * Encodes the specified CurrentWordUpdateMessage message, length delimited. Does not implicitly {@link ServerMessage.CurrentWordUpdateMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {ServerMessage.ICurrentWordUpdateMessage} message CurrentWordUpdateMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CurrentWordUpdateMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CurrentWordUpdateMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.CurrentWordUpdateMessage} CurrentWordUpdateMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CurrentWordUpdateMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.CurrentWordUpdateMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.word = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CurrentWordUpdateMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.CurrentWordUpdateMessage} CurrentWordUpdateMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CurrentWordUpdateMessage.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CurrentWordUpdateMessage message.
       * @function verify
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CurrentWordUpdateMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.word != null && message.hasOwnProperty("word"))
          if (!$util.isString(message.word)) return "word: string expected";
        return null;
      };

      /**
       * Creates a CurrentWordUpdateMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.CurrentWordUpdateMessage} CurrentWordUpdateMessage
       */
      CurrentWordUpdateMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.CurrentWordUpdateMessage)
          return object;
        var message = new $root.ServerMessage.CurrentWordUpdateMessage();
        if (object.word != null) message.word = String(object.word);
        return message;
      };

      /**
       * Creates a plain object from a CurrentWordUpdateMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @static
       * @param {ServerMessage.CurrentWordUpdateMessage} message CurrentWordUpdateMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CurrentWordUpdateMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.word = "";
        if (message.word != null && message.hasOwnProperty("word"))
          object.word = message.word;
        return object;
      };

      /**
       * Converts this CurrentWordUpdateMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.CurrentWordUpdateMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CurrentWordUpdateMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return CurrentWordUpdateMessage;
    })();

    ServerMessage.DisconnectedMessage = (function () {
      /**
       * Properties of a DisconnectedMessage.
       * @memberof ServerMessage
       * @interface IDisconnectedMessage
       */

      /**
       * Constructs a new DisconnectedMessage.
       * @memberof ServerMessage
       * @classdesc Represents a DisconnectedMessage.
       * @implements IDisconnectedMessage
       * @constructor
       * @param {ServerMessage.IDisconnectedMessage=} [properties] Properties to set
       */
      function DisconnectedMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new DisconnectedMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {ServerMessage.IDisconnectedMessage=} [properties] Properties to set
       * @returns {ServerMessage.DisconnectedMessage} DisconnectedMessage instance
       */
      DisconnectedMessage.create = function create(properties) {
        return new DisconnectedMessage(properties);
      };

      /**
       * Encodes the specified DisconnectedMessage message. Does not implicitly {@link ServerMessage.DisconnectedMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {ServerMessage.IDisconnectedMessage} message DisconnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DisconnectedMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified DisconnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.DisconnectedMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {ServerMessage.IDisconnectedMessage} message DisconnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DisconnectedMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DisconnectedMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.DisconnectedMessage} DisconnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DisconnectedMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.DisconnectedMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DisconnectedMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.DisconnectedMessage} DisconnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DisconnectedMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DisconnectedMessage message.
       * @function verify
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DisconnectedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        return null;
      };

      /**
       * Creates a DisconnectedMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.DisconnectedMessage} DisconnectedMessage
       */
      DisconnectedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.DisconnectedMessage)
          return object;
        return new $root.ServerMessage.DisconnectedMessage();
      };

      /**
       * Creates a plain object from a DisconnectedMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.DisconnectedMessage
       * @static
       * @param {ServerMessage.DisconnectedMessage} message DisconnectedMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DisconnectedMessage.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this DisconnectedMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.DisconnectedMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DisconnectedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return DisconnectedMessage;
    })();

    ServerMessage.DrawMessage = (function () {
      /**
       * Properties of a DrawMessage.
       * @memberof ServerMessage
       * @interface IDrawMessage
       * @property {Array.<IDrawCommand>|null} [commands] DrawMessage commands
       */

      /**
       * Constructs a new DrawMessage.
       * @memberof ServerMessage
       * @classdesc Represents a DrawMessage.
       * @implements IDrawMessage
       * @constructor
       * @param {ServerMessage.IDrawMessage=} [properties] Properties to set
       */
      function DrawMessage(properties) {
        this.commands = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * DrawMessage commands.
       * @member {Array.<IDrawCommand>} commands
       * @memberof ServerMessage.DrawMessage
       * @instance
       */
      DrawMessage.prototype.commands = $util.emptyArray;

      /**
       * Creates a new DrawMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {ServerMessage.IDrawMessage=} [properties] Properties to set
       * @returns {ServerMessage.DrawMessage} DrawMessage instance
       */
      DrawMessage.create = function create(properties) {
        return new DrawMessage(properties);
      };

      /**
       * Encodes the specified DrawMessage message. Does not implicitly {@link ServerMessage.DrawMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {ServerMessage.IDrawMessage} message DrawMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DrawMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.commands != null && message.commands.length)
          for (var i = 0; i < message.commands.length; ++i)
            $root.DrawCommand.encode(
              message.commands[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified DrawMessage message, length delimited. Does not implicitly {@link ServerMessage.DrawMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {ServerMessage.IDrawMessage} message DrawMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DrawMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DrawMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.DrawMessage} DrawMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DrawMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.DrawMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              if (!(message.commands && message.commands.length))
                message.commands = [];
              message.commands.push(
                $root.DrawCommand.decode(reader, reader.uint32())
              );
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DrawMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.DrawMessage} DrawMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DrawMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DrawMessage message.
       * @function verify
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DrawMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.commands != null && message.hasOwnProperty("commands")) {
          if (!Array.isArray(message.commands))
            return "commands: array expected";
          for (var i = 0; i < message.commands.length; ++i) {
            var error = $root.DrawCommand.verify(message.commands[i]);
            if (error) return "commands." + error;
          }
        }
        return null;
      };

      /**
       * Creates a DrawMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.DrawMessage} DrawMessage
       */
      DrawMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.DrawMessage) return object;
        var message = new $root.ServerMessage.DrawMessage();
        if (object.commands) {
          if (!Array.isArray(object.commands))
            throw TypeError(
              ".ServerMessage.DrawMessage.commands: array expected"
            );
          message.commands = [];
          for (var i = 0; i < object.commands.length; ++i) {
            if (typeof object.commands[i] !== "object")
              throw TypeError(
                ".ServerMessage.DrawMessage.commands: object expected"
              );
            message.commands[i] = $root.DrawCommand.fromObject(
              object.commands[i]
            );
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a DrawMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.DrawMessage
       * @static
       * @param {ServerMessage.DrawMessage} message DrawMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DrawMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.commands = [];
        if (message.commands && message.commands.length) {
          object.commands = [];
          for (var j = 0; j < message.commands.length; ++j)
            object.commands[j] = $root.DrawCommand.toObject(
              message.commands[j],
              options
            );
        }
        return object;
      };

      /**
       * Converts this DrawMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.DrawMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DrawMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return DrawMessage;
    })();

    ServerMessage.PlayerConnectedMessage = (function () {
      /**
       * Properties of a PlayerConnectedMessage.
       * @memberof ServerMessage
       * @interface IPlayerConnectedMessage
       * @property {string|null} [playerId] PlayerConnectedMessage playerId
       * @property {string|null} [playerName] PlayerConnectedMessage playerName
       * @property {number|null} [playerScore] PlayerConnectedMessage playerScore
       * @property {boolean|null} [guessedWord] PlayerConnectedMessage guessedWord
       */

      /**
       * Constructs a new PlayerConnectedMessage.
       * @memberof ServerMessage
       * @classdesc Represents a PlayerConnectedMessage.
       * @implements IPlayerConnectedMessage
       * @constructor
       * @param {ServerMessage.IPlayerConnectedMessage=} [properties] Properties to set
       */
      function PlayerConnectedMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * PlayerConnectedMessage playerId.
       * @member {string} playerId
       * @memberof ServerMessage.PlayerConnectedMessage
       * @instance
       */
      PlayerConnectedMessage.prototype.playerId = "";

      /**
       * PlayerConnectedMessage playerName.
       * @member {string} playerName
       * @memberof ServerMessage.PlayerConnectedMessage
       * @instance
       */
      PlayerConnectedMessage.prototype.playerName = "";

      /**
       * PlayerConnectedMessage playerScore.
       * @member {number} playerScore
       * @memberof ServerMessage.PlayerConnectedMessage
       * @instance
       */
      PlayerConnectedMessage.prototype.playerScore = 0;

      /**
       * PlayerConnectedMessage guessedWord.
       * @member {boolean} guessedWord
       * @memberof ServerMessage.PlayerConnectedMessage
       * @instance
       */
      PlayerConnectedMessage.prototype.guessedWord = false;

      /**
       * Creates a new PlayerConnectedMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {ServerMessage.IPlayerConnectedMessage=} [properties] Properties to set
       * @returns {ServerMessage.PlayerConnectedMessage} PlayerConnectedMessage instance
       */
      PlayerConnectedMessage.create = function create(properties) {
        return new PlayerConnectedMessage(properties);
      };

      /**
       * Encodes the specified PlayerConnectedMessage message. Does not implicitly {@link ServerMessage.PlayerConnectedMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {ServerMessage.IPlayerConnectedMessage} message PlayerConnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PlayerConnectedMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.playerId != null &&
          Object.hasOwnProperty.call(message, "playerId")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.playerId);
        if (
          message.playerName != null &&
          Object.hasOwnProperty.call(message, "playerName")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.playerName);
        if (
          message.playerScore != null &&
          Object.hasOwnProperty.call(message, "playerScore")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.playerScore);
        if (
          message.guessedWord != null &&
          Object.hasOwnProperty.call(message, "guessedWord")
        )
          writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.guessedWord);
        return writer;
      };

      /**
       * Encodes the specified PlayerConnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.PlayerConnectedMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {ServerMessage.IPlayerConnectedMessage} message PlayerConnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PlayerConnectedMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PlayerConnectedMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.PlayerConnectedMessage} PlayerConnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PlayerConnectedMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.PlayerConnectedMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.playerId = reader.string();
              break;
            case 2:
              message.playerName = reader.string();
              break;
            case 3:
              message.playerScore = reader.int32();
              break;
            case 4:
              message.guessedWord = reader.bool();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a PlayerConnectedMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.PlayerConnectedMessage} PlayerConnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PlayerConnectedMessage.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PlayerConnectedMessage message.
       * @function verify
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PlayerConnectedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          if (!$util.isString(message.playerId))
            return "playerId: string expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
          if (!$util.isString(message.playerName))
            return "playerName: string expected";
        if (
          message.playerScore != null &&
          message.hasOwnProperty("playerScore")
        )
          if (!$util.isInteger(message.playerScore))
            return "playerScore: integer expected";
        if (
          message.guessedWord != null &&
          message.hasOwnProperty("guessedWord")
        )
          if (typeof message.guessedWord !== "boolean")
            return "guessedWord: boolean expected";
        return null;
      };

      /**
       * Creates a PlayerConnectedMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.PlayerConnectedMessage} PlayerConnectedMessage
       */
      PlayerConnectedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.PlayerConnectedMessage)
          return object;
        var message = new $root.ServerMessage.PlayerConnectedMessage();
        if (object.playerId != null) message.playerId = String(object.playerId);
        if (object.playerName != null)
          message.playerName = String(object.playerName);
        if (object.playerScore != null)
          message.playerScore = object.playerScore | 0;
        if (object.guessedWord != null)
          message.guessedWord = Boolean(object.guessedWord);
        return message;
      };

      /**
       * Creates a plain object from a PlayerConnectedMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.PlayerConnectedMessage
       * @static
       * @param {ServerMessage.PlayerConnectedMessage} message PlayerConnectedMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PlayerConnectedMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.playerId = "";
          object.playerName = "";
          object.playerScore = 0;
          object.guessedWord = false;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          object.playerId = message.playerId;
        if (message.playerName != null && message.hasOwnProperty("playerName"))
          object.playerName = message.playerName;
        if (
          message.playerScore != null &&
          message.hasOwnProperty("playerScore")
        )
          object.playerScore = message.playerScore;
        if (
          message.guessedWord != null &&
          message.hasOwnProperty("guessedWord")
        )
          object.guessedWord = message.guessedWord;
        return object;
      };

      /**
       * Converts this PlayerConnectedMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.PlayerConnectedMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PlayerConnectedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return PlayerConnectedMessage;
    })();

    ServerMessage.PlayerDisconnectedMessage = (function () {
      /**
       * Properties of a PlayerDisconnectedMessage.
       * @memberof ServerMessage
       * @interface IPlayerDisconnectedMessage
       * @property {string|null} [playerId] PlayerDisconnectedMessage playerId
       */

      /**
       * Constructs a new PlayerDisconnectedMessage.
       * @memberof ServerMessage
       * @classdesc Represents a PlayerDisconnectedMessage.
       * @implements IPlayerDisconnectedMessage
       * @constructor
       * @param {ServerMessage.IPlayerDisconnectedMessage=} [properties] Properties to set
       */
      function PlayerDisconnectedMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * PlayerDisconnectedMessage playerId.
       * @member {string} playerId
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @instance
       */
      PlayerDisconnectedMessage.prototype.playerId = "";

      /**
       * Creates a new PlayerDisconnectedMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {ServerMessage.IPlayerDisconnectedMessage=} [properties] Properties to set
       * @returns {ServerMessage.PlayerDisconnectedMessage} PlayerDisconnectedMessage instance
       */
      PlayerDisconnectedMessage.create = function create(properties) {
        return new PlayerDisconnectedMessage(properties);
      };

      /**
       * Encodes the specified PlayerDisconnectedMessage message. Does not implicitly {@link ServerMessage.PlayerDisconnectedMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {ServerMessage.IPlayerDisconnectedMessage} message PlayerDisconnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PlayerDisconnectedMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.playerId != null &&
          Object.hasOwnProperty.call(message, "playerId")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.playerId);
        return writer;
      };

      /**
       * Encodes the specified PlayerDisconnectedMessage message, length delimited. Does not implicitly {@link ServerMessage.PlayerDisconnectedMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {ServerMessage.IPlayerDisconnectedMessage} message PlayerDisconnectedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PlayerDisconnectedMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PlayerDisconnectedMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.PlayerDisconnectedMessage} PlayerDisconnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PlayerDisconnectedMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.PlayerDisconnectedMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.playerId = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a PlayerDisconnectedMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.PlayerDisconnectedMessage} PlayerDisconnectedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PlayerDisconnectedMessage.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PlayerDisconnectedMessage message.
       * @function verify
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PlayerDisconnectedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          if (!$util.isString(message.playerId))
            return "playerId: string expected";
        return null;
      };

      /**
       * Creates a PlayerDisconnectedMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.PlayerDisconnectedMessage} PlayerDisconnectedMessage
       */
      PlayerDisconnectedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.PlayerDisconnectedMessage)
          return object;
        var message = new $root.ServerMessage.PlayerDisconnectedMessage();
        if (object.playerId != null) message.playerId = String(object.playerId);
        return message;
      };

      /**
       * Creates a plain object from a PlayerDisconnectedMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @static
       * @param {ServerMessage.PlayerDisconnectedMessage} message PlayerDisconnectedMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PlayerDisconnectedMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.playerId = "";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          object.playerId = message.playerId;
        return object;
      };

      /**
       * Converts this PlayerDisconnectedMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.PlayerDisconnectedMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PlayerDisconnectedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return PlayerDisconnectedMessage;
    })();

    ServerMessage.PlayerGuessedMessage = (function () {
      /**
       * Properties of a PlayerGuessedMessage.
       * @memberof ServerMessage
       * @interface IPlayerGuessedMessage
       * @property {string|null} [playerId] PlayerGuessedMessage playerId
       */

      /**
       * Constructs a new PlayerGuessedMessage.
       * @memberof ServerMessage
       * @classdesc Represents a PlayerGuessedMessage.
       * @implements IPlayerGuessedMessage
       * @constructor
       * @param {ServerMessage.IPlayerGuessedMessage=} [properties] Properties to set
       */
      function PlayerGuessedMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * PlayerGuessedMessage playerId.
       * @member {string} playerId
       * @memberof ServerMessage.PlayerGuessedMessage
       * @instance
       */
      PlayerGuessedMessage.prototype.playerId = "";

      /**
       * Creates a new PlayerGuessedMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {ServerMessage.IPlayerGuessedMessage=} [properties] Properties to set
       * @returns {ServerMessage.PlayerGuessedMessage} PlayerGuessedMessage instance
       */
      PlayerGuessedMessage.create = function create(properties) {
        return new PlayerGuessedMessage(properties);
      };

      /**
       * Encodes the specified PlayerGuessedMessage message. Does not implicitly {@link ServerMessage.PlayerGuessedMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {ServerMessage.IPlayerGuessedMessage} message PlayerGuessedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PlayerGuessedMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.playerId != null &&
          Object.hasOwnProperty.call(message, "playerId")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.playerId);
        return writer;
      };

      /**
       * Encodes the specified PlayerGuessedMessage message, length delimited. Does not implicitly {@link ServerMessage.PlayerGuessedMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {ServerMessage.IPlayerGuessedMessage} message PlayerGuessedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PlayerGuessedMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PlayerGuessedMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.PlayerGuessedMessage} PlayerGuessedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PlayerGuessedMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.PlayerGuessedMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.playerId = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a PlayerGuessedMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.PlayerGuessedMessage} PlayerGuessedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PlayerGuessedMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PlayerGuessedMessage message.
       * @function verify
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PlayerGuessedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          if (!$util.isString(message.playerId))
            return "playerId: string expected";
        return null;
      };

      /**
       * Creates a PlayerGuessedMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.PlayerGuessedMessage} PlayerGuessedMessage
       */
      PlayerGuessedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.PlayerGuessedMessage)
          return object;
        var message = new $root.ServerMessage.PlayerGuessedMessage();
        if (object.playerId != null) message.playerId = String(object.playerId);
        return message;
      };

      /**
       * Creates a plain object from a PlayerGuessedMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.PlayerGuessedMessage
       * @static
       * @param {ServerMessage.PlayerGuessedMessage} message PlayerGuessedMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PlayerGuessedMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.playerId = "";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          object.playerId = message.playerId;
        return object;
      };

      /**
       * Converts this PlayerGuessedMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.PlayerGuessedMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PlayerGuessedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return PlayerGuessedMessage;
    })();

    ServerMessage.WordRevealMessage = (function () {
      /**
       * Properties of a WordRevealMessage.
       * @memberof ServerMessage
       * @interface IWordRevealMessage
       * @property {ServerMessage.WordRevealMessage.RevealReason|null} [reason] WordRevealMessage reason
       * @property {string|null} [word] WordRevealMessage word
       * @property {Array.<ServerMessage.WordRevealMessage.IPlayerScore>|null} [scores] WordRevealMessage scores
       */

      /**
       * Constructs a new WordRevealMessage.
       * @memberof ServerMessage
       * @classdesc Represents a WordRevealMessage.
       * @implements IWordRevealMessage
       * @constructor
       * @param {ServerMessage.IWordRevealMessage=} [properties] Properties to set
       */
      function WordRevealMessage(properties) {
        this.scores = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * WordRevealMessage reason.
       * @member {ServerMessage.WordRevealMessage.RevealReason} reason
       * @memberof ServerMessage.WordRevealMessage
       * @instance
       */
      WordRevealMessage.prototype.reason = 0;

      /**
       * WordRevealMessage word.
       * @member {string} word
       * @memberof ServerMessage.WordRevealMessage
       * @instance
       */
      WordRevealMessage.prototype.word = "";

      /**
       * WordRevealMessage scores.
       * @member {Array.<ServerMessage.WordRevealMessage.IPlayerScore>} scores
       * @memberof ServerMessage.WordRevealMessage
       * @instance
       */
      WordRevealMessage.prototype.scores = $util.emptyArray;

      /**
       * Creates a new WordRevealMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {ServerMessage.IWordRevealMessage=} [properties] Properties to set
       * @returns {ServerMessage.WordRevealMessage} WordRevealMessage instance
       */
      WordRevealMessage.create = function create(properties) {
        return new WordRevealMessage(properties);
      };

      /**
       * Encodes the specified WordRevealMessage message. Does not implicitly {@link ServerMessage.WordRevealMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {ServerMessage.IWordRevealMessage} message WordRevealMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      WordRevealMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.reason != null &&
          Object.hasOwnProperty.call(message, "reason")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.reason);
        if (message.word != null && Object.hasOwnProperty.call(message, "word"))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.word);
        if (message.scores != null && message.scores.length)
          for (var i = 0; i < message.scores.length; ++i)
            $root.ServerMessage.WordRevealMessage.PlayerScore.encode(
              message.scores[i],
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified WordRevealMessage message, length delimited. Does not implicitly {@link ServerMessage.WordRevealMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {ServerMessage.IWordRevealMessage} message WordRevealMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      WordRevealMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a WordRevealMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.WordRevealMessage} WordRevealMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      WordRevealMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.WordRevealMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.reason = reader.int32();
              break;
            case 2:
              message.word = reader.string();
              break;
            case 3:
              if (!(message.scores && message.scores.length))
                message.scores = [];
              message.scores.push(
                $root.ServerMessage.WordRevealMessage.PlayerScore.decode(
                  reader,
                  reader.uint32()
                )
              );
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a WordRevealMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.WordRevealMessage} WordRevealMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      WordRevealMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a WordRevealMessage message.
       * @function verify
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      WordRevealMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
          switch (message.reason) {
            default:
              return "reason: enum value expected";
            case 0:
            case 1:
              break;
          }
        if (message.word != null && message.hasOwnProperty("word"))
          if (!$util.isString(message.word)) return "word: string expected";
        if (message.scores != null && message.hasOwnProperty("scores")) {
          if (!Array.isArray(message.scores)) return "scores: array expected";
          for (var i = 0; i < message.scores.length; ++i) {
            var error =
              $root.ServerMessage.WordRevealMessage.PlayerScore.verify(
                message.scores[i]
              );
            if (error) return "scores." + error;
          }
        }
        return null;
      };

      /**
       * Creates a WordRevealMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.WordRevealMessage} WordRevealMessage
       */
      WordRevealMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.WordRevealMessage)
          return object;
        var message = new $root.ServerMessage.WordRevealMessage();
        switch (object.reason) {
          case "EVERYONE_GUESSED":
          case 0:
            message.reason = 0;
            break;
          case "TIMEOUT":
          case 1:
            message.reason = 1;
            break;
        }
        if (object.word != null) message.word = String(object.word);
        if (object.scores) {
          if (!Array.isArray(object.scores))
            throw TypeError(
              ".ServerMessage.WordRevealMessage.scores: array expected"
            );
          message.scores = [];
          for (var i = 0; i < object.scores.length; ++i) {
            if (typeof object.scores[i] !== "object")
              throw TypeError(
                ".ServerMessage.WordRevealMessage.scores: object expected"
              );
            message.scores[i] =
              $root.ServerMessage.WordRevealMessage.PlayerScore.fromObject(
                object.scores[i]
              );
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a WordRevealMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.WordRevealMessage
       * @static
       * @param {ServerMessage.WordRevealMessage} message WordRevealMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      WordRevealMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.scores = [];
        if (options.defaults) {
          object.reason = options.enums === String ? "EVERYONE_GUESSED" : 0;
          object.word = "";
        }
        if (message.reason != null && message.hasOwnProperty("reason"))
          object.reason =
            options.enums === String
              ? $root.ServerMessage.WordRevealMessage.RevealReason[
                  message.reason
                ]
              : message.reason;
        if (message.word != null && message.hasOwnProperty("word"))
          object.word = message.word;
        if (message.scores && message.scores.length) {
          object.scores = [];
          for (var j = 0; j < message.scores.length; ++j)
            object.scores[j] =
              $root.ServerMessage.WordRevealMessage.PlayerScore.toObject(
                message.scores[j],
                options
              );
        }
        return object;
      };

      /**
       * Converts this WordRevealMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.WordRevealMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      WordRevealMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * RevealReason enum.
       * @name ServerMessage.WordRevealMessage.RevealReason
       * @enum {number}
       * @property {number} EVERYONE_GUESSED=0 EVERYONE_GUESSED value
       * @property {number} TIMEOUT=1 TIMEOUT value
       */
      WordRevealMessage.RevealReason = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = "EVERYONE_GUESSED")] = 0;
        values[(valuesById[1] = "TIMEOUT")] = 1;
        return values;
      })();

      WordRevealMessage.PlayerScore = (function () {
        /**
         * Properties of a PlayerScore.
         * @memberof ServerMessage.WordRevealMessage
         * @interface IPlayerScore
         * @property {number|null} [playerId] PlayerScore playerId
         * @property {number|null} [playerScore] PlayerScore playerScore
         */

        /**
         * Constructs a new PlayerScore.
         * @memberof ServerMessage.WordRevealMessage
         * @classdesc Represents a PlayerScore.
         * @implements IPlayerScore
         * @constructor
         * @param {ServerMessage.WordRevealMessage.IPlayerScore=} [properties] Properties to set
         */
        function PlayerScore(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerScore playerId.
         * @member {number} playerId
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @instance
         */
        PlayerScore.prototype.playerId = 0;

        /**
         * PlayerScore playerScore.
         * @member {number} playerScore
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @instance
         */
        PlayerScore.prototype.playerScore = 0;

        /**
         * Creates a new PlayerScore instance using the specified properties.
         * @function create
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {ServerMessage.WordRevealMessage.IPlayerScore=} [properties] Properties to set
         * @returns {ServerMessage.WordRevealMessage.PlayerScore} PlayerScore instance
         */
        PlayerScore.create = function create(properties) {
          return new PlayerScore(properties);
        };

        /**
         * Encodes the specified PlayerScore message. Does not implicitly {@link ServerMessage.WordRevealMessage.PlayerScore.verify|verify} messages.
         * @function encode
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {ServerMessage.WordRevealMessage.IPlayerScore} message PlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScore.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.playerId != null &&
            Object.hasOwnProperty.call(message, "playerId")
          )
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.playerId);
          if (
            message.playerScore != null &&
            Object.hasOwnProperty.call(message, "playerScore")
          )
            writer
              .uint32(/* id 2, wireType 0 =*/ 16)
              .int32(message.playerScore);
          return writer;
        };

        /**
         * Encodes the specified PlayerScore message, length delimited. Does not implicitly {@link ServerMessage.WordRevealMessage.PlayerScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {ServerMessage.WordRevealMessage.IPlayerScore} message PlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScore.encodeDelimited = function encodeDelimited(
          message,
          writer
        ) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerScore message from the specified reader or buffer.
         * @function decode
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerMessage.WordRevealMessage.PlayerScore} PlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScore.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.ServerMessage.WordRevealMessage.PlayerScore();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.playerId = reader.int32();
                break;
              case 2:
                message.playerScore = reader.int32();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a PlayerScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerMessage.WordRevealMessage.PlayerScore} PlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScore.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerScore message.
         * @function verify
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerScore.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId))
              return "playerId: integer expected";
          if (
            message.playerScore != null &&
            message.hasOwnProperty("playerScore")
          )
            if (!$util.isInteger(message.playerScore))
              return "playerScore: integer expected";
          return null;
        };

        /**
         * Creates a PlayerScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerMessage.WordRevealMessage.PlayerScore} PlayerScore
         */
        PlayerScore.fromObject = function fromObject(object) {
          if (
            object instanceof $root.ServerMessage.WordRevealMessage.PlayerScore
          )
            return object;
          var message = new $root.ServerMessage.WordRevealMessage.PlayerScore();
          if (object.playerId != null) message.playerId = object.playerId | 0;
          if (object.playerScore != null)
            message.playerScore = object.playerScore | 0;
          return message;
        };

        /**
         * Creates a plain object from a PlayerScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @static
         * @param {ServerMessage.WordRevealMessage.PlayerScore} message PlayerScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerScore.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.playerId = 0;
            object.playerScore = 0;
          }
          if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
          if (
            message.playerScore != null &&
            message.hasOwnProperty("playerScore")
          )
            object.playerScore = message.playerScore;
          return object;
        };

        /**
         * Converts this PlayerScore to JSON.
         * @function toJSON
         * @memberof ServerMessage.WordRevealMessage.PlayerScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerScore.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerScore;
      })();

      return WordRevealMessage;
    })();

    ServerMessage.ChatMessage = (function () {
      /**
       * Properties of a ChatMessage.
       * @memberof ServerMessage
       * @interface IChatMessage
       * @property {string|null} [playerId] ChatMessage playerId
       * @property {string|null} [message] ChatMessage message
       */

      /**
       * Constructs a new ChatMessage.
       * @memberof ServerMessage
       * @classdesc Represents a ChatMessage.
       * @implements IChatMessage
       * @constructor
       * @param {ServerMessage.IChatMessage=} [properties] Properties to set
       */
      function ChatMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * ChatMessage playerId.
       * @member {string} playerId
       * @memberof ServerMessage.ChatMessage
       * @instance
       */
      ChatMessage.prototype.playerId = "";

      /**
       * ChatMessage message.
       * @member {string} message
       * @memberof ServerMessage.ChatMessage
       * @instance
       */
      ChatMessage.prototype.message = "";

      /**
       * Creates a new ChatMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {ServerMessage.IChatMessage=} [properties] Properties to set
       * @returns {ServerMessage.ChatMessage} ChatMessage instance
       */
      ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
      };

      /**
       * Encodes the specified ChatMessage message. Does not implicitly {@link ServerMessage.ChatMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {ServerMessage.IChatMessage} message ChatMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChatMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.playerId != null &&
          Object.hasOwnProperty.call(message, "playerId")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.playerId);
        if (
          message.message != null &&
          Object.hasOwnProperty.call(message, "message")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.message);
        return writer;
      };

      /**
       * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ServerMessage.ChatMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {ServerMessage.IChatMessage} message ChatMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ChatMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.ChatMessage} ChatMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.ChatMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.playerId = reader.string();
              break;
            case 2:
              message.message = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.ChatMessage} ChatMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ChatMessage message.
       * @function verify
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          if (!$util.isString(message.playerId))
            return "playerId: string expected";
        if (message.message != null && message.hasOwnProperty("message"))
          if (!$util.isString(message.message))
            return "message: string expected";
        return null;
      };

      /**
       * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.ChatMessage} ChatMessage
       */
      ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.ChatMessage) return object;
        var message = new $root.ServerMessage.ChatMessage();
        if (object.playerId != null) message.playerId = String(object.playerId);
        if (object.message != null) message.message = String(object.message);
        return message;
      };

      /**
       * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.ChatMessage
       * @static
       * @param {ServerMessage.ChatMessage} message ChatMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ChatMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.playerId = "";
          object.message = "";
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
          object.playerId = message.playerId;
        if (message.message != null && message.hasOwnProperty("message"))
          object.message = message.message;
        return object;
      };

      /**
       * Converts this ChatMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.ChatMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ChatMessage;
    })();

    ServerMessage.ErrorMessage = (function () {
      /**
       * Properties of an ErrorMessage.
       * @memberof ServerMessage
       * @interface IErrorMessage
       * @property {string|null} [message] ErrorMessage message
       */

      /**
       * Constructs a new ErrorMessage.
       * @memberof ServerMessage
       * @classdesc Represents an ErrorMessage.
       * @implements IErrorMessage
       * @constructor
       * @param {ServerMessage.IErrorMessage=} [properties] Properties to set
       */
      function ErrorMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * ErrorMessage message.
       * @member {string} message
       * @memberof ServerMessage.ErrorMessage
       * @instance
       */
      ErrorMessage.prototype.message = "";

      /**
       * Creates a new ErrorMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {ServerMessage.IErrorMessage=} [properties] Properties to set
       * @returns {ServerMessage.ErrorMessage} ErrorMessage instance
       */
      ErrorMessage.create = function create(properties) {
        return new ErrorMessage(properties);
      };

      /**
       * Encodes the specified ErrorMessage message. Does not implicitly {@link ServerMessage.ErrorMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {ServerMessage.IErrorMessage} message ErrorMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ErrorMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.message != null &&
          Object.hasOwnProperty.call(message, "message")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.message);
        return writer;
      };

      /**
       * Encodes the specified ErrorMessage message, length delimited. Does not implicitly {@link ServerMessage.ErrorMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {ServerMessage.IErrorMessage} message ErrorMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ErrorMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an ErrorMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.ErrorMessage} ErrorMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ErrorMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.ErrorMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.message = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an ErrorMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.ErrorMessage} ErrorMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ErrorMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an ErrorMessage message.
       * @function verify
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ErrorMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
          if (!$util.isString(message.message))
            return "message: string expected";
        return null;
      };

      /**
       * Creates an ErrorMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.ErrorMessage} ErrorMessage
       */
      ErrorMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.ErrorMessage) return object;
        var message = new $root.ServerMessage.ErrorMessage();
        if (object.message != null) message.message = String(object.message);
        return message;
      };

      /**
       * Creates a plain object from an ErrorMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.ErrorMessage
       * @static
       * @param {ServerMessage.ErrorMessage} message ErrorMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ErrorMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.message = "";
        if (message.message != null && message.hasOwnProperty("message"))
          object.message = message.message;
        return object;
      };

      /**
       * Converts this ErrorMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.ErrorMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ErrorMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ErrorMessage;
    })();

    ServerMessage.ShowRoomMessage = (function () {
      /**
       * Properties of a ShowRoomMessage.
       * @memberof ServerMessage
       * @interface IShowRoomMessage
       * @property {string|null} [roomId] ShowRoomMessage roomId
       * @property {string|null} [clientId] ShowRoomMessage clientId
       * @property {boolean|null} [inGame] ShowRoomMessage inGame
       * @property {Array.<IDrawCommand>|null} [drawCommands] ShowRoomMessage drawCommands
       * @property {Array.<ServerMessage.ShowRoomMessage.IPlayer>|null} [players] ShowRoomMessage players
       * @property {string|null} [ownerId] ShowRoomMessage ownerId
       * @property {string|null} [drawingId] ShowRoomMessage drawingId
       */

      /**
       * Constructs a new ShowRoomMessage.
       * @memberof ServerMessage
       * @classdesc Represents a ShowRoomMessage.
       * @implements IShowRoomMessage
       * @constructor
       * @param {ServerMessage.IShowRoomMessage=} [properties] Properties to set
       */
      function ShowRoomMessage(properties) {
        this.drawCommands = [];
        this.players = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * ShowRoomMessage roomId.
       * @member {string} roomId
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       */
      ShowRoomMessage.prototype.roomId = "";

      /**
       * ShowRoomMessage clientId.
       * @member {string} clientId
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       */
      ShowRoomMessage.prototype.clientId = "";

      /**
       * ShowRoomMessage inGame.
       * @member {boolean} inGame
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       */
      ShowRoomMessage.prototype.inGame = false;

      /**
       * ShowRoomMessage drawCommands.
       * @member {Array.<IDrawCommand>} drawCommands
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       */
      ShowRoomMessage.prototype.drawCommands = $util.emptyArray;

      /**
       * ShowRoomMessage players.
       * @member {Array.<ServerMessage.ShowRoomMessage.IPlayer>} players
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       */
      ShowRoomMessage.prototype.players = $util.emptyArray;

      /**
       * ShowRoomMessage ownerId.
       * @member {string} ownerId
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       */
      ShowRoomMessage.prototype.ownerId = "";

      /**
       * ShowRoomMessage drawingId.
       * @member {string} drawingId
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       */
      ShowRoomMessage.prototype.drawingId = "";

      /**
       * Creates a new ShowRoomMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {ServerMessage.IShowRoomMessage=} [properties] Properties to set
       * @returns {ServerMessage.ShowRoomMessage} ShowRoomMessage instance
       */
      ShowRoomMessage.create = function create(properties) {
        return new ShowRoomMessage(properties);
      };

      /**
       * Encodes the specified ShowRoomMessage message. Does not implicitly {@link ServerMessage.ShowRoomMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {ServerMessage.IShowRoomMessage} message ShowRoomMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ShowRoomMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.roomId != null &&
          Object.hasOwnProperty.call(message, "roomId")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.roomId);
        if (
          message.clientId != null &&
          Object.hasOwnProperty.call(message, "clientId")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.clientId);
        if (
          message.inGame != null &&
          Object.hasOwnProperty.call(message, "inGame")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.inGame);
        if (message.drawCommands != null && message.drawCommands.length)
          for (var i = 0; i < message.drawCommands.length; ++i)
            $root.DrawCommand.encode(
              message.drawCommands[i],
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
            ).ldelim();
        if (message.players != null && message.players.length)
          for (var i = 0; i < message.players.length; ++i)
            $root.ServerMessage.ShowRoomMessage.Player.encode(
              message.players[i],
              writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
            ).ldelim();
        if (
          message.ownerId != null &&
          Object.hasOwnProperty.call(message, "ownerId")
        )
          writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.ownerId);
        if (
          message.drawingId != null &&
          Object.hasOwnProperty.call(message, "drawingId")
        )
          writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.drawingId);
        return writer;
      };

      /**
       * Encodes the specified ShowRoomMessage message, length delimited. Does not implicitly {@link ServerMessage.ShowRoomMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {ServerMessage.IShowRoomMessage} message ShowRoomMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ShowRoomMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ShowRoomMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.ShowRoomMessage} ShowRoomMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ShowRoomMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.ShowRoomMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.roomId = reader.string();
              break;
            case 2:
              message.clientId = reader.string();
              break;
            case 3:
              message.inGame = reader.bool();
              break;
            case 4:
              if (!(message.drawCommands && message.drawCommands.length))
                message.drawCommands = [];
              message.drawCommands.push(
                $root.DrawCommand.decode(reader, reader.uint32())
              );
              break;
            case 5:
              if (!(message.players && message.players.length))
                message.players = [];
              message.players.push(
                $root.ServerMessage.ShowRoomMessage.Player.decode(
                  reader,
                  reader.uint32()
                )
              );
              break;
            case 6:
              message.ownerId = reader.string();
              break;
            case 7:
              message.drawingId = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ShowRoomMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.ShowRoomMessage} ShowRoomMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ShowRoomMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ShowRoomMessage message.
       * @function verify
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ShowRoomMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
          if (!$util.isString(message.roomId)) return "roomId: string expected";
        if (message.clientId != null && message.hasOwnProperty("clientId"))
          if (!$util.isString(message.clientId))
            return "clientId: string expected";
        if (message.inGame != null && message.hasOwnProperty("inGame"))
          if (typeof message.inGame !== "boolean")
            return "inGame: boolean expected";
        if (
          message.drawCommands != null &&
          message.hasOwnProperty("drawCommands")
        ) {
          if (!Array.isArray(message.drawCommands))
            return "drawCommands: array expected";
          for (var i = 0; i < message.drawCommands.length; ++i) {
            var error = $root.DrawCommand.verify(message.drawCommands[i]);
            if (error) return "drawCommands." + error;
          }
        }
        if (message.players != null && message.hasOwnProperty("players")) {
          if (!Array.isArray(message.players)) return "players: array expected";
          for (var i = 0; i < message.players.length; ++i) {
            var error = $root.ServerMessage.ShowRoomMessage.Player.verify(
              message.players[i]
            );
            if (error) return "players." + error;
          }
        }
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
          if (!$util.isString(message.ownerId))
            return "ownerId: string expected";
        if (message.drawingId != null && message.hasOwnProperty("drawingId"))
          if (!$util.isString(message.drawingId))
            return "drawingId: string expected";
        return null;
      };

      /**
       * Creates a ShowRoomMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.ShowRoomMessage} ShowRoomMessage
       */
      ShowRoomMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.ShowRoomMessage)
          return object;
        var message = new $root.ServerMessage.ShowRoomMessage();
        if (object.roomId != null) message.roomId = String(object.roomId);
        if (object.clientId != null) message.clientId = String(object.clientId);
        if (object.inGame != null) message.inGame = Boolean(object.inGame);
        if (object.drawCommands) {
          if (!Array.isArray(object.drawCommands))
            throw TypeError(
              ".ServerMessage.ShowRoomMessage.drawCommands: array expected"
            );
          message.drawCommands = [];
          for (var i = 0; i < object.drawCommands.length; ++i) {
            if (typeof object.drawCommands[i] !== "object")
              throw TypeError(
                ".ServerMessage.ShowRoomMessage.drawCommands: object expected"
              );
            message.drawCommands[i] = $root.DrawCommand.fromObject(
              object.drawCommands[i]
            );
          }
        }
        if (object.players) {
          if (!Array.isArray(object.players))
            throw TypeError(
              ".ServerMessage.ShowRoomMessage.players: array expected"
            );
          message.players = [];
          for (var i = 0; i < object.players.length; ++i) {
            if (typeof object.players[i] !== "object")
              throw TypeError(
                ".ServerMessage.ShowRoomMessage.players: object expected"
              );
            message.players[i] =
              $root.ServerMessage.ShowRoomMessage.Player.fromObject(
                object.players[i]
              );
          }
        }
        if (object.ownerId != null) message.ownerId = String(object.ownerId);
        if (object.drawingId != null)
          message.drawingId = String(object.drawingId);
        return message;
      };

      /**
       * Creates a plain object from a ShowRoomMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.ShowRoomMessage
       * @static
       * @param {ServerMessage.ShowRoomMessage} message ShowRoomMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ShowRoomMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) {
          object.drawCommands = [];
          object.players = [];
        }
        if (options.defaults) {
          object.roomId = "";
          object.clientId = "";
          object.inGame = false;
          object.ownerId = "";
          object.drawingId = "";
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
          object.roomId = message.roomId;
        if (message.clientId != null && message.hasOwnProperty("clientId"))
          object.clientId = message.clientId;
        if (message.inGame != null && message.hasOwnProperty("inGame"))
          object.inGame = message.inGame;
        if (message.drawCommands && message.drawCommands.length) {
          object.drawCommands = [];
          for (var j = 0; j < message.drawCommands.length; ++j)
            object.drawCommands[j] = $root.DrawCommand.toObject(
              message.drawCommands[j],
              options
            );
        }
        if (message.players && message.players.length) {
          object.players = [];
          for (var j = 0; j < message.players.length; ++j)
            object.players[j] =
              $root.ServerMessage.ShowRoomMessage.Player.toObject(
                message.players[j],
                options
              );
        }
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
          object.ownerId = message.ownerId;
        if (message.drawingId != null && message.hasOwnProperty("drawingId"))
          object.drawingId = message.drawingId;
        return object;
      };

      /**
       * Converts this ShowRoomMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.ShowRoomMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ShowRoomMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      ShowRoomMessage.Player = (function () {
        /**
         * Properties of a Player.
         * @memberof ServerMessage.ShowRoomMessage
         * @interface IPlayer
         * @property {string|null} [playerId] Player playerId
         * @property {string|null} [playerName] Player playerName
         * @property {number|null} [playerScore] Player playerScore
         * @property {boolean|null} [guessedWord] Player guessedWord
         */

        /**
         * Constructs a new Player.
         * @memberof ServerMessage.ShowRoomMessage
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {ServerMessage.ShowRoomMessage.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player playerId.
         * @member {string} playerId
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @instance
         */
        Player.prototype.playerId = "";

        /**
         * Player playerName.
         * @member {string} playerName
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @instance
         */
        Player.prototype.playerName = "";

        /**
         * Player playerScore.
         * @member {number} playerScore
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @instance
         */
        Player.prototype.playerScore = 0;

        /**
         * Player guessedWord.
         * @member {boolean} guessedWord
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @instance
         */
        Player.prototype.guessedWord = false;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {ServerMessage.ShowRoomMessage.IPlayer=} [properties] Properties to set
         * @returns {ServerMessage.ShowRoomMessage.Player} Player instance
         */
        Player.create = function create(properties) {
          return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link ServerMessage.ShowRoomMessage.Player.verify|verify} messages.
         * @function encode
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {ServerMessage.ShowRoomMessage.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.playerId != null &&
            Object.hasOwnProperty.call(message, "playerId")
          )
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.playerId);
          if (
            message.playerName != null &&
            Object.hasOwnProperty.call(message, "playerName")
          )
            writer
              .uint32(/* id 2, wireType 2 =*/ 18)
              .string(message.playerName);
          if (
            message.playerScore != null &&
            Object.hasOwnProperty.call(message, "playerScore")
          )
            writer
              .uint32(/* id 3, wireType 0 =*/ 24)
              .int32(message.playerScore);
          if (
            message.guessedWord != null &&
            Object.hasOwnProperty.call(message, "guessedWord")
          )
            writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.guessedWord);
          return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link ServerMessage.ShowRoomMessage.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {ServerMessage.ShowRoomMessage.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerMessage.ShowRoomMessage.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.ServerMessage.ShowRoomMessage.Player();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.playerId = reader.string();
                break;
              case 2:
                message.playerName = reader.string();
                break;
              case 3:
                message.playerScore = reader.int32();
                break;
              case 4:
                message.guessedWord = reader.bool();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerMessage.ShowRoomMessage.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isString(message.playerId))
              return "playerId: string expected";
          if (
            message.playerName != null &&
            message.hasOwnProperty("playerName")
          )
            if (!$util.isString(message.playerName))
              return "playerName: string expected";
          if (
            message.playerScore != null &&
            message.hasOwnProperty("playerScore")
          )
            if (!$util.isInteger(message.playerScore))
              return "playerScore: integer expected";
          if (
            message.guessedWord != null &&
            message.hasOwnProperty("guessedWord")
          )
            if (typeof message.guessedWord !== "boolean")
              return "guessedWord: boolean expected";
          return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerMessage.ShowRoomMessage.Player} Player
         */
        Player.fromObject = function fromObject(object) {
          if (object instanceof $root.ServerMessage.ShowRoomMessage.Player)
            return object;
          var message = new $root.ServerMessage.ShowRoomMessage.Player();
          if (object.playerId != null)
            message.playerId = String(object.playerId);
          if (object.playerName != null)
            message.playerName = String(object.playerName);
          if (object.playerScore != null)
            message.playerScore = object.playerScore | 0;
          if (object.guessedWord != null)
            message.guessedWord = Boolean(object.guessedWord);
          return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @static
         * @param {ServerMessage.ShowRoomMessage.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.playerId = "";
            object.playerName = "";
            object.playerScore = 0;
            object.guessedWord = false;
          }
          if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
          if (
            message.playerName != null &&
            message.hasOwnProperty("playerName")
          )
            object.playerName = message.playerName;
          if (
            message.playerScore != null &&
            message.hasOwnProperty("playerScore")
          )
            object.playerScore = message.playerScore;
          if (
            message.guessedWord != null &&
            message.hasOwnProperty("guessedWord")
          )
            object.guessedWord = message.guessedWord;
          return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof ServerMessage.ShowRoomMessage.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
      })();

      return ShowRoomMessage;
    })();

    ServerMessage.LobbyOwnerChanged = (function () {
      /**
       * Properties of a LobbyOwnerChanged.
       * @memberof ServerMessage
       * @interface ILobbyOwnerChanged
       * @property {string|null} [newOwnerId] LobbyOwnerChanged newOwnerId
       */

      /**
       * Constructs a new LobbyOwnerChanged.
       * @memberof ServerMessage
       * @classdesc Represents a LobbyOwnerChanged.
       * @implements ILobbyOwnerChanged
       * @constructor
       * @param {ServerMessage.ILobbyOwnerChanged=} [properties] Properties to set
       */
      function LobbyOwnerChanged(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * LobbyOwnerChanged newOwnerId.
       * @member {string} newOwnerId
       * @memberof ServerMessage.LobbyOwnerChanged
       * @instance
       */
      LobbyOwnerChanged.prototype.newOwnerId = "";

      /**
       * Creates a new LobbyOwnerChanged instance using the specified properties.
       * @function create
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {ServerMessage.ILobbyOwnerChanged=} [properties] Properties to set
       * @returns {ServerMessage.LobbyOwnerChanged} LobbyOwnerChanged instance
       */
      LobbyOwnerChanged.create = function create(properties) {
        return new LobbyOwnerChanged(properties);
      };

      /**
       * Encodes the specified LobbyOwnerChanged message. Does not implicitly {@link ServerMessage.LobbyOwnerChanged.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {ServerMessage.ILobbyOwnerChanged} message LobbyOwnerChanged message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LobbyOwnerChanged.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.newOwnerId != null &&
          Object.hasOwnProperty.call(message, "newOwnerId")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.newOwnerId);
        return writer;
      };

      /**
       * Encodes the specified LobbyOwnerChanged message, length delimited. Does not implicitly {@link ServerMessage.LobbyOwnerChanged.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {ServerMessage.ILobbyOwnerChanged} message LobbyOwnerChanged message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LobbyOwnerChanged.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a LobbyOwnerChanged message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.LobbyOwnerChanged} LobbyOwnerChanged
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LobbyOwnerChanged.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.LobbyOwnerChanged();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.newOwnerId = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a LobbyOwnerChanged message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.LobbyOwnerChanged} LobbyOwnerChanged
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LobbyOwnerChanged.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a LobbyOwnerChanged message.
       * @function verify
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      LobbyOwnerChanged.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.newOwnerId != null && message.hasOwnProperty("newOwnerId"))
          if (!$util.isString(message.newOwnerId))
            return "newOwnerId: string expected";
        return null;
      };

      /**
       * Creates a LobbyOwnerChanged message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.LobbyOwnerChanged} LobbyOwnerChanged
       */
      LobbyOwnerChanged.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.LobbyOwnerChanged)
          return object;
        var message = new $root.ServerMessage.LobbyOwnerChanged();
        if (object.newOwnerId != null)
          message.newOwnerId = String(object.newOwnerId);
        return message;
      };

      /**
       * Creates a plain object from a LobbyOwnerChanged message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.LobbyOwnerChanged
       * @static
       * @param {ServerMessage.LobbyOwnerChanged} message LobbyOwnerChanged
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      LobbyOwnerChanged.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.newOwnerId = "";
        if (message.newOwnerId != null && message.hasOwnProperty("newOwnerId"))
          object.newOwnerId = message.newOwnerId;
        return object;
      };

      /**
       * Converts this LobbyOwnerChanged to JSON.
       * @function toJSON
       * @memberof ServerMessage.LobbyOwnerChanged
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      LobbyOwnerChanged.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return LobbyOwnerChanged;
    })();

    ServerMessage.GameStartedMessage = (function () {
      /**
       * Properties of a GameStartedMessage.
       * @memberof ServerMessage
       * @interface IGameStartedMessage
       */

      /**
       * Constructs a new GameStartedMessage.
       * @memberof ServerMessage
       * @classdesc Represents a GameStartedMessage.
       * @implements IGameStartedMessage
       * @constructor
       * @param {ServerMessage.IGameStartedMessage=} [properties] Properties to set
       */
      function GameStartedMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new GameStartedMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {ServerMessage.IGameStartedMessage=} [properties] Properties to set
       * @returns {ServerMessage.GameStartedMessage} GameStartedMessage instance
       */
      GameStartedMessage.create = function create(properties) {
        return new GameStartedMessage(properties);
      };

      /**
       * Encodes the specified GameStartedMessage message. Does not implicitly {@link ServerMessage.GameStartedMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {ServerMessage.IGameStartedMessage} message GameStartedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      GameStartedMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified GameStartedMessage message, length delimited. Does not implicitly {@link ServerMessage.GameStartedMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {ServerMessage.IGameStartedMessage} message GameStartedMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      GameStartedMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a GameStartedMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.GameStartedMessage} GameStartedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GameStartedMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.GameStartedMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a GameStartedMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.GameStartedMessage} GameStartedMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GameStartedMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a GameStartedMessage message.
       * @function verify
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      GameStartedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        return null;
      };

      /**
       * Creates a GameStartedMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.GameStartedMessage} GameStartedMessage
       */
      GameStartedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.GameStartedMessage)
          return object;
        return new $root.ServerMessage.GameStartedMessage();
      };

      /**
       * Creates a plain object from a GameStartedMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.GameStartedMessage
       * @static
       * @param {ServerMessage.GameStartedMessage} message GameStartedMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      GameStartedMessage.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this GameStartedMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.GameStartedMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      GameStartedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return GameStartedMessage;
    })();

    ServerMessage.UpdateDrawingPlayerMessage = (function () {
      /**
       * Properties of an UpdateDrawingPlayerMessage.
       * @memberof ServerMessage
       * @interface IUpdateDrawingPlayerMessage
       */

      /**
       * Constructs a new UpdateDrawingPlayerMessage.
       * @memberof ServerMessage
       * @classdesc Represents an UpdateDrawingPlayerMessage.
       * @implements IUpdateDrawingPlayerMessage
       * @constructor
       * @param {ServerMessage.IUpdateDrawingPlayerMessage=} [properties] Properties to set
       */
      function UpdateDrawingPlayerMessage(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new UpdateDrawingPlayerMessage instance using the specified properties.
       * @function create
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {ServerMessage.IUpdateDrawingPlayerMessage=} [properties] Properties to set
       * @returns {ServerMessage.UpdateDrawingPlayerMessage} UpdateDrawingPlayerMessage instance
       */
      UpdateDrawingPlayerMessage.create = function create(properties) {
        return new UpdateDrawingPlayerMessage(properties);
      };

      /**
       * Encodes the specified UpdateDrawingPlayerMessage message. Does not implicitly {@link ServerMessage.UpdateDrawingPlayerMessage.verify|verify} messages.
       * @function encode
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {ServerMessage.IUpdateDrawingPlayerMessage} message UpdateDrawingPlayerMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UpdateDrawingPlayerMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified UpdateDrawingPlayerMessage message, length delimited. Does not implicitly {@link ServerMessage.UpdateDrawingPlayerMessage.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {ServerMessage.IUpdateDrawingPlayerMessage} message UpdateDrawingPlayerMessage message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UpdateDrawingPlayerMessage.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an UpdateDrawingPlayerMessage message from the specified reader or buffer.
       * @function decode
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ServerMessage.UpdateDrawingPlayerMessage} UpdateDrawingPlayerMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UpdateDrawingPlayerMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ServerMessage.UpdateDrawingPlayerMessage();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an UpdateDrawingPlayerMessage message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ServerMessage.UpdateDrawingPlayerMessage} UpdateDrawingPlayerMessage
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UpdateDrawingPlayerMessage.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an UpdateDrawingPlayerMessage message.
       * @function verify
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      UpdateDrawingPlayerMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        return null;
      };

      /**
       * Creates an UpdateDrawingPlayerMessage message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ServerMessage.UpdateDrawingPlayerMessage} UpdateDrawingPlayerMessage
       */
      UpdateDrawingPlayerMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage.UpdateDrawingPlayerMessage)
          return object;
        return new $root.ServerMessage.UpdateDrawingPlayerMessage();
      };

      /**
       * Creates a plain object from an UpdateDrawingPlayerMessage message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @static
       * @param {ServerMessage.UpdateDrawingPlayerMessage} message UpdateDrawingPlayerMessage
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      UpdateDrawingPlayerMessage.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this UpdateDrawingPlayerMessage to JSON.
       * @function toJSON
       * @memberof ServerMessage.UpdateDrawingPlayerMessage
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      UpdateDrawingPlayerMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return UpdateDrawingPlayerMessage;
    })();

    return ServerMessage;
  })();

  return $root;
});
