import Banner from './components/Banner'; // Ajusta la ruta según la ubicación de tu archivo
import Sidebar from './components/Sidebar';
import RequestEstudios from './components/RequestEstudios';

function Estudios() {
  return (
    <div className="Estudios">
      <Banner logoSrc="/logo.png" altText="Mi Logo" />
      
      <Sidebar 
        topButton1ImgSrc="/BotonEstudios.png"
        topButton2ImgSrc="/BotonHistoriaClinica.png"
        bottomButtonImgSrc="/BotonSubirEstudio.png"
        sidebarImgSrc="/LogoVertical.png"
      />
      <RequestEstudios />
      {/* Otros componentes o contenido */}
    </div>
  );
}

export default Estudios;
