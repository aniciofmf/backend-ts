import { Router } from "express";

const router = Router();

const userRoute = () => {
  router.use("/user");

  router.post("/signup", [
    /*middlewares*/
  ]);
  router.post("/login", [
    /*middlewares*/
  ]);
  router.post("/logout", [
    /*middlewares*/
  ]);

  router.get("/me", [
    /*middlewares*/
  ]);
  router.use("/reset", [
    /*middlewares*/
  ]);

  return router;
};

export default userRoute;
