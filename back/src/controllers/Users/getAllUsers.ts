

import { Request, Response } from "express";
import { users } from "../../utils/userTemplate";
import IUser from "../../interfaces/IUser";
import { getAllUserService } from "../../services/usersService";
import { User } from "../../entities/User";



export default async (req: Request, res: Response) =>{
    const users = await getAllUserService();
    res.status(200).json(users)
}