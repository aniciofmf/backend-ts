import mongoose from "mongoose";
import { Db as DB } from "mongodb";
import config from "@/config";

const mongoDBOpts = {
  autoIndex: false,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 10000,
  family: 4,
};

const loadMoongose = async (): Promise<DB> => {
  try {
    const mongooseHandler = await mongoose.connect(config.mongodb, mongoDBOpts);
    return mongooseHandler.connection.db;
  } catch (error) {
    console.log(error);
  }
};

export { loadMoongose };
