import React from 'react';
import './Modal5.css';

interface Modal5Props {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal5: React.FC<Modal5Props> = ({ onClose, children }) => {
  return (
    <div className="modal5-overlay" onClick={onClose}>
      <div className="modal5-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal5;
