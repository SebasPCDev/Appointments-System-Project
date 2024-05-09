import { UserModel } from "../config/data-source";
import { User } from "../entities/User";

import IUserDto from "../interfaces/IUserDto";

import { createCredential } from "./credentialsService";




export const getAllUserService = async (): Promise<User[]> =>{
    const allUsers = await UserModel.find({
        relations: { appointments: true }
    })
    return allUsers
}

export const getUserByIdService = async (id:number) =>{
    const foundUser: User | null = await UserModel.findOne({
        where: {id}, relations: { appointments: true}
    })
    if(!foundUser) throw Error("Usuario no encontrado");
    return foundUser;
}

export const createUserService = async (createUserDto : IUserDto) : Promise <User> => {

    const {username, password} = createUserDto;
    const newCredential = await createCredential(username, password);

    const newUser = await UserModel.create({
        name: createUserDto.name,
        email: createUserDto.email,
        birthdate: createUserDto.birthdate,
        nDni: Number(createUserDto.nDni),
        credentialId: newCredential
    });

    await UserModel.save(newUser)
    return newUser
}

export const findUserByCredentialId = async (credentialId: number) : Promise<User | null> =>{

    const foundUser : User | null = await UserModel.findOneBy({
        credentialId: {id: credentialId}
    });

    return foundUser

}