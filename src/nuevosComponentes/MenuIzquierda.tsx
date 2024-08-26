import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuIzquierda.css';

interface MenuIzquierdaProps {
  activeButton: string; // El botón que debe estar azul ('Estudios', 'HistoriaClinica' o 'Turnos')
  bottomImageSrc: string; // La imagen que debe aparecer en el cuarto botón
  botoncompartir: string; 
}

const MenuIzquierda: React.FC<MenuIzquierdaProps> = ({ activeButton, bottomImageSrc,botoncompartir }) => {
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
        <img src={botoncompartir} alt="Imagen dinámica" className="MenuIzquierda-BottomImage" />
        <img src={bottomImageSrc} alt="Imagen dinámica" className="MenuIzquierda-BottomImage" />
      </div>
    </div>
  );
};

export default MenuIzquierda;
