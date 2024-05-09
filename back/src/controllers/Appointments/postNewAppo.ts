import { Request, Response } from "express";
import IAppointment from "../../interfaces/IAppointment";
import postNewAppo from "./postNewAppo";
import { createAppointment } from "../../services/appointmentsService";
import IAppointmentDto from "../../interfaces/IAppointmentDto";

export default async (req: Request, res: Response) =>{
    
    const infoAppo : IAppointmentDto = req.body;
    try {
        const newAppo =  await createAppointment(infoAppo);
        res.status(201).json(newAppo)


    } catch (error:any) {
        res.status(400).json({message: error.message})
        
    }
}