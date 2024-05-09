import React, { useEffect, useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/appointmentCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";
import NoAppointmentsMessage from "../../components/noAppointments/noAppointmentsMessage";
import { NavLink } from "react-router-dom";
import styles from "./Appointments.module.css";

//const GETAPPOINTMENTS_URL = "http://localhost:3001/appointment";
const GETUSERBYID_URL = "http://localhost:3001/users/";

export default function Appointments() {
  const actualUserId = useSelector(
    (state) => state.actualUser?.userData?.user?.id
  );
  const appointments = useSelector(
    (state) => state.actualUser.userAppointments
  );

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(GETUSERBYID_URL + actualUserId)
      .then((response) => response.data.appointments)
      .then((appointments) => {
        dispatch(setUserAppointments(appointments));
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Mis reservas</h1>

      {appointments.length === 0 && <NoAppointmentsMessage />}
      {appointments.length !== 0 ? (
        <div className={styles.cardContainer}>
          <span>📅 Fecha</span>
          <span>🕛 Hora</span>
          <span>🔤 Descripción</span>
          <span>🔄 Estado</span>
        </div>
      ) : null}

      {appointments.map((appo) => (
        <AppointmentCard
          key={appo.id}
          id={appo.id}
          date={appo.date}
          time={appo.time}
          description={appo.description}
          status={appo.status}
        />
      ))}
      {appointments.length !== 0 ? (
        <div className={styles.buttonContainer}>
          <NavLink to="/newappo">
            <button className={styles.button}>Nueva reserva</button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}
