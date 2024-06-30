// Rectangulo2.tsx
import React from 'react';

interface RectanguloProps {
  fecha: string;
  nombre: string;
  punto_historialmedico: string; // Nuevo campo para el mensaje del historial médico
  onClick: () => void; // Función para manejar el click del botón
}

const Rectangulo2: React.FC<RectanguloProps> = ({ fecha, nombre, punto_historialmedico, onClick }) => {
  // Guardamos el valor en una variable (aunque no la usemos ahora)
  const storedMessage = punto_historialmedico;

  return (
    <div className="rectangulo2-container">
      <div className="rectangulo2-content">
        <span className="rectangulo2-date">{fecha}</span>
        <span className="rectangulo2-name">{nombre}</span>
        <button className="rectangulo2-button" onClick={onClick}>
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default Rectangulo2;
