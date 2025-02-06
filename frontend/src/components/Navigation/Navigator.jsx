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
          <li><Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
          <img src={menuLogo.home} alt="Home" className="nav-icon" />Home</Link></li>
          <li><Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>
          <img src={menuLogo.login} alt="Login" className="nav-icon" />Login</Link></li>
          <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
          <img src={menuLogo.about} alt="About" className="nav-icon" />About</Link></li>
          <li><Link to="/marca" className={`nav-link ${location.pathname === "/marca" ? "active" : ""}`}>
          <img src={menuLogo.marca} alt="Marca" className="nav-icon" />Marca</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default Navigator;
