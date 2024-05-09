
import { Router } from "express";
import { getAllUsers, getUserById, postLogIn, postNewUser } from "../controllers";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/register", postNewUser)
userRouter.post("/login", postLogIn)

export default userRouter
