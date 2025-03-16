import React from "react";
import {Link} from "react-router-dom";
import logo from "./Logo.png";

interface NavbarProps {
    onLogout: () => void;
    userName: string;
}

const Navbar:React.FC<NavbarProps> = ({onLogout, userName}) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="nogo"/>
                <span className="username">{userName}</span>
            </div>

            <ul className="navbar-menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre nosotros</Link></li>
                <li><Link to="/gallery">Galeria</Link></li>
                <li><button onClick={onLogout} className="logout-button">cerrar sesion</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;