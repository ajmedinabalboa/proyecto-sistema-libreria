
import { Routes, Route } from 'react-router-dom'
import Home from '../Screens/Home.jsx'
import About from '../Screens/About.jsx'
import Login from '../Screens/Login.jsx'
const Router = () => {
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
        </Routes>
    )
}

export default Router