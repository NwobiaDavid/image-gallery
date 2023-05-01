import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/main.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
   {/* <Router>
<Routes>
</Routes>
<Route path='/imagepage' element={<ImagePage/>}/> */}
<div >
<App />
</div>

{/* </Router>  */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
