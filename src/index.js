import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginForm from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
