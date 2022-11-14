import { Container } from "typedi";
import { loadMoongose } from "@/db/mongoose";
import Logger from "@/logger";
import ConfigService from "@/services/config";

const c = new ConfigService();

import "@/events/subscribers/user";

Container.set("logger", Logger);

const db = async () => {
  const dbConnection = await loadMoongose();

  Container.set("db", dbConnection);
};

export { db };
