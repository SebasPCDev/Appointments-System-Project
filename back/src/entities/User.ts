import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"


//
@Entity({
    name: "users" //Esto se pone para cambiar el nombre de la tabla. Puede generar problemas al crearse con el nombre User
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: number

    @OneToOne(() => Credential) 
    @JoinColumn() credentialId: Credential  

    // User 1:N Appointment
    
    @OneToMany(() => Appointment, (appointment) => appointment.user) appointments: Appointment[] 
    
}

