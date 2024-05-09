//Esta interfaz se crea para transferir la información sin ID. Luego se agrega el ID por medio de la BD

interface ICredentialDto{

    username: string
    password: string
}

export default ICredentialDto