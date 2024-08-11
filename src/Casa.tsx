import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Casa.css';

const Casa: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/registro');
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
        <button onClick={handleRegister}className="btn-transparent">
          <img src="regis.png" alt="Registrarse" className="button-icon61" />
          
        </button>
        <button onClick={handleLogin}className="btn-transparent">
          <img src="inic.png" alt="Iniciar Sesión" className="button-icon61" />
        
        </button>
      </div>
    </div>
  );
};

export default Casa;
