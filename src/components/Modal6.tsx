import React, { useState } from 'react';
import axios from 'axios';
import './Modal6.css';

interface Modal6Props {
  onClose: () => void;
}

const Modal6: React.FC<Modal6Props> = ({ onClose }) => {
  const [fecha, setFecha] = useState('');
  const [medico, setMedico] = useState('');
  const [paciente, setPaciente] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://healthy-back.vercel.app/turnos', {
        fecha,
        medico,
        paciente,
        hora
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
        <form onSubmit={handleSubmit}>
          <label>
            Fecha:
            <input 
              type="date" 
              value={fecha} 
              onChange={(e) => setFecha(e.target.value)} 
            />
          </label>
          <label>
            Médico:
            <input 
              type="text" 
              value={medico} 
              onChange={(e) => setMedico(e.target.value)} 
            />
          </label>
          <label>
            Paciente:
            <input 
              type="text" 
              value={paciente} 
              onChange={(e) => setPaciente(e.target.value)} 
            />
          </label>
          <label>
            Hora:
            <input 
              type="time" 
              value={hora} 
              onChange={(e) => setHora(e.target.value)} 
            />
          </label>
          <div className="modal6-buttons">
            <button type="submit">Enviar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal6;
