import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import Foro from './components/Foro/Foro';
import Galeria from './components/Galeria/Galeria';
import Directorio from './components/Directorio/Directorio';
import Perfil from './components/Perfil/Perfil';

import './App.css';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
      <div className='content'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="foro" element={<Foro />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="directorio" element={<Directorio />} />
          <Route path="perfil" element={<Perfil />} />
        </Routes>
      </div>
  );
}

export default App;


