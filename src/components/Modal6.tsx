import React, { useState } from 'react';
import axios from 'axios';
import './Modal6.css';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
const navigate = useNavigate(); // Hook para navegar

interface Modal6Props {
  onClose: () => void;
}

const Modal6: React.FC<Modal6Props> = ({ onClose }) => {
  const [fecha, setFecha] = useState('');
  const [medico, setMedico] = useState('');
  const [hora, setHora] = useState('');
  const token = localStorage.getItem('loginToken'); // Obtén el token del localStorage

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://healthy-back.vercel.app/turnos',
        {
          fecha,
          medico,
          hora,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Incluye el token en los headers
          },
        }
      );
      console.log('Datos enviados:', response.data);
      console.log('Datos enviados:', response);

      onClose(); // Cerrar el modal después de enviar los datos
    } catch (error) {
      
      if (error instanceof Error) {
        let errorposta=error.message;
        if (errorposta.includes("403")) {
          console.log("El string contiene el número 403");
  
  
          try {
            console.log("siguiente");
            // Aquí no necesitas pasar el token, ya que el navegador enviará las cookies automáticamente
            const response = await fetch(`https://healthy-back.vercel.app/refreshToken`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include', // Esto permite que las cookies se incluyan en la solicitud
            });
        
           
        
            const data = await response.json();
            console.log(data);
            localStorage.setItem('loginToken', data);
            //window.location.reload();
            await handleSubmit;
  
          } catch (err) {
            console.error('Error al hacer la solicitud:', err);
            navigate('/iniciar');
  
          } 
  
  
  
        }
        console.error("Error capturado:", error.message);
      } else {
        console.error("Error desconocido:", error);
      }

      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="modal6-overlay" onClick={onClose}>
      <div className="modal6-container" onClick={(e) => e.stopPropagation()}>
        {/* Imagen agregada arriba de todo */}
        <img src="NUEVO TURNO.png" alt="Imagen descriptiva" className="modal6-image" />

        <form onSubmit={handleSubmit}>
          <input
            className="input010101"
            type="date"
            placeholder="Fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <input
            className="input0101011"
            type="time"
            placeholder="Hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          <input
            className="input0101011"
            type="text"
            placeholder="Médico"
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
          />
          <div className="modal6-buttons">
            {/* Botón Enviar con imagen */}
            <button type="submit" className="button-with-image">
              <img src="/BotonCrear.png" alt="Enviar" />
            </button>
            {/* Botón Cancelar con imagen */}
            <button type="button" className="button-with-image" onClick={onClose}>
              <img src="/BotonCancelar.png" alt="Cancelar" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal6;
