import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Acerca de</h2>
      <p className={styles.paragraph}>
        Soy estudiante de Henry Academy, y este es mi proyecto integrador
        referente al módulo 3 del Bootcamp.
      </p>
      <p className={styles.paragraph}>
        Este proyecto comprende la implementación de un sistema de
        turnos/reservas orientado a una veterinaria, el cual le permite al
        cliente tener una interfaz de usuario, en donde podrá hacer lo
        siguiente:
      </p>
      <ol className={styles.list}>
        <li className={styles.listitem}>
          Crear un usuario en el sistema por medio de un formulario de registro.
        </li>
        <li className={styles.listitem}>
          Realizar solicitudes de reserva, en donde podrá escoger el día y la
          hora.
        </li>
        <li className={styles.listitem}>
          Revisar todas sus reservas por medio de una interfaz que apila la
          información y muestra su estado de "Activo" o "Cancelado"
        </li>
        <li className={styles.listitem}>
          Adicionalmente, podrá cancelar sus reservas en caso de no poder
          asistir. Tener en cuenta que no podrá cancelar reservas si la agenda
          está para el siguiente día.
        </li>
      </ol>
      <div className={styles.technologie}>
        <h3 className={styles.paragraph}>
          El proyecto fue desarrollado con las siguientes tecnologías:
        </h3>
        <ul className={styles.techlist}>
          <li className={styles.techitem}>
            <p className={styles.inline}>Backend:</p>
            <p className={styles.inline}>
              Node, Express, PostgreSQL, TypeScript, TypeORM
            </p>
          </li>
          <li className={styles.techitem}>
            <p className={styles.inline}>Frontend:</p>
            <p className={styles.inline}>React, Boostrap</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
