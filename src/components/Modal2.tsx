// Modal2.tsx
import React from 'react';
import './Modal2.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal2: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay55" onClick={handleOverlayClick}>
      <div className="modal-content55">
        {/* Aquí puedes colocar el contenido del modal */}
        <img src="/nuevohistorial.png" alt="Modal Image" className="modal-image32" />
        <input type="text" placeholder="Nombre" className="modal-input54" />
        <input type="date" className="modal-input" />
        <div className="modal-buttons">
          <button className="modal-button">Aceptar</button>
          <button className="modal-button" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
