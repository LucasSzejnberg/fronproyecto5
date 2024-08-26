import React, { useState } from 'react';
import Header from './nuevosComponentes/Header';
import MenuIzquierda from './nuevosComponentes/MenuIzquierda';
import GetEstudios from './nuevosComponentes/GetEstudios'; // Reemplaza RequestEstudios por GetEstudios
import EncabezadoBusqueda from './nuevosComponentes/EncabezadoBusqueda';

function Estudios() {
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
        activeButton="Estudios"
        bottomImageSrc="/BotonSubirEstudio.png"
        botoncompartir="/compartirboton.png"
      />
      {/* Encabezado de búsqueda */}
      <EncabezadoBusqueda
        texto="VISUALIZACION DE ARCHIVOS"
        onSearchChange={handleSearchChange} // Pasamos la función que maneja el input
      />
      {/* Lista de estudios filtrados */}
      <GetEstudios searchTerm={searchTerm} /> {/* Pasamos el término de búsqueda */}
    </div>
  );
}

export default Estudios;
