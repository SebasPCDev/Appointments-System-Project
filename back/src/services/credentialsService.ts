import { credentialModel } from "../config/data-source";
import { Credential } from "../entities/Credential";
import ICredentialDto from "../interfaces/ICredentialDto";



export const createCredential = async (username:string, password:string) : Promise<Credential> =>{

    const userAlreadyRegistered : Credential | null = await credentialModel.findOne({where: {username}})

    if(userAlreadyRegistered) throw Error("El nombre de usuario ya existe.")

    const newCredential : Credential = credentialModel.create({username, password})
    await credentialModel.save(newCredential)
    return newCredential
};


export const validateCredential = async (validateCredentialDto: ICredentialDto) : Promise<Credential> => {

    const {username, password} = validateCredentialDto;
    const foundCredentials : Credential | null = await credentialModel.findOneBy({ username });
    
    if(!foundCredentials) throw Error("Usuario no encontrado")
    if(password !== foundCredentials?.password) throw Error("Contraseña incorrecta")
    return foundCredentials

/*  const foundCredentials = credentials.find(
     (e) => e.username === username && e.password === password
 ); */
}



