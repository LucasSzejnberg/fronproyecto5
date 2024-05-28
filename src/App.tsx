// import React from 'react';
import Banner from './components/Banner'; // Ajusta la ruta según la ubicación de tu archivo
import SearchBanner from './components/SearchBanner';
import Sidebar from './components/Sidebar';
import Grilla from './components/Grilla';
import Rectangulo from './components/Rectangulo';
import RequestEstudios from './components/RequestEstudios';


function App(){
   return(
      <div className="App">
      <Banner logoSrc="/logo.png" altText="Mi Logo" />
      <SearchBanner imgSrc="/ImgEstudios.png" />
      <Rectangulo imageSrc="/BotonArchivo" text="Este es un texto de ejemplo" />
      <Sidebar 
        topButton1ImgSrc="/BotonEstudios.png"
        topButton2ImgSrc="/BotonHistoriaClinica.png"
        bottomButtonImgSrc="/BotonSubirEstudio.png"
        sidebarImgSrc="/LogoVertical.png"
      />
       <div className="App">
      <RequestEstudios />
      {/* Otros componentes o contenido */}
    </div>
       
      {/* Otros componentes o contenido */}
    </div>
    


   )  
}
export default App;