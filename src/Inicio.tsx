import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import './Casa.css';

const Inicio: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const compartido ="no";

  const handleLogin = async () => {
    try {
      const response = await fetch('https://healthy-back.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Importante para manejar cookies

        body: JSON.stringify({ name: email, password: password }),
      });

      const result = await response.text(); 

      if (result.includes('assword incorr') || result.includes('r not')) {
        console.debug('Contraseña incorrecta');
        console.debug(result);
      } else {
        console.debug(result);

        // Guardar el resultado en localStorage
        localStorage.setItem('loginToken', result);
        localStorage.setItem('esCompartido', compartido); // Guarda el token con comillas en localStorage
        localStorage.setItem('nombreData', email);

        navigate('/estudiosnueva');
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
