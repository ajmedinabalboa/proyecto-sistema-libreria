import { Routes, Route } from "react-router-dom";
import Home from "../../components/Screens/Home";
import Login from "../../components/Screens/Login";
import About from "../../components/Screens/About";
import Marca from "../../components/Screens/Marca";
import Categoria from "../../components/Screens/Categoria";
import Unidad from "../../components/Screens/Unidad";
import Material from "../../components/Screens/Material";
import Proveedor from "../../components/Screens/Proveedor";
const Router = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/material" element={<Material />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/unidad" element={<Unidad />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Router;