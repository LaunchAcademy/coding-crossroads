import express from "express"
import clientRouter from "./clientRouter.js"
import resourcesRouter from "./api/v1/resourcesRouter.js"
import userSessionRouter from "./api/v1/userSessionsRouter.js"
import usersRouter from "./api/v1/usersRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/user-sessions", userSessionRouter)
rootRouter.use("/api/v1/users", usersRouter)

rootRouter.use("/api/v1/resources", resourcesRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
