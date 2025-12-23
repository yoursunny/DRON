import { Name } from "@ndn/packet";
import strattadbEnvironment from "@strattadb/environment";
import dotenv from "dotenv";

const { makeEnv, parsers } = strattadbEnvironment;

dotenv.config();

export const env = makeEnv({
  registry: {
    envVarName: "DRON_REGISTRY",
    parser: parsers.url,
    required: true,
  },
  name: {
    envVarName: "DRON_NAME",
    parser: parsers.string,
    required: true,
  },
  chunkSize: {
    envVarName: "DRON_CHUNK_SIZE",
    parser: parsers.positiveInteger,
    required: false,
    defaultValue: 7777,
  },
  concurrency: {
    envVarName: "DRON_CONCURRENCY",
    parser: parsers.positiveInteger,
    required: false,
    defaultValue: 8,
  },
  fetchChunks: {
    envVarName: "DRON_FETCH_CHUNKS",
    parser: parsers.positiveInteger,
    required: false,
    defaultValue: 512,
  },
  fetchCaches: {
    envVarName: "DRON_FETCH_CACHES",
    parser: parsers.positiveInteger,
    required: false,
    defaultValue: 8,
  },
});

export const prefix = new Name(env.name);
