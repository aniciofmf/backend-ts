import mongoose from "mongoose";
import { Db as DB } from "mongodb";
import config from "@/config";
import Logger from "@/logger";

const mongoDBOpts = {
  autoIndex: false,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 5000,
  family: 4,
};

const loadMoongose = async (): Promise<DB> => {
  try {
    const mongooseHandler = await mongoose.connect(config.mongodb, mongoDBOpts);
    return mongooseHandler.connection.db;
  } catch (error) {
    Logger.error("There was a problem connecting to the DB");
  }
};

export { loadMoongose };
