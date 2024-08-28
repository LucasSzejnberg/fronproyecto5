import React, { useState } from 'react';
import Header from './nuevosComponentes/Header';
import MenuIzquierda from './nuevosComponentes/MenuIzquierda';
import EncabezadoBusqueda from './nuevosComponentes/EncabezadoBusqueda';
import GetHistorial from './nuevosComponentes/GetHistorial';
import Modal2 from './components/Modal2'; // Asegúrate de que la ruta sea correcta

const HistoriaClinica: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModal2Open, setIsModal2Open] = useState(false); // Estado para manejar la visibilidad del modal

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar el clic en la imagen inferior
  const handleBottomImageClick = () => {
    setIsModal2Open(true); // Abre el Modal2
  };

  const closeModal2 = () => {
    setIsModal2Open(false); // Cierra el Modal2
  };

  return (
    <div>
      <Header 
        logo={"/logo.svg"} 
        userImage={"/user.png"} 
      />
      <MenuIzquierda 
        activeButton="Historia Clinica"
        bottomImageSrc="/HistorialNuevoBoton.png" 
        botoncompartir="/compartirboton.png"
        onBottomImageClick={handleBottomImageClick} // Pasar la función
      />
      <EncabezadoBusqueda
        texto="Estas viendo tu historia clinica"
        onSearchChange={handleSearchChange}
      />
      <GetHistorial searchTerm={searchTerm} />

      <Modal2 isOpen={isModal2Open} onClose={closeModal2} /> {/* Mostrar el Modal2 si el estado es verdadero */}
    </div>
  );
}

export default HistoriaClinica;
