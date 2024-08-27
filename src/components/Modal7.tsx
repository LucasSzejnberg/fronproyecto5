import React from 'react';
import ReactDOM from 'react-dom';
import './Modal7.css';

interface Modal7Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal7: React.FC<Modal7Props> = ({ isOpen, onClose }) => {
  // Obtén el token del localStorage
  let token = localStorage.getItem('loginToken');

  // Si el token existe, le quitamos el primer y último carácter
  if (token) {
    token = token.slice(1, -1);
  }

  if (!isOpen || !token) return null;

  const shareLink = `/#/estudiosnuevacompartir/${token}`; // Genera el enlace personalizado con el token modificado

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
    document.body
  );
};

export default Modal7;
