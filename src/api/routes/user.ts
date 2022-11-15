import { Router } from "express";

const route = Router();
export default (app: Router) => {
  app.use("/user", route);

  route.post("/signup", [
    /*middlewares*/
  ]);
  route.post("/login", [
    /*middlewares*/
  ]);
  route.post("/logout", [
    /*middlewares*/
  ]);

  route.get("/me", [
    /*middlewares*/
  ]);
  route.post("/reset", [
    /*middlewares*/
  ]);

  return route;
};
