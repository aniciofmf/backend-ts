import { Container } from "typedi";
import { loadMoongose } from "@/db/mongoose";

import "@/events/subscribers/user";

const db = async () => {
  const dbConnection = await loadMoongose();

  Container.set("db", dbConnection);
};

const models = async () => {};

export { db };
