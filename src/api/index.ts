import { Router } from "express";
import userRoute from "@/api/routes/user";

export default () => {
  const app = Router();
  userRoute(app);
  return app;
};
