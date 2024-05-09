interface IAppointmentDto {
  id: number;
  date: string;
  time: string;
  description: string;
  userId: number;
  status: "actives" | "canceled";
}

export default IAppointmentDto;
