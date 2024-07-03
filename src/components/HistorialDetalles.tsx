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

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="historial-detalles-overlay" onClick={handleOverlayClick}>
      <div className="historial-detalles-content">
        <h2 className="historial-detalles-nombre">{nombre}</h2>
        <p className="historial-detalles-fecha">{formatDate(fecha)}</p>
        <p className="historial-detalles-punto">{punto_historialmedico}</p>
      </div>
    </div>
  );
};

export default HistorialDetalles;
