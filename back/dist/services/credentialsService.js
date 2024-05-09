"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredential = exports.createCredential = void 0;
const data_source_1 = require("../config/data-source");
const createCredential = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userAlreadyRegistered = yield data_source_1.credentialModel.findOne({ where: { username } });
    if (userAlreadyRegistered)
        throw Error("El nombre de usuario ya existe.");
    const newCredential = data_source_1.credentialModel.create({ username, password });
    yield data_source_1.credentialModel.save(newCredential);
    return newCredential;
});
exports.createCredential = createCredential;
const validateCredential = (validateCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = validateCredentialDto;
    const foundCredentials = yield data_source_1.credentialModel.findOneBy({ username });
    if (!foundCredentials)
        throw Error("Usuario no encontrado");
    if (password !== (foundCredentials === null || foundCredentials === void 0 ? void 0 : foundCredentials.password))
        throw Error("Contraseña incorrecta");
    return foundCredentials;
    /*  const foundCredentials = credentials.find(
         (e) => e.username === username && e.password === password
     ); */
});
exports.validateCredential = validateCredential;
