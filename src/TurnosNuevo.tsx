import React, { useState } from 'react';
import Header from './nuevosComponentes/Header';
import MenuIzquierda from './nuevosComponentes/MenuIzquierda';
import EncabezadoBusqueda from './nuevosComponentes/EncabezadoBusqueda';
import GetTurnos from './nuevosComponentes/GetTurnos'; // Asegúrate de que la ruta sea correcta

function Estudios() {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar los cambios en el input de búsqueda
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Actualiza el término de búsqueda
  };

  return (
    <div>
      <Header 
        logo={"/logo.png"} 
        userName={"Joseph Fiter"} 
        userImage={"/user.png"} 
      />
      <MenuIzquierda 
        activeButton="Turnos" 
        bottomImageSrc="/turnonuevo.png" 
        botoncompartir="/compartirboton.png" 
      />
      <EncabezadoBusqueda
        texto="Estas viendo tus turnos"
        onSearchChange={handleSearchChange} // Pasamos la función que maneja el input
      />
      {/* Lista de turnos filtrados */}
      <GetTurnos searchTerm={searchTerm} /> {/* Pasamos el término de búsqueda */}
    </div>
  );
}

export default Estudios;
