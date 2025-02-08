import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import menuLogo from "../LogoMenus/menuLogo";

const Navigator = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <>
      {/* BOTÓN TOGGLE (Movido al sidebar para mejor diseño) */}
      <button 
        className="toggle-btn" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "❌" : "☰"}
      </button>

      {/* SIDEBAR */}
      <aside className={`sidebar ${isSidebarOpen ? "" : "hidden"}`}>
        <ul>
          <li><Link to="/home" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
          <img src={menuLogo.home} alt="Home" className="nav-icon" />Home</Link></li>
          <li><Link to="/material" className={`nav-link ${location.pathname === "/material" ? "active" : ""}`}>
          <img src={menuLogo.material} alt="Material" className="nav-icon" />Material</Link></li>
          <li><Link to="/marca" className={`nav-link ${location.pathname === "/marca" ? "active" : ""}`}>
          <img src={menuLogo.marca} alt="Marca" className="nav-icon" />Marca</Link></li>
          <li><Link to="/categoria" className={`nav-link ${location.pathname === "/categoria" ? "active" : ""}`}>
          <img src={menuLogo.categoria} alt="Categoria" className="nav-icon" />Categoria</Link></li>
          <li><Link to="/unidad" className={`nav-link ${location.pathname === "/unidad" ? "active" : ""}`}>
          <img src={menuLogo.unidad} alt="Unidad" className="nav-icon" />Unidad de Medida</Link></li>
          <li><Link to="/proveedor" className={`nav-link ${location.pathname === "/proveedor" ? "active" : ""}`}>
          <img src={menuLogo.proveedor} alt="Proveedor" className="nav-icon" />Proveedor</Link></li>
          <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
          <img src={menuLogo.about} alt="About" className="nav-icon" />About</Link></li>
          <li><Link to="/logout" className={`nav-link ${location.pathname === "/logout" ? "active" : ""}`}>
          <img src={menuLogo.logout} alt="Logout" className="nav-icon" />Logout</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default Navigator;
