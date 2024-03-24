import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Galeria.css';
import imagenComunidad from '/assets/comunidad.jpeg';
import imageJunta from '/assets/junta.jpg';
import imagesNoticias from '/assets/noticias.jpg';
import imagesChat from '/assets/chat.jpg';
import Footer from '../Footer/Footer';

function Galeria() {
  return (
    <div className='galeria'>
      <Navbar />
      <h1 className='heading'>Momentos Los Robles</h1>
      <div className="galeria-content contenedor">

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Galeria