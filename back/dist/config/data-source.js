"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialModel = exports.AppoModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Appointment_1 = require("../entities/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "4375",
    database: "demoturnos",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Credential_1.Credential, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.AppoModel = exports.AppDataSource.getRepository(Appointment_1.Appointment);
exports.credentialModel = exports.AppDataSource.getRepository(Credential_1.Credential);
