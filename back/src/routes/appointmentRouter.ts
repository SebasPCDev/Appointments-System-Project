import { Router } from "express";


import {getAllAppo, getAppoById, postNewAppo, putAppoStatus} from "../controllers";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAllAppo)
appointmentRouter.get("/:id", getAppoById)
appointmentRouter.post("/schedule", postNewAppo)
appointmentRouter.put("/cancel", putAppoStatus)

export default appointmentRouter