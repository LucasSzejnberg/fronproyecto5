import React, { useState } from 'react';
import axios from 'axios';
import './Modal6.css';

interface Modal6Props {
  onClose: () => void;
}

const Modal6: React.FC<Modal6Props> = ({ onClose }) => {
  const [fecha, setFecha] = useState('');
  const [medico, setMedico] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://healthy-back.vercel.app/turnos', {
        fecha,
        medico,
        hora, 
      });
      console.log('Datos enviados:', response.data);
      onClose(); // Cerrar el modal después de enviar los datos
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="modal6-overlay" onClick={onClose}>
      <div className="modal6-container" onClick={(e) => e.stopPropagation()}>
        {/* Imagen agregada arriba de todo */}
        <img src="NUEVO TURNO.png" alt="Imagen descriptiva" className="modal6-image" />

        <form onSubmit={handleSubmit}>
          <input className="input010101"
            type="date" 
            placeholder="Fecha"
            value={fecha} 
            onChange={(e) => setFecha(e.target.value)} 
          />
          <input className="input0101011"
            type="time" 
            placeholder="Hora"
            value={hora} 
            onChange={(e) => setHora(e.target.value)} 
          />
          <input className="input0101011"
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
