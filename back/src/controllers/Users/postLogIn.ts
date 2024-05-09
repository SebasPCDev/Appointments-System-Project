import { Request, Response } from "express";
import { validateCredential } from "../../services/credentialsService";
import { findUserByCredentialId } from "../../services/usersService";

export default async (req: Request, res: Response) =>{

    const {username, password} = req.body;
    try {
        const credential = await validateCredential({
            username, password
        });
        const user = await findUserByCredentialId(credential.id)
        res.status(200).json({login: true, user})
    } catch (error:any) {
        res.status(404).json({ message: error.message})
    }
}