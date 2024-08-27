import React from 'react';
import ReactDOM from 'react-dom';
import './Modal7.css';

interface Modal7Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal7: React.FC<Modal7Props> = ({ isOpen, onClose }) => {
  let token = localStorage.getItem('loginToken');
  if (token) {
    token = token.slice(1, -1);
  }

  if (!isOpen || !token) return null;

  const shareLink = `/#/estudiosnuevacompartir/${token}`;
  const abbreviatedLink = `${shareLink.slice(0, 20)}...`; // Abreviate the link

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("josephfiter.online"+shareLink);
  };

  return ReactDOM.createPortal(
    <div className="Modal7-overlay" onClick={handleOverlayClick}>
      <div className="Modal7-content">
        <div className="Modal7-header">
          <span className='textoNegroCompartir'>Compartir archivo</span>
        </div>
        <div className="Modal7-body">
          <a href={shareLink} target="_blank" rel="noopener noreferrer">
            {abbreviatedLink}
          </a>
          <img
            src="/copiarboton.png"  // Replace with the actual path to your image
            alt="Copiar enlace"
            className="Modal7-copyIcon"
            onClick={handleCopyLink}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal7;
