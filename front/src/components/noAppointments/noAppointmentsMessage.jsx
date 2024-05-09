import React from "react";
import styles from "./noAppointmentsMessage.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NoAppointmentsMessage() {
  const login = useSelector((state) => state.actualUser.userData.login);

  const handleClick = () => {
    if (login) {
      return "/newappo";
    } else {
      return alert("Debe iniciar sesión para hacer una reserva!! ");
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>No tiene reservas agendadas 😢😢</h2>
      <h3 className={styles.subtitle}>👀 ¿Deseas agendar una? 👀</h3>
      <NavLink to={handleClick()}>
        <button className={styles.button} onClick={handleClick}>
          {" "}
          ¡Reserva aquí!
        </button>
      </NavLink>
    </div>
  );
}
