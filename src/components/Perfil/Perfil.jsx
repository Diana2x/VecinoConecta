import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Perfil.css';

export class Perfil extends Component {
  render() {
    return (
      <div className='perfil'>
        <Navbar />
        <div className='perfil-container'>  
          <div className='perfil-header'>
            <h1>Account Overview</h1>
          </div>
          <div className='perfil-content'>
            <div className='perfil-info'>
              <div className='avatar-container'>
                <img src="../assets/javier.jpg" alt="Javier Martínez" className='avatar' />
                <div className='options'>
                  <p>Pagos</p>
                  <p>Seguridad</p>
                  <p className='selected'>Configuración</p>
                  <p>Eventos</p>
                </div>
              </div>
              <div className='user-info'>
                <h2>Javier Martínez</h2>
                <p className='selected'>Manager de la comunidad los robles!</p>
                <p>Teléfono: 555 678 9012</p>
                <p>Email: javier.martinez@example.com</p>
                <p>Dirección: Avenida de las Flores #4</p>
                <div className='button-container'>
                  <button>Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Perfil