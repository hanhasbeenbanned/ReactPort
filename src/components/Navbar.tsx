import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="navbar">
            <h1>HannahlBryant</h1>
            <div className="links">
                <Link to="/" style= {{ color: location.pathname==='/'?'#fdad1a':'#dad3be'}}>About</Link>
                <Link to="/portfolio" style= {{ color: location.pathname==='/portfolio'?'#fdad1a':'#dad3be'}}>Portfolio</Link>
                <Link to="/resume" style= {{ color: location.pathname==='/resume'?'#fdad1a':'#dad3be'}}>Resume</Link>
                <Link to="/contact" style= {{ color: location.pathname==='/contact'?'#fdad1a':'#dad3be'}}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;