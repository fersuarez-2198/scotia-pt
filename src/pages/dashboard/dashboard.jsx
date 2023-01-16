import React, { useState, useEffect } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const user = localStorage.getItem("userName");
  const [dataP, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
      });
  };

  return (
    <div className="grid-container">
      <header className="header">
        <input
          type="text"
          placeholder="Buscar..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="header__avatar">{user}</div>
      </header>

      <aside className="sidenav">
        <ul className="sidenav__list">
          <li className="sidenav__list-item">Usuarios</li>
        </ul>
      </aside>

      <main className="main">
        <div className="main-header">
          <div className="row">
            {dataP.map((item) => (
              <div className="column">
                <div className="card">
                  <img className="imageP" src={item.image} />
                  <h3 className="nameP">{item.name}</h3>
                  <p>Género: {item.gender}</p>
                  <p>Especie: {item.species}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__copyright">&copy; Fabián Rodríguez Suárez</div>
      </footer>
    </div>
  );
};

export default Dashboard;
