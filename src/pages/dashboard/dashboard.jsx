import React, { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const user = localStorage.getItem("userName");

  return (
    <div class="grid-container">
      <header class="header">
        <div class="header__search">Prueba Técnica</div>
        <div class="header__avatar">{user}</div>
      </header>

      <aside class="sidenav">
        <div class="sidenav__close-icon">
          <i class="fas fa-times sidenav__brand-close"></i>
        </div>
        <ul class="sidenav__list">
          <li class="sidenav__list-item">Usuarios</li>
        </ul>
      </aside>

      <main class="main">
        <div class="main-header">
          <div class="main-header__heading">Hello User</div>
        </div>
      </main>

      <footer class="footer">
        <div class="footer__copyright">&copy; Fabián Rodríguez Suárez</div>
      </footer>
    </div>
  );
};

export default Dashboard;
