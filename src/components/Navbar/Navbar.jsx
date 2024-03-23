import React from 'react';
import './Navbar.css';
import { FaHome, FaUserCheck, FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-nav">
                < FaHome className="nav-icon" />
                <p> Los Robles</p>
                </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/perfil" className="nav-link bell"> <FaBell className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/home" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="/foro" className="nav-link">Foro</a>
                </li>
                <li className="nav-item">
                    <a href="/galeria" className="nav-link">Galeria</a>
                </li>
                <li className="nav-item">
                    <a href="/directorio" className="nav-link">Directorio</a>
                </li>
                <li className="nav-item">
                    <a href="/perfil" className="nav-link"> <FaMessage className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/perfil" className="nav-link"> <FaUserCheck className="nav-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;