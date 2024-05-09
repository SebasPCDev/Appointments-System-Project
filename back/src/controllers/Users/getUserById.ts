

import { Request, Response } from "express";
import { getUserByIdService } from "../../services/usersService";

export default async (req: Request, res: Response)=>{
    const {id} = req.params;
    try {
        const foundUser = await getUserByIdService(Number(id))
        res.status(200).json(foundUser)
    } catch (error:any) {
        res.status(404).json({message: error.message})
        
    }
}