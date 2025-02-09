
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //  Borra la sesión automáticamente al cargar el componente
    sessionStorage.removeItem("isAuthenticated");

    //  Redirige al usuario al login
    navigate("/", { replace: true });

    // Forzar una recarga de la página después del logout
    setTimeout(() => {
      window.location.reload();
    }, 300);

  }, [navigate]);

  return null; // No se renderiza nada
};

export default FormLogout;


