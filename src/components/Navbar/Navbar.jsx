import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaRegUserCircle, FaBell, FaWindowClose } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";

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
                    <NavLink to="/home" className="nav-link bell"> <FaBell className="nav-icon" /> </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/home" className="nav-link"> <FaMessage className="nav-icon" /> </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/home" className="nav-link">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/foro" className="nav-link">Foro</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/galeria" className="nav-link">Galeria</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/directorio" className="nav-link">Directorio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/perfil" className="nav-link"> <FaRegUserCircle className="nav-icon" /> </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;