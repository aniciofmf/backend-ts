import { Container } from "typedi";
import { loadMoongose } from "@/db/mongoose";
import Logger from "@/logger";

import "@/events/subscribers/user";

Container.set("logger", Logger);

const db = async () => {
  const dbConnection = await loadMoongose();

  Container.set("db", dbConnection);
};

const models = async () => {};

export { db };
