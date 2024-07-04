// Modal2.tsx
import React, { useState } from 'react';
import './Modal2.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal2: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');

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
          'Content-Type': 'application/json'
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
