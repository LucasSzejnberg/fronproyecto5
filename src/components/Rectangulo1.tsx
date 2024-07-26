import React, { useState } from 'react';
import './Rectangulo1.css';
import Modal5 from './Modal5';

interface RectanguloProps {
  fecha: string;
  medico: string;
  paciente: string;
  hora: string;
}

const Rectangulo1: React.FC<RectanguloProps> = ({ fecha, medico, paciente, hora }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="rectangulo6666">
        <span className="fecha44">{fecha}</span><span className="fecha445">{" - "}</span><span className="fecha445">{medico}</span>
        <button onClick={handleShowModal}>Detalle</button>
      </div>
      {showModal && (
        <Modal5 onClose={handleCloseModal}>
          <div className="modal-content">
            <p>Médico: {medico}</p>
            <p>Paciente: {paciente}</p>
            <p>Fecha: {fecha}</p>
            <p>Hora: {hora}</p>
          </div>
        </Modal5>
      )}
    </>
  );
};

export default Rectangulo1;
