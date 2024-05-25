import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src="/ImgNuevoEstudio.png" alt="Photo" className="modal-photo" />
        </div>
        <div className="modal-body">
          <input type="text" placeholder="Nombre..." className="modal-input" />
        </div>
        <div className="modal-footer">
          <button className="modal-button button1">
            <img src="/BotonArchivo.png" alt="Button 1" className="modal-button-image" />
          </button>
          <button className="modal-button button2">
            <img src="/BotonCancelar.png" alt="Button 2" className="modal-button-image" />
          </button>
          <button className="modal-button button3">
            <img src="/BotonCrear.png" alt="Button 3" className="modal-button-image" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
