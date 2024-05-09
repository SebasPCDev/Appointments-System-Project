import React, { useState } from "react";
import styles from "./appointmentCard.module.css";
import axios from "axios";
import { setUserAppointments } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const PUTSTATUS_URL = "http://localhost:3001/appointment/cancel";
const GETUSERBYID_URL = "http://localhost:3001/users/";

export default function AppointmentCard({
  id,
  date,
  time,
  description,
  status,
}) {
  const actualUserId = useSelector(
    (state) => state.actualUser?.userData?.user?.id
  );
  const dispatch = useDispatch();
  const handleCancel = () => {
    const confirm = window.confirm("Seguro que quieres cancelar la reserva ?");
    if (confirm) {
      axios.put(PUTSTATUS_URL, { id: id }).then(() => {
        axios
          .get(GETUSERBYID_URL + actualUserId)
          .then((response) => response.data.appointments)
          .then((appointments) => dispatch(setUserAppointments(appointments)));
      });
    }
  };

  function dateValidation(date) {
    let currentDate = new Date();
    let currentUTCDate = new Date(
      Date.UTC(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth(),
        currentDate.getUTCDate()
      )
    );
    let tomorrowUTCDate = new Date(
      Date.UTC(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth(),
        currentDate.getUTCDate() + 1
      )
    );
    //Verificar si el date ingresado es una instancia de Date
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    //Crea una variable con Date.UTC al input ingresado
    let inputUTCDate = new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
    );

    if (
      currentUTCDate.getTime() === inputUTCDate.getTime() ||
      tomorrowUTCDate.getTime() === inputUTCDate.getTime()
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={styles.cardContainer}>
      <span>{date}</span>
      <span> {time}</span>
      <span>{description}</span>
      <span className={dateValidation(date) ? styles.statusContainer : null}>
        <span className={status === "actives" ? styles.active : styles.cancel}>
          {" "}
          {status === "actives" ? "Activo  " : "Cancelado  "}
          <span className={styles.cancelIcon} onClick={handleCancel}>
            (❌)
          </span>
        </span>
      </span>
    </div>
  );
}
