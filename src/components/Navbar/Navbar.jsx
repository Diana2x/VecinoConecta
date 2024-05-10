import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaRegUserCircle, FaBell, FaWindowClose } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => {
        console.log("Before click:", menuOpen); 
        setMenuOpen(!menuOpen);
        console.log("After click:", menuOpen); 
    };

    return (
        <nav className="navbar">
            <div className="logo-nav">
                < FaHome className="nav-icon" />
                <p> Los Robles</p>
            </div>
            {menuOpen ? (
                <FaWindowClose className="nav-toggle" onClick={toggleMenu}/>
                ) : (
                <CiMenuBurger className="nav-toggle" onClick={toggleMenu} />
            )}
            <ul className={`navbar-nav ${menuOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <a href="/" className="nav-link bell"> <FaBell className="nav-icon" /> </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link"> <FaMessage className="nav-icon" /> </a>
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
                    <a href="/perfil" className="nav-link"> <FaRegUserCircle className="nav-icon" /> </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;