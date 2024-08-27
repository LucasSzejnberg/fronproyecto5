import React, { useState } from 'react';
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
      <Sidebar 
        topButton1ImgSrc="/BotonEstudios.png"
        topButton2ImgSrc="/BotonHistoriaClinica.png"
        bottomButtonImgSrc="/BotonSubirEstudio.png"
        sidebarImgSrc="/LogoVertical.png"
      />
      <SearchBanner  onSearch={setSearchTerm} />
      <RequestEstudios searchTerm={searchTerm} />
    </div>
  );
}

export default Estudios;
