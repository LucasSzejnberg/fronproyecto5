// Modal2.tsx
import React, { useState } from 'react';
import './Modal2.css';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const navigate = useNavigate(); // Hook para navegar

const Modal2: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');
  const token = localStorage.getItem('loginToken');

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    const data = {
      punto: mensaje,
      date: fecha,
      who: nombre,
      user: 1,
      estudios: 130
    };

    try {
      console.log("data:", data);
      const response = await fetch('https://healthy-back.vercel.app/historial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Añade el token en los headers
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Datos enviados con éxito');
        window.location.reload(); // Recargar la página después de enviar los datos con éxito
      } else {
        console.error(`Error al enviar los datos: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
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
    }
  };

  return (
    <div className="modal-overlay55" onClick={handleOverlayClick}>
      <div className="modal-content55">
        <div className="porfavorfunciona">
          <img src="/nuevohistorial.png" alt="Modal Image" className="modal-image32" />
          <input
            type="text"
            placeholder="Nombre"
            className="modal-input54"
            value={nombre}
            maxLength={20}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="date"
            className="modal-input999"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <textarea
            placeholder="Mensaje"
            className="modal-textarea1"
            value={mensaje}
            maxLength={500}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <div className="modal-buttons38">
          <button className="modal-button101" onClick={onClose}>
            <img src="/BotonCancelar.png" alt="Cancelar" className="button-icon" />
          </button>
          <button className="modal-button102" onClick={handleSubmit}>
            <img src="/BotonCrear.png" alt="Aceptar" className="button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
