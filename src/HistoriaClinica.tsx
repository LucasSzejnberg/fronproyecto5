// src/screens/HistoriaClinica.tsx

import Sidebar2 from './components/Sidebar2';
import BannerHistorial from './components/BannerHistorial';
import SearchBanner2 from './components/SearchBanner2';
import RequestHistorial from './components/RequestHistorial'; // Ajusta la ruta según la ubicación de tu archivo

const HistoriaClinica = () => {
  return (
    <div>
      <BannerHistorial logoSrc="/logo.png" altText="Mi Logo" />
      <Sidebar2 
        topButton1ImgSrc="/EstudiosBoton1.png"
        topButton2ImgSrc="/HistoriaBoton1.png"
        bottomButtonImgSrc="/HistorialNuevoBoton.png"
        sidebarImgSrc="/LogoVertical.png"
      />
      <SearchBanner2 imgSrc="/VerHistorial.png" />
      <RequestHistorial /> {/* Agrega el componente RequestHistorial aquí */}
    </div>
  );
};

export default HistoriaClinica;
