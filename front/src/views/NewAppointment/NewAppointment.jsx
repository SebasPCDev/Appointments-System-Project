import React, { useState } from "react";
import styles from "./NewAppointment.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
const POSTNEWAPPOINTMENT_URL = "http://localhost:3001/appointment/schedule";

export default function NewAppointment() {
  //**************************************************** */
  const actualUserId = useSelector(
    (state) => state.actualUser?.userData?.user?.id
  );

  const initialState = {
    date: "",
    time: "",
    description: "",
    userId: actualUserId,
  };

  let fechaActual = new Date().toISOString().split("T")[0];

  //* Estados locales *****************************

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({
    date: "",
    description: "",
  });

  //*Validación de días sábados *******************************

  const validateInputs = ({ date, description }) => {
    const errors = {};
    if (validateWeekends(date))
      errors.date = "No hay reservas Sábados y Domingos";
    if (!description) errors.description = "Ingresar una descripción";

    return errors;
  };

  const validateWeekends = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    let inputUTCDate = new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
    );
    const dayWeek = inputUTCDate.getUTCDay();

    return dayWeek === 6 || dayWeek === 0;
  };

  //* Manejadores de eventos ************************

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      date: user.date,
      time: user.time,
      description: user.description,
      userId: actualUserId,
    };
    axios
      .post(POSTNEWAPPOINTMENT_URL, newUser)
      .then(({ data }) => data)
      .then((appoDB) => {
        alert(`Nuevo turno creado para el ${appoDB.date} a las ${appoDB.time}`);
        setUser(initialState);
      })
      .catch((error) => alert(error.message));
    setUser(initialState);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateInputs({ ...user, [name]: value }));
  };

  //* Generador de horas cada 30 minutos con el horario establecido *****************
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date" className={styles.formLabel}>
          Fecha de la reserva
        </label>
        <input
          type="date"
          id="date"
          name="date"
          min={fechaActual}
          value={user.date}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
        {errors.date && (
          <span className={styles.errorMessage}>{errors.date}</span>
        )}

        <label htmlFor="time" className={styles.formLabel}>
          Hora de la reserva
        </label>
        <select
          id="time"
          name="time"
          value={user.time}
          onChange={handleChange}
          className={styles.formInput}
        >
          <option value="">Selecciona una hora</option>
          {generateTimeOptions().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="description" className={styles.formLabel}>
          Motivo de la reserva:
        </label>
        <select
          id="description"
          name="description"
          value={user.description}
          onChange={handleChange}
          className={styles.formInput}
        >
          <option value="">Seleccionar...</option>
          <option value="Consula de diagnóstico">
            🩺 Consulta de Diagnóstico
          </option>
          <option value="Laboratorios Clínicos">
            🧪 Laboratorios Clínicos
          </option>
          <option value="Nutrición">🥕 Nutrición</option>
          <option value="Servicio de baño y peluquería">
            ✂️ Servicio de baño y peluquería
          </option>
          <option value="Vacunación">💉 Vacunación</option>
        </select>
        {console.log(user)}
        {errors.description && (
          <span className={styles.errorMessage}>{errors.description}</span>
        )}
        <div className={styles.buttonContainer}>
          <button
            type="submit"
            disabled={Object.keys(errors).some((elements) => errors[elements])}
          >
            ¡Reservar!
          </button>
        </div>
      </form>
    </div>
  );
}
