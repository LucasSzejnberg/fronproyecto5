import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import './Casa.css';

const Registro: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.log('Las contraseñas no coinciden');
      return;
    }

    const response = await fetch('https://healthy-back.vercel.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail: email,
        nombre: nombre,
        password: password,
      }),
    });

    if (response.ok) {
      navigate('/estudios');
    } else {
      console.log('Error en el registro');
    }
  };

  return (
    <div className="registro">
      <div className="franja superior">
        <img src="logo.png" className="olvidatemas" alt="Logo" />
      </div>
      <div className="franja media">
        <img src="registrarwach.png" className="registro-imagen" alt="Registrar" />
        <input
          type="email"
          placeholder="Ingrese email"
          className="registro-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese nombre"
          className="registro-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese contraseña"
          className="registro-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="registro-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister} className="registro-boton">
          <img src="registbtn.png" className="boton-icono818" alt="Registrar" />
        </button>
      </div>
      <div className="franja inferior"></div>
    </div>
  );
};

export default Registro;
