import mongoose from "mongoose";
import { Db as DB } from "mongodb";
import config from "@/config";

const loadMoongose = async (): Promise<DB> => {
  try {
    const mongooseHandler = await mongoose.connect(config.mongodb);
    return mongooseHandler.connection.db;
  } catch (error) {}
};

export { loadMoongose };
