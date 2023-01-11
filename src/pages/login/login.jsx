import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { useNavigate } from "react-router-dom";

import "./login.css";

const LoginForm = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();

  function login() {
    setLoggedIn(true);
    history("/dashboard");
  }

  return (
    <div className="page">
      <div>
        <form onSubmit={handleSubmit} noValidate className="cover">
          <h1>Inicio de sesión</h1>
          <div>
            <div className="control">
              <input
                placeholder="Correo"
                autoComplete="off"
                className={`${errors.email && "is-danger"}`}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                required
              />
              {errors.email && <p className="is-danger">{errors.email}</p>}
            </div>
          </div>
          <div>
            <div className="control">
              <input
                placeholder="Contraseña"
                className={`${errors.password && "is-danger"}`}
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password || ""}
                required
              />
              {errors.password && (
                <p className="is-danger">{errors.password}</p>
              )}
            </div>
          </div>
          <button type="submit" className="login-btn">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
