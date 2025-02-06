import { Routes, Route } from "react-router-dom";
import Home from "../../components/Screens/Home";
import Login from "../../components/Screens/Login";
import About from "../../components/Screens/About";
import Marca from "../../components/Screens/Marca";

const Router = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/marca" element={<Marca />} />
      </Routes>
    </div>
  );
};

export default Router;