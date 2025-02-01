import {Link} from  "react-router-dom"

const Navigator = () => {
    return (    
        <nav className="navibar"> 
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/about" className="nav-link">About</Link>
        </nav>
    )
}

export default Navigator