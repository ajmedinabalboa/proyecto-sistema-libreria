import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from "../../api/ApiLogin.js"; // Ajusta la ruta de importación
import libreriaLogo from "../../assets/tinywow_change_bg_photo_74242905.png";
const FormLogin = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario ya está autenticado, redirigir a /home
    if (sessionStorage.getItem("isAuthenticated") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    //setUserData(null);

    try {
      const data = await loginUsuario(email, contraseña);
      console.log("Datos recibidos de la API:", data); // Para depuración
      setUserData(data);
      if (data && data.nombre) {
        setIsAuthenticated(true); // Actualiza el estado global
        sessionStorage.setItem("isAuthenticated", "true"); // Persistencia con sessionStorage (si usas Solución 2)
        navigate("/home");
        
      } else {
        setError("Credenciales incorrectas.");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login-page">
<<<<<<< HEAD
       
      <div className="container">
      <div >
        <Logo /> 
      </div>
=======
  
  <h1 className="title">Librería</h1>
  <h2 className="subtitle">G2 React</h2>
  <div className="container">
        
>>>>>>> development
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="login-card">
          
            <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su email"
              required
            />
            </div>
            <div className="input-group">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          </div>
          
          <button className="login-button" type="submit">Iniciar Sesión</button>
        </form>
        {userData && userData.nombre ? (
          <div className="title-login">
            <p>Acceso permitido a, {userData.nombre}!</p>
            <p>Rol ID: {userData.rolId}</p>
          </div>
        ) : (
          userData && <p>No se pudo obtener la información del usuario.</p>
        )}
      </div>
      </div>
  );
};

export default FormLogin;
