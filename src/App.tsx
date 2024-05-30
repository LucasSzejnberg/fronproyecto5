import Banner from './components/Banner'; // Ajusta la ruta según la ubicación de tu archivo
import SearchBanner from './components/SearchBanner';
import Sidebar from './components/Sidebar';
import RequestEstudios from './components/RequestEstudios';

function App() {
  return (
    <div className="App">
      <Banner logoSrc="/logo.png" altText="Mi Logo" />
      <SearchBanner imgSrc="/ImgEstudios.png" />
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

export default App;
