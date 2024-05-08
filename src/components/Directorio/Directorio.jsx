import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import './Directorio.css'
function Directorio() {
  return (
    <div className='directorio'>
      <Navbar/>
      <div className='directorio-contenido'>
        <h1>Lista de Contactos Vecino Conecta <BsFillTelephoneForwardFill /></h1>
        <p>Aquí puedes encontrar los contactos actuales de Vecino Conecta </p>
        <table>
            <thead>
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/210/300" alt="María Rodríguez" /></div>
                    </td>
                    <td>María</td>
                    <td>Rodríguez</td>
                    <td>555 345 6789</td>
                    <td>maria.rodriguez@example.com</td>
                    <td>Calle de los Robles #1</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/215/300" alt="Carlos Pérez" /></div>
                    </td>
                    <td>Carlos</td>
                    <td>Pérez</td>
                    <td>555 456 7890</td>
                    <td>carlos.perez@example.com</td>
                    <td>Calle del Bosque #2</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/220/300" alt="Laura Gómez" /></div>
                    </td>
                    <td>Laura</td>
                    <td>Gómez</td>
                    <td>555 567 8901</td>
                    <td>laura.gomez@example.com</td>
                    <td>Calle de los Ahuehuetes #3</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/225/300" alt="Javier Martínez" /></div>
                    </td>
                    <td>Javier</td>
                    <td>Martínez</td>
                    <td>555 678 9012</td>
                    <td>javier.martinez@example.com</td>
                    <td>Avenida de las Flores #4</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/230/300" alt="Ana López" /></div>
                    </td>
                    <td>Ana</td>
                    <td>López</td>
                    <td>555 789 0123</td>
                    <td>ana.lopez@example.com</td>
                    <td>Calle de la Montaña #5</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/235/300" alt="Ricardo Hernández" /></div>
                    </td>
                    <td>Ricardo</td>
                    <td>Hernández</td>
                    <td>555 890 1234</td>
                    <td>ricardo.hernandez@example.com</td>
                    <td>Calle del Sol #6</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/240/300" alt="Sofía García" /></div>
                    </td>
                    <td>Sofía</td>
                    <td>García</td>
                    <td>555 901 2345</td>
                    <td>sofia.garcia@example.com</td>
                    <td>Calle cipres #7</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/245/300" alt="Alejandro Fernández" /></div>
                    </td>
                    <td>Alejandro</td>
                    <td>Fernández</td>
                    <td>555 012 3456</td>
                    <td>alejandro.fernandez@example.com</td>
                    <td>Calle del Arroyo #8</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/250/300" alt="Gabriela Silva" /></div>
                    </td>
                    <td>Gabriela</td>
                    <td>Silva</td>
                    <td>555 123 4567</td>
                    <td>gabriela.silva@example.com</td>
                    <td>Avenida del Parque #9</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/255/300" alt="Fernando Castro" /></div>
                    </td>
                    <td>Fernando</td>
                    <td>Castro</td>
                    <td>555 234 5678</td>
                    <td>fernando.castro@example.com</td>
                    <td>Calle del Almendro #10</td>
                </tr>
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/210/300" alt="María Rodríguez" /></div>
                    </td>
                    <td>María</td>
                    <td>Rodríguez</td>
                    <td>555 345 6789</td>
                    <td>maria.rodriguez@example.com</td>
                    <td>Calle mangle #11</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/215/300" alt="Carlos Pérez" /></div>
                    </td>
                    <td>Carlos</td>
                    <td>Pérez</td>
                    <td>555 456 7890</td>
                    <td>carlos.perez@example.com</td>
                    <td>Calle de la Brisa #12</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/220/300" alt="Laura Gómez" /></div>
                    </td>
                    <td>Laura</td>
                    <td>Gómez</td>
                    <td>555 567 8901</td>
                    <td>laura.gomez@example.com</td>
                    <td>Calle del Pinar #13</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/225/300" alt="Javier Martínez" /></div>
                    </td>
                    <td>Javier</td>
                    <td>Martínez</td>
                    <td>555 678 9012</td>
                    <td>javier.martinez@example.com</td>
                    <td>Calle del Laurel #14</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/230/300" alt="Ana López" /></div>
                    </td>
                    <td>Ana</td>
                    <td>López</td>
                    <td>555 789 0123</td>
                    <td>ana.lopez@example.com</td>
                    <td>Calle del Valle #15</td>
                </tr>
                
                <tr>
                    <td>
                        <div className="pic"><img src="http://placekitten.com/g/235/300" alt="Ricardo Hernández" /></div>
                    </td>
                    <td>Ricardo</td>
                    <td>Hernández</td>
                    <td>555 890 1234</td>
                    <td>ricardo.hernandez@example.com</td>
                    <td>Avenida del Parque #16</td>
                </tr>
                
            </thead>
        </table>
      </div>
      <Footer/>
    </div>
  )
}

export default Directorio