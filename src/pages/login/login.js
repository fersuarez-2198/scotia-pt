import React, { useState } from "react";
import "./login.css";

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("popupFail");
    setTimeout(() => showPopup("hide"), 3000);
  };

  return (
    <div className="cover">
      <h1>Inicio de Sesión</h1>
      <input type="text" placeholder="Usuario"></input>
      <input type="password" placeholder="Contraseña"></input>

      <div className="login-btn" onClick={popup}>
        Iniciar Sesión
      </div>

      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>

      <div className={popupStyle}>
        <h3>Error</h3>
        <p>Usuario o contraseña no son válidos</p>
      </div>
    </div>
  );
};

export default LoginForm;
