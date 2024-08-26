import React, { useState } from 'react';
import Header from './nuevosComponentes/Header';
import MenuIzquierda from './nuevosComponentes/MenuIzquierda';
import EncabezadoBusqueda from "./nuevosComponentes/EncabezadoBusqueda";
import GetHistorial from './nuevosComponentes/GetHistorial'; // Asegúrate de que esta ruta sea correcta

const Estudios: React.FC = () => {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar los cambios en el input de búsqueda
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Actualiza el término de búsqueda
  };

  return (
    <div>
      <Header logo={"/logo.png"} userName={"Joseph Fiter"} userImage={"/user.png"} />
      <MenuIzquierda 
        activeButton="Historia Clinica" // Cambia a "Estudios" si este es el botón activo
        bottomImageSrc="/HistorialNuevoBoton.png" 
        botoncompartir="/compartirboton.png"
      />
      <EncabezadoBusqueda
        texto="VISUALIZACION DE HISTORIAL"
        onSearchChange={handleSearchChange} // Pasamos la función que maneja el input
      />
      <GetHistorial searchTerm={searchTerm} /> {/* Pasamos el término de búsqueda */}
    </div>
  );
}

export default Estudios;
