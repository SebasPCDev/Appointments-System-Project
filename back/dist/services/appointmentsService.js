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
exports.setStatusAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
const data_source_1 = require("../config/data-source");
const getAllAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield data_source_1.AppoModel.find();
    return allAppointments;
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield data_source_1.AppoModel.findOneBy({
        id: id,
    });
    if (!foundAppointment)
        throw Error("Turno no encontrado");
    return foundAppointment;
});
exports.getAppointmentById = getAppointmentById;
const createAppointment = (createAppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = yield data_source_1.AppoModel.create({
        date: createAppointmentDto.date,
        time: createAppointmentDto.time,
        description: createAppointmentDto.description,
        userId: createAppointmentDto.userId,
        status: createAppointmentDto.status,
    });
    yield data_source_1.AppoModel.save(newAppointment);
    return newAppointment;
});
exports.createAppointment = createAppointment;
const setStatusAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield data_source_1.AppoModel.findOneBy({
        id: id,
    });
    if (!foundAppointment)
        throw Error("Turno no encontrado");
    if (foundAppointment) {
        if (foundAppointment.status === "canceled")
            foundAppointment.status = "actives";
        if (foundAppointment.status === "actives")
            foundAppointment.status = "canceled";
    }
    yield data_source_1.AppoModel.save(foundAppointment);
    return foundAppointment;
});
exports.setStatusAppointment = setStatusAppointment;
