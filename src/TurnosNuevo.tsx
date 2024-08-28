import React, { useState } from 'react';
import Header from './nuevosComponentes/Header';
import MenuIzquierda from './nuevosComponentes/MenuIzquierda';
import EncabezadoBusqueda from './nuevosComponentes/EncabezadoBusqueda';
import GetTurnos from './nuevosComponentes/GetTurnos';
import Modal6 from './components/Modal6'; // Asegúrate de que la ruta sea correcta

const Turnos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModal6Open, setIsModal6Open] = useState(false); // Estado para manejar la visibilidad del modal

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar el clic en la imagen inferior
  const handleBottomImageClick = () => {
    setIsModal6Open(true); // Abre el Modal6
  };

  const closeModal6 = () => {
    setIsModal6Open(false); // Cierra el Modal6
  };

  return (
    <div>
      <Header 
        logo={"/logo.svg"} 
        userImage={"/user.png"} 
      />
      <MenuIzquierda 
        activeButton="Turnos" 
        bottomImageSrc="/turnonuevo.png" 
        botoncompartir="/compartirboton.png" 
        onBottomImageClick={handleBottomImageClick} // Pasar la función
      />
      <EncabezadoBusqueda
        texto="Estas viendo tus turnos"
        onSearchChange={handleSearchChange}
      />
      <GetTurnos searchTerm={searchTerm} />

      {isModal6Open && <Modal6 onClose={closeModal6} />} {/* Mostrar el Modal6 si el estado es verdadero */}
    </div>
  );
}

export default Turnos;
