
import { Request, Response } from "express";
import { createUserService } from "../../services/usersService";
import IUserDto from "../../interfaces/IUserDto";

export default async (req: Request, res: Response) =>{

    const info : IUserDto = req.body;
    try {
        const newUser = await createUserService(info)
        res.status(201).json(newUser)
        
    } catch (error:any) {
        res.status(400).json({message: error.message})
        
    }
}