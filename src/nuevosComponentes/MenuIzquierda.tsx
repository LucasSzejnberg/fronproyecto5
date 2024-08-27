import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuIzquierda.css';
import Modal7 from '../components/Modal7'; // Asegúrate de que la ruta sea correcta

interface MenuIzquierdaProps {
  activeButton: string; // El botón que debe estar azul ('Estudios', 'HistoriaClinica' o 'Turnos')
  bottomImageSrc: string; // La imagen que debe aparecer en el cuarto botón
  botoncompartir: string; 
  onBottomImageClick: () => void; // Función para manejar el click en la imagen inferior
}

const MenuIzquierda: React.FC<MenuIzquierdaProps> = ({ activeButton, bottomImageSrc, botoncompartir, onBottomImageClick }) => {
  const [isModal7Open, setIsModal7Open] = useState(false);

  const handleShareButtonClick = () => {
    setIsModal7Open(true);
  };

  const closeModal7 = () => {
    setIsModal7Open(false);
  };

  return (
    <div className="MenuIzquierda-Container">
      <div className="MenuIzquierda-ButtonsTop">
        <NavLink
          to="/EstudiosNueva"
          className={`MenuIzquierda-Button ${activeButton === 'Estudios' ? 'active' : ''}`}
        >
          Estudios
        </NavLink>
        <NavLink
          to="/HistoriaClinicaNueva"
          className={`MenuIzquierda-Button ${activeButton === 'HistoriaClinica' ? 'active' : ''}`}
        >
          Historia clínica
        </NavLink>
        <NavLink
          to="/TurnosNueva"
          className={`MenuIzquierda-Button ${activeButton === 'Turnos' ? 'active' : ''}`}
        >
          Turnos
        </NavLink>
      </div>
      <div className="MenuIzquierda-ButtonBottom">
        <img 
          src={botoncompartir} 
          alt="Imagen de compartir" 
          className="MenuIzquierda-BottomImage" 
          onClick={handleShareButtonClick} // Maneja el click en el botón de compartir
        />
        <img 
          src={bottomImageSrc} 
          alt="Imagen dinámica" 
          className="MenuIzquierda-BottomImage" 
          onClick={onBottomImageClick} // Maneja el click en el botón dinámico
        />
      </div>
      
      {/* Renderizar el Modal7 dentro de MenuIzquierda */}
      <Modal7 isOpen={isModal7Open} onClose={closeModal7} />
    </div>
  );
};

export default MenuIzquierda;
