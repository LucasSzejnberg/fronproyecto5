// HistorialDetalles.tsx
import React from 'react';
import './HistorialDetalles.css'; // Asegúrate de crear este archivo CSS para el estilo del modal

interface HistorialDetallesProps {
  isOpen: boolean;
  onClose: () => void;
  nombre: string;
  fecha: string;
  punto_historialmedico: string;
}

const HistorialDetalles: React.FC<HistorialDetallesProps> = ({ isOpen, onClose, nombre, fecha, punto_historialmedico }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="historial-detalles-overlay" onClick={handleOverlayClick}>
      <div className="historial-detalles-content">
        <h2>{nombre}</h2>
        <p>{fecha}</p>
        <p>{punto_historialmedico}</p>
      </div>
    </div>
  );
};

export default HistorialDetalles;
