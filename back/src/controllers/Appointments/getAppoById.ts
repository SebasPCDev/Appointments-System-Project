import { Request, Response } from "express";
import { getAppointmentById } from "../../services/appointmentsService";

export default async (req: Request, res: Response) =>{

    const {id} = req.params;
    try {
        const foundAppointment = await getAppointmentById(Number(id))
        res.status(200).json(foundAppointment)
    } catch (error:any) {
                
        res.status(400).json({message: error.message})
    }
}