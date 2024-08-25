import React from 'react';
import './Modal7.css'; // Asegúrate de crear y añadir estilos en este archivo

interface Modal6Props {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal6: React.FC<Modal6Props> = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-contentabc" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal6;
