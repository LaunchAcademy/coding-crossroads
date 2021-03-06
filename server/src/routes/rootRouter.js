import express from "express";
import clientRouter from "./clientRouter.js";
import resourcesRouter from "./api/v1/resourcesRouter.js"
import userSessionRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionRouter);
rootRouter.use("/users", usersRouter);

rootRouter.use("/api/v1/resources", resourcesRouter);


export default rootRouter;
