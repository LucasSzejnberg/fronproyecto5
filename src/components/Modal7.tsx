import React from 'react';
import ReactDOM from 'react-dom';
import './Modal7.css';

interface Modal7Props {
  isOpen: boolean;
  onClose: () => void;
  shareLink: string; // El link que se va a pasar por variable
}

const Modal7: React.FC<Modal7Props> = ({ isOpen, onClose, shareLink }) => {
  const token = localStorage.getItem('loginToken'); // Obtén el token del localStorage

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Usamos un portal para que el modal se inserte en el body
  return ReactDOM.createPortal(
    <div className="Modal7-overlay" onClick={handleOverlayClick}>
      <div className="Modal7-content">
        <h2>Link para compartir:</h2>
        <a href={shareLink} target="_blank" rel="noopener noreferrer">
          {shareLink}
        </a>
        <button className="Modal7-closeButton" onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    document.body // Aquí indicamos que el modal debe insertarse en el body
  );
};

export default Modal7;
