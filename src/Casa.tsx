import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Casa.css';

const Casa: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/registrarse');
  };

  const handleLogin = () => {
    navigate('/iniciar');
  };

  return (
    <div className="casa">
      <div className="franja superior">
        {/* Contenido de la franja superior */}
      </div>
      <div className="franja media">
        <img src="logo.png" alt="Descripción de la imagen" />
      </div>
      <div className="franja inferior">
        <button onClick={handleRegister}>Registrarse</button>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default Casa;
