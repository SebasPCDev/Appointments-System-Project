import { Request, Response } from "express";
import { getAllAppointments } from "../../services/appointmentsService";

export default async (req: Request, res: Response)=>{
    const allAppointments = await getAllAppointments();
    res.status(200).json(allAppointments)
}