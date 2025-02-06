import {Link} from  "react-router-dom"

const Navigator = () => {
    return (    
        <nav className="navibar"> 
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/marca" className="nav-link">Marcas</Link>
            <Link to="/categoria" className="nav-link">Categorias</Link>
            <Link to="/about" className="nav-link">About</Link>
        </nav>
    )
}

export default Navigator