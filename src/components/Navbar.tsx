import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="navbar">
            <h1>React Portfolio</h1>
            <div className="links">
                <Link to="/" style= {{ color: location.pathname==='/'?'green':'black'}}>About</Link>
                <Link to="/portfolio" style= {{ color: location.pathname==='/portfolio'?'green':'black'}}>Portfolio</Link>
                <Link to="/resume" style= {{ color: location.pathname==='/resume'?'green':'black'}}>Resume</Link>
                <Link to="/contact" style= {{ color: location.pathname==='/contact'?'green':'black'}}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;