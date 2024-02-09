import React from 'react';
import './Navbar.css';
import { FaHome, FaUserCheck } from "react-icons/fa";



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-nav">< FaHome className="nav-icon" />Los Robles</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/dashboard" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/avisos" className="nav-link">Avisos</a>
                </li>
                <li className="nav-item">
                    <a href="/eventos" className="nav-link">Eventos</a>
                </li>
                <li className="nav-item">
                    <a href="/contacto" className="nav-link">Contacto</a>
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

