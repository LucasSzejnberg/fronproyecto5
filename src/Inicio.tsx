// Inicio.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import './Casa.css';
import { useGlobalContext } from './GlobalContext';

const Inicio: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setResult } = useGlobalContext(); // Obtener el setter del contexto global

  const handleLogin = async () => {
    try {
      const response = await fetch('https://healthy-back.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: email, password: password }),
      });

      const result = await response.text(); 

      if (result.includes('assword incorr') || result.includes('r not')) {
        console.debug('Contraseña incorrecta');
        console.debug(result);
      } else {
        console.debug(result);

        // Guardar result en la variable global
        setResult(result);
        
        navigate('/estudios');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="registro">
      <div className="franja superior">
        <img src="logo.png" className="olvidatemas" alt="Logo" />
      </div>
      <div className="franja media">
        <img src="INGRESAR.png" className="registro-imagen" alt="Ingresar" />
        <input
          type="email"
          placeholder="Ingrese email"
          className="registro-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese contraseña"
          className="registro-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="registro-boton">
          <img src="ingbtn12.png" className="boton-icono818" alt="Ingresar" />
        </button>
      </div>
      <div className="franja inferior"></div>
    </div>
  );
};

export default Inicio;
