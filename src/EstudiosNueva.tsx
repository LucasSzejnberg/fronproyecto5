import React, { useState } from 'react';
import Header from './nuevosComponentes/Header';
import MenuIzquierda from './nuevosComponentes/MenuIzquierda';
import EncabezadoBusqueda from './nuevosComponentes/EncabezadoBusqueda';
import GetEstudios from './nuevosComponentes/GetEstudios';
import Modal from './components/Modal'; // Asegúrate de que la ruta sea correcta
import Nombre from "./nuevosComponentes/GetNombre"
const Estudios: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad del modal

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar el clic en la imagen inferior
  const handleBottomImageClick = () => {
    setIsModalOpen(true); // Abre el Modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el Modal
  };

  return (
    <div>
      <Nombre></Nombre>
      <Header 
        logo={"/logo.svg"} 
        userName={"Joseph Fiter"} 
        userImage={"/user.png"} 
      />
      <MenuIzquierda
        activeButton="Estudios"
        bottomImageSrc="/BotonSubirEstudio.png"
        botoncompartir="/compartirboton.png"
        onBottomImageClick={handleBottomImageClick} // Pasar la función
      />
      <EncabezadoBusqueda
        texto="Estas viendo tus estudios"
        onSearchChange={handleSearchChange}
      />
      <GetEstudios searchTerm={searchTerm} />

      <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Mostrar el Modal si el estado es verdadero */}
    </div>
  );
}

export default Estudios;
