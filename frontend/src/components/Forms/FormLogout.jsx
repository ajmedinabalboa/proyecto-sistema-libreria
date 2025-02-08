
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Borra la sesión automáticamente al cargar el componente
    sessionStorage.removeItem("isAuthenticated");

    // ✅ Redirige al usuario al login
    navigate("/", { replace: true });

    // ✅ Intenta cerrar la ventana (solo funciona en algunas circunstancias)
    // ✅ Forzar una recarga de la página después del logout
    setTimeout(() => {
      window.location.reload();
    }, 300);
    
  }, [navigate]);

  return null; // No se renderiza nada
};

export default FormLogout;





//const FormLogout = () => {

//const handleLogout = () => {
//    sessionStorage.removeItem("isAuthenticated"); // Borra la sesión
//   
//  };

 // return (
 //   <button onClick={handleLogout}>Cerrar Sesión</button>
 // );
//};
//export default FormLogout;