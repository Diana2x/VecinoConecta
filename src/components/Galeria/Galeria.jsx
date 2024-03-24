import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Galeria.css';
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
          <img src="public/assets/vecino1.jpeg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino2.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino3.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino4.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino5.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino6.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino7.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino8.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="public/assets/vecino9.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Galeria