import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/userSlice";
const POSTLOGIN_URL = "http://localhost:3001/users/login";

export default function Login(props) {
  const initialState = {
    username: "",
    password: "",
  };

  const [errors, setErrors] = useState(initialState);
  const [user, setUser] = useState(initialState);

  const validateUser = ({ username, password }) => {
    const errors = {};
    if (!username) errors.username = "Ingresar username";
    if (!password) errors.password = "Ingresar password";
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUser({ ...user, [name]: value }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(POSTLOGIN_URL, user)
      .then((response) => response.data)
      .then((data) => {
        dispatch(setUserData(data));
        alert(`Bienvenido ${data.user.name}`);
        navigate("/home");
      })
      .catch((error) =>
        alert(`Acceso denegado:  ${error?.response?.data?.message}`)
      );
  };

  return (
    <div className={styles.formLoginContainer}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input
          required
          type="text"
          name="username"
          id="username"
          placeholder="Ingrese usuario"
          value={user.username}
          onChange={handleChange}
        />
        {errors.username && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
        <label htmlFor="password">Contraseña</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese contraseña"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}

        <button
          type="submit"
          disabled={Object.keys(user).some((e) => !user[e])}
        >
          Iniciar sesión
        </button>
        <NavLink to="/register">
          <button>Registrarse</button>
        </NavLink>
      </form>
    </div>
  );
}
