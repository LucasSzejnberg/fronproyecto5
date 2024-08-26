import React from 'react';
import './EncabezadoBusqueda.css';

interface EncabezadoBusquedaProps {
  texto: string; // Texto que se muestra a la izquierda
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Función para manejar el cambio en la búsqueda
}

const EncabezadoBusqueda: React.FC<EncabezadoBusquedaProps> = ({ texto, onSearchChange }) => {
  return (
    <div className="EncabezadoBusqueda-Container">
      <div className="EncabezadoBusqueda-Texto">{texto}</div>
      <input
        type="text"
        className="EncabezadoBusqueda-Input"
        placeholder="Buscar..."
        onChange={onSearchChange} // Llamamos a la función en cada cambio
      />
    </div>
  );
};

export default EncabezadoBusqueda;
