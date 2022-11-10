import path from "node:path";
import dotenv from "dotenv";

dotenv.config({
  path: `${process.cwd()}${path.sep}.env.${process.env.NODE_ENV}`,
});

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  endpoint: process.env.APP_ENDPOINT,
  endpoint_prefix: process.env.APP_API_PREFIX,
  port: process.env.APP_PORT,
  mongodb: process.env.APP_MONGODB_URI,
  security: {
    jwtPrivKey: process.env.APP_JWT_PRIV_KEY,
    jwtPubKey: process.env.APP_JWT_PUB_KEY,
    jwtSecret: process.env.APP_JWT_SECRET,
    jwtAlgorithm: process.env.APP_JWT_ALGO,
  },
  logging: {},
};
