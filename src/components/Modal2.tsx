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
        <div className="porfavorfunciona">
        <img src="/nuevohistorial.png" alt="Modal Image" className="modal-image32" />
        <input type="text" placeholder="Nombre" className="modal-input54" />
        <input type="date" className="modal-input999" />
        </div>
        <div className="modal-buttons">
        <button className="modal-button102">
            <img src="BotonCrear.png" alt="Aceptar" className="button-icon" />
          </button>
          <button className="modal-button101" onClick={onClose}>
            <img src="/BotonCancelar.png" alt="Cancelar" className="button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
