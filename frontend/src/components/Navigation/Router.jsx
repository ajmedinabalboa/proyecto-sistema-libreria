
import { Routes, Route } from 'react-router-dom'
import Home from '../Screens/Home.jsx'
import About from '../Screens/About.jsx'
import Login from '../Screens/Login.jsx'
import Marca from '../Screens/Marca.jsx'
import Categoria from '../Screens/Categoria.jsx'
const Router = () => {
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="marca" element={<Marca />} />
            <Route path="categoria" element={<Categoria/>} />
            <Route path="about" element={<About />} />
        </Routes>
    )
}

export default Router