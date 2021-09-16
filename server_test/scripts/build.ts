import * as pbjs from "protobufjs/cli/pbjs";
import * as pbts from "protobufjs/cli/pbts";
import * as glob from "glob";
import * as path from "path";

const PROTOBUF_FILES = path.join(
  __dirname,
  "../../library/src/main/proto/draw/*.proto"
);
const MESSAGES_OUTPUT = path.join(__dirname, "../messages.js");
const MESSAGES_OUTPUT_D_TS = path.join(__dirname, "../messages.d.ts");

function buildProtoFiles() {
  const protoFiles = glob.sync(PROTOBUF_FILES);

  pbjs.main(["-t", "static-module", "-o", MESSAGES_OUTPUT, ...protoFiles]);
  pbts.main(["-o", MESSAGES_OUTPUT_D_TS, MESSAGES_OUTPUT]);
}

async function build() {
  buildProtoFiles();
}

build().catch((err) => console.error(err));
