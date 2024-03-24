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
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>

        <div className="galeria-imagen">
          <img src="/assets/vecino.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Galeria