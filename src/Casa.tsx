import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Casa.css';

const Casa: React.FC = () => {
  const navigate = useNavigate();

  const handleRegistrarClick = () => {
    navigate('/registrar');
  };

  const handleIniciarSesionClick = () => {
    navigate('/iniciar-sesion');
  };

  return (
    <div className="container">
      <div className="franja amarilla"></div>
      <div className="franja gris">
        <img src="/path/to/image.png" alt="Imagen Central" className="imagen-central" />
      </div>
      <div className="franja negra">
        <button className="button" onClick={handleRegistrarClick}>
          <img src="/path/to/botonRegistrar.png" alt="Registrar" />
        </button>
        <button className="button" onClick={handleIniciarSesionClick}>
          <img src="/path/to/botonIniciarSesion.png" alt="Iniciar Sesión" />
        </button>
      </div>
    </div>
  );
};

export default Casa;
