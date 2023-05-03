import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
