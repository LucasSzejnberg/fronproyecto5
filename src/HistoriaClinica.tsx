// src/screens/HistoriaClinica.tsx
import Sidebar2 from './components/Sidebar2';
import BannerHistorial from './components/BannerHistorial'; // Ajusta la ruta según la ubicación de tu archivo

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
    </div>
  );
};

export default HistoriaClinica;
