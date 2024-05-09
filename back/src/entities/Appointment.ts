import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "appointments" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  description: string;

  @Column()
  userId: number;

  @Column({ default: "actives" })
  status: string;

  //Appointment N:1 User
  @ManyToOne(() => User, (user) => user.appointments) user: User;
}
