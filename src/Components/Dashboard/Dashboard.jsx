import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import imagenEvento from '../Assets/evento.jpeg';
import imagenPago from '../Assets/paga.jpeg';
import imagenCalendario from '../Assets/calendario.jpeg';
import imagenComunidad from '../Assets/comunidad.jpeg';

const Dashboard = () => {
    return (
        <div className='dash'>
            <Navbar />
            <div className='dashboard-content'>
                <h2>¡Bienvenido a VecinoConecta!</h2>
                <p>Gestiona eventos, pagos y calendarios aquí.</p>
                <img src={imagenComunidad} alt="Imagen de comunidad" />
                <p>¡Descubre todas las funciones que VecinoConecta tiene para ofrecerte!</p>
                <p>Registra tus eventos comunitarios, realiza pagos de servicios locales y mantente al tanto de todas las actividades en tu vecindario.</p>
                <h3>¿Qué puedes hacer en VecinoConecta?</h3>
                <ul>
                    <li>Crear y compartir eventos comunitarios.</li>
                    <li>Pagar fácilmente tus facturas de servicios locales.</li>
                    <li>Consultar el calendario de eventos y actividades.</li>
                    <li>Conectar con otros miembros de la comunidad.</li>
                    <li>Recibir noticias y actualizaciones importantes.</li>
                </ul>
                <img src={imagenEvento} alt="Imagen de evento" />
                <p>Registra y consulta eventos próximos en nuestro calendario comunitario.</p>
                <img src={imagenPago} alt="Imagen de pago" />
                <p>Paga tus facturas de servicios locales de manera rápida y segura desde la comodidad de tu hogar.</p>
                <img src={imagenCalendario} alt="Imagen de calendario" />
                <p>Consulta nuestro calendario para mantenerte al tanto de todas las actividades y eventos en tu vecindario.</p>
                <p>¡Esperamos que disfrutes de tu experiencia en VecinoConecta!</p>
            </div>
        </div>


    );
};

export default Dashboard;
