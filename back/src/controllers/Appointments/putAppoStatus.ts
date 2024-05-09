import { Request, Response } from "express";
import { setStatusAppointment } from "../../services/appointmentsService";

export default async(req: Request, res: Response) =>{
    
    const {id} = req.body;
    try {
        const setAppo = await setStatusAppointment(id)
        res.status(200).json(setAppo)
    } catch (error:any) {
        res.status(400).json({message: error.message})
    
    }
}