import React, { useState } from 'react';
import Banner from './components/Banner'; 
import Sidebar from './components/Sidebar';
import RequestEstudios from './components/RequestEstudios';
import SearchBanner from './components/SearchBanner';


function Estudios() {
  const [searchTerm, setSearchTerm] = useState('');

  let a=React;
  let b=a;
  a=b;
  return (
    <div >
      <Banner logoSrc="/logo.png" altText="Mi Logo" />
      <Sidebar 
        topButton1ImgSrc="/BotonEstudios.png"
        topButton2ImgSrc="/BotonHistoriaClinica.png"
        bottomButtonImgSrc="/BotonSubirEstudio.png"
        sidebarImgSrc="/LogoVertical.png"
      />
      <SearchBanner imgSrc="/ImgEstudios.png" onSearch={setSearchTerm} />
      <RequestEstudios searchTerm={searchTerm} />
    </div>
  );
}

export default Estudios;
