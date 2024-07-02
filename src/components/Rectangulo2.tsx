// Rectangulo2.tsx
import React, { useState } from 'react';
import HistorialDetalles from './HistorialDetalles'; // Asegúrate de ajustar la ruta según tu estructura de archivos

interface RectanguloProps {
  fecha: string;
  nombre: string;
  punto_historialmedico: string; // Nuevo campo para el mensaje del historial médico
}

const Rectangulo2: React.FC<RectanguloProps> = ({ fecha, nombre, punto_historialmedico }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rectangulo2-container">
      <div className="rectangulo2-content">
        <span className="rectangulo2-date">{fecha}</span>
        <span className="rectangulo2-name">{nombre}</span>
        <button className="rectangulo2-button" onClick={handleButtonClick}>
          Ver Detalles
        </button>
      </div>
      <HistorialDetalles
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        nombre={nombre}
        fecha={fecha}
        punto_historialmedico={punto_historialmedico}
      />
    </div>
  );
};

export default Rectangulo2;
