
/* export enum AppointmentStatus {
    ACTIVES = "active",
    CANCELED = "canceled"
} */

interface IAppointment{
    id: number
    date: string
    time: string
    userId: number
    status: 'actives' | 'canceled'
}


export default IAppointment