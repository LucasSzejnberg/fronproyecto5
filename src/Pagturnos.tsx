import React, { useState } from 'react';
import Sidebar3 from './components/Sidebar3';
import Banner2 from './components/Banner2';
import SearchBanner3 from './components/SearchBanner3';
import RequestTurnos1 from './components/RequestTurnos1';

const HistoriaClinica = () => {
  const [searchTerm, setSearchTerm] = useState('');

let a=React;
let b=a;
a=b;

  return (
    <div>
      <Banner2 logoSrc="/logo.png" altText="Mi Logo" />
      <Sidebar3 
        topButton1ImgSrc="/EstudiosBoton1.png"
        topButton2ImgSrc="/HistoriaBoton1.png"
        bottomButtonImgSrc="/HistorialNuevoBoton.png"
        sidebarImgSrc="/LogoVertical.png"
      />
      <SearchBanner3 imgSrc="/VerHistorial.png" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RequestTurnos1 searchTerm={searchTerm} />
    </div>
  );
};

export default HistoriaClinica;
