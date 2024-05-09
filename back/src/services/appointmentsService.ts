import { AppoModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import IAppointment from "../interfaces/IAppointment";
import IAppointmentDto from "../interfaces/IAppointmentDto";
import { appointments } from "../utils/appointmentTemplate";

export const getAllAppointments = async () => {
  const allAppointments = await AppoModel.find();
  return allAppointments;
};

export const getAppointmentById = async (
  id: number
): Promise<Appointment | null> => {
  const foundAppointment: Appointment | null = await AppoModel.findOneBy({
    id: id,
  });
  if (!foundAppointment) throw Error("Turno no encontrado");
  return foundAppointment;
};

export const createAppointment = async (
  createAppointmentDto: IAppointmentDto
) => {
  const newAppointment = await AppoModel.create({
    date: createAppointmentDto.date,
    time: createAppointmentDto.time,
    description: createAppointmentDto.description,
    userId: createAppointmentDto.userId,
    status: createAppointmentDto.status,
  });
  await AppoModel.save(newAppointment);
  return newAppointment;
};

export const setStatusAppointment = async (
  id: number
): Promise<Appointment | null> => {
  const foundAppointment: Appointment | null = await AppoModel.findOneBy({
    id: id,
  });

  if (!foundAppointment) throw Error("Turno no encontrado");
  if (foundAppointment) {
    if (foundAppointment.status === "canceled")
      foundAppointment.status = "actives";
    if (foundAppointment.status === "actives")
      foundAppointment.status = "canceled";
  }
  await AppoModel.save(foundAppointment);

  return foundAppointment;
};
