import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";
const POSTUSER_URL = "http://localhost:3001/users/register";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Register(props) {
  const [validated, setValidated] = useState(false);

  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmpassword: "",
  };

  const validateUser = ({
    name,
    email,
    birthdate,
    nDni,
    username,
    password,
    confirmpassword,
  }) => {
    const errors = {};
    if (!name) errors.name = "Ingresar nombre";
    if (!email) errors.email = "Ingresar email";
    if (!birthdate) errors.birthdate = "Ingresar fecha de nacimiento";
    if (!nDni) errors.nDni = "Ingresar documento dni";
    if (!username) errors.username = "Ingresar usuario";
    if (!password) errors.password = "Ingresar contraseña";
    if (password != confirmpassword)
      errors.confirmpassword = "Las contraseña deben ser iguales";

    return errors;
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleSubmit = (event) => {
    console.log(event.currentTarget.checkValidity());
    event.preventDefault();
    const newUser = {
      name: user.name,
      email: user.email,
      birthdate: user.email,
      nDni: user.nDni,
      username: user.username,
      password: user.password,
    };

    axios
      .post(POSTUSER_URL, newUser)
      .then(({ data }) => data)
      .then((userInDB) => {
        alert(`Has creado el usuario ${userInDB.name} `);
        setUser(initialState);
      })
      .catch((error) => alert(error.message));
    setUser(initialState);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUser({ ...user, [name]: value }));
  };
  const handleReset = (event) => {
    event.preventDefault();
    setUser(initialState);
  };

  const formData = [
    {
      label: "Nombre",
      name: "name",
      type: "text",
      placeholder: "Ingrese nombre...",
      invalidText: "Por favor, ingrese un nombre.",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Ingrese email...",
      invalidText: "Por favor, ingrese un email.",
    },
    {
      label: "Fecha de nacimiento",
      name: "birthdate",
      type: "date",
      placeholder: "Ingrese fecha de nacimiento...",
      invalidText: "Por favor, ingrese una fecha de nacimiento.",
    },
    {
      label: "Numero DNI",
      name: "nDni",
      type: "text",
      placeholder: "Ingrese numero de documento...",
      invalidText: "Por favor, ingrese un número de DNI.",
    },
    {
      label: "Nombre de usuario",
      name: "username",
      type: "text",
      placeholder: "Ingrese nombre de usuario...",
      invalidText: "Por favor, ingrese un nombre de usuario.",
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      placeholder: "Ingrese contraseña...",
      invalidText: "Por favor, ingrese una contraseña.",
    },
    {
      label: "Verificar Contraseña",
      name: "confirmpassword",
      type: "password",
      placeholder: "Ingrese nuevamente contraseña...",
      invalidText: "Las contraseñas no son iguales.",
    },
  ];
  let fechaHoy = new Date();
  let fechaLimite = new Date(
    fechaHoy.getFullYear() - 18,
    fechaHoy.getMonth(),
    fechaHoy.getDate()
  );

  let fechaLimiteISO = fechaLimite.toISOString().split("T")[0];

  const handleSubmitNew = (event) => {
    console.log("entro");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    /* validatePassword(); */
    setValidated(true);
  };

  const validatePassword = () => {
    if (user.password !== user.confirmpassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    return;
  };

  return (
    <div className={styles.formRegisterContainer}>
      <h2 className="fw-bold">Registro</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Col className="mb-3">
          {formData.map(({ label, name, type, placeholder, invalidText }) => {
            return (
              <Form.Group
                as={Row}
                md="4"
                controlId={name}
                key={name}
                className="mb-3 "
              >
                <Form.Label className="d-flex w-50 fw-bold p-0">
                  {label}
                </Form.Label>
                {type === "date" ? (
                  <Form.Control
                    required
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                    name={name}
                    value={user[name]}
                    max={fechaLimiteISO}
                  />
                ) : (
                  <Form.Control
                    required
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={user[name]}
                    onChange={handleChange}
                  />
                )}
                <Form.Control.Feedback className="mb-1 p-0" type="invalid">
                  {invalidText}
                </Form.Control.Feedback>
              </Form.Group>
            );
          })}
        </Col>
        <Button type="submit" className="mb-3">
          Enviar
        </Button>
        <Button onClick={handleReset}>Borrar</Button>
      </Form>
    </div>
  );
}
