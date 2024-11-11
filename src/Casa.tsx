import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Casa.css';

const Casa: React.FC = () => {
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [title, setTitle] = useState("El camino hacia la Salud empieza aqui");
  const [text, setText] = useState("Con Healthy podras monitorear tus estudios y tener a mano todas las novedades acerca de ellos");

  const handleRegister = () => {
    navigate('/registro');
  };

  const handleLogin = () => {
    navigate('/iniciar');
  };

  const handleButtonClick = (buttonIndex: number) => {
    if (selectedButton === buttonIndex) {
      // Si el botón ya está seleccionado, vuelve al estado inicial
      setSelectedButton(null);
      setTitle("El camino hacia la Salud empieza aqui");
      setText("Con Healthy podras monitorear tus estudios y tener a mano todas las novedades acerca de ellos");
    } else {
      // Cambia al botón seleccionado y actualiza el contenido
      setSelectedButton(buttonIndex);
      if (buttonIndex === 1) {
        setTitle("Healthy ");
        setText("Somos una pagina en donde podras organizar tu vida medica, desde el orden de todos tus estudios realizados, hasta una organizacion y notificacion de tus proximos turnos.  Ademas todo esto puede ser compartido con tu propio medico.");
      } else if (buttonIndex === 2) {
        setTitle("Quienes Somos");
        setText("Somos 5 estudiantes de la escuela ORT, que realizaron un proyecto escolar enfocado a aportar soluciones a problemas comunes como el desorden en la vida medica de las personas.");
      }
    }
  };

  return (
    <div className="casa">
      <div className="franja superior">
        {/* Contenido de la franja superior */}
        <img src="logo.png" className="holawop" alt="Descripción de la imagen" />
        <button onClick={handleRegister} className="btn-transparent91218">
          <img src="regisnuevo.png" alt="Registrarse" className="button-icon61" />
        </button>
        <button onClick={handleLogin} className="btn-transparent">
          <img src="inicionuevo.png" alt="Iniciar Sesión" className="button-icon61" />
        </button>
      </div>
      <div className="franja media">
        {/* Título y texto dinámicos */}
        <div className='jusdermas'>
        <h1 className='bolt'>{title}</h1>
        <p>{text}</p>
        </div>
      </div>
      <div className="franja inferior">
        {/* Botones dinámicos */}
        <div className='justificader'>
        <button
          className='a123321123'
          onClick={() => handleButtonClick(1)}
        >
          <img
            src={selectedButton === 1 ? "noqiensoy2.png" : "noqiensoy.png"}
            alt="Botón 1"
            className='a1233211231'

          />
        </button>
        <button
          className='a123321123'
          onClick={() => handleButtonClick(2)}
        >
          <img
            src={selectedButton === 2 ? "qiensoy2.png" : "qiensoy.png"}
            alt="Botón 2"
            className='a1233211231'

          />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Casa;
