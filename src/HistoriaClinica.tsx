import React, { useState } from 'react';
import Sidebar2 from './components/Sidebar2';
import BannerHistorial from './components/BannerHistorial';
import SearchBanner2 from './components/SearchBanner2';
import RequestHistorial from './components/RequestHistorial';
let x=React;
let r=x;
x=r;
const HistoriaClinica = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <BannerHistorial logoSrc="/logo.png" altText="Mi Logo" />
      <Sidebar2 
        topButton1ImgSrc="/EstudiosBoton1.png"
        topButton2ImgSrc="/HistoriaBoton1.png"
        bottomButtonImgSrc="/HistorialNuevoBoton.png"
        sidebarImgSrc="/LogoVertical.png"
      />
      <SearchBanner2 imgSrc="/VerHistorial.png" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RequestHistorial searchTerm={searchTerm} />
    </div>
  );
};

export default HistoriaClinica;
