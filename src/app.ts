import "reflect-metadata";

import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import { errors } from "celebrate";
import { loadMoongose } from "@/loaders";

module.exports = async () => {
  const app = express();

  app.set("x-powered-by", 0);
  app.set("trust proxy", 1);

  app.use(helmet());
  app.use(compression());
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(errors());

  await loadMoongose();
};
