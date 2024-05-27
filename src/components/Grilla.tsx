import React from 'react';
import './Grilla.css'; // Asegúrate de crear este archivo CSS y definir los estilos necesarios

interface GridComponentProps {
    items: { id: string; content: string }[]; // Array de objetos con id y contenido
  }
  
  const GridComponent: React.FC<GridComponentProps> = ({ items }) => {
    return (
      <div className="grid-container">
        {items.map((item) => (
          <div className="grid-item" key={item.id}>
            {item.content}
          </div>
        ))}
      </div>
    );
  };
  
  export default GridComponent;