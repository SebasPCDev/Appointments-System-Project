import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"; // Asegúrate de importar tus estilos CSS

export default function Landing() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BIENVENIDO A NUESTRO GESTOR DE TURNOS</h1>
      <h2 className={styles.subtitle}>
        Si es la primera vez que ingresas aquí... entonces:{" "}
      </h2>
      <Link to="/register" className={styles.link}>
        <span className={styles.button}>¡Registrate!</span>
      </Link>
      <h2 className={styles.subtitle}>Si ya tienes una cuenta... entonces:</h2>
      <Link to="/login" className={styles.link}>
        <span className={styles.button}>Ingresa</span>
      </Link>
    </div>
  );
}
