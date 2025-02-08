import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormLogin from "../src/components/Forms/FomLogin.jsx";
import FormLogout from "../src/components/Forms/FormLogout.jsx";
import App from "./App";

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Verifica si hay una sesión iniciada en sessionStorage
    const loggedIn = sessionStorage.getItem("isAuthenticated") ;
    setIsAuthenticated(loggedIn === "true");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Si el usuario no está autenticado, mostrar FormLogin */}
        <Route path="/" element={!isAuthenticated ? <FormLogin setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/home" />} />
        {/* Cuando el usuario ya esté autenticado, cargar la aplicación */}
        <Route path="/*" element={isAuthenticated ? <App /> : <Navigate to="/" />} />
        {/* ✅ Ruta para `FormLogout`, que cierra sesión automáticamente */}
        <Route path="/logout" element={<FormLogout />} />
        
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);











//import React from "react";
//import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
//import App from "./App";

//ReactDOM.createRoot(document.getElementById("root")).render(
 // <React.StrictMode>
  //  <BrowserRouter> 
    //
   //   <App />
 //   </BrowserRouter>
 // </React.StrictMode>
//);