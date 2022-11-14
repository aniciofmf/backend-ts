import { Container } from "typedi";
import { loadMoongose } from "@/db/mongoose";
import Logger from "@/logger";
import ConfigService from "@/services/config";
import KeyService from "@/services/key";

import "@/events/subscribers/user";

Container.set("Logger", Logger);
Container.set("ConfigService", ConfigService);
Container.set("KeyService", KeyService);

const db = async () => {
  const dbConnection = await loadMoongose();

  Container.set("db", dbConnection);
};

export { db };
