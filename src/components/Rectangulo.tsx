import React from 'react';
import './Rectangulo.css';

interface RectanguloProps {
  imageSrc: string;
  text: string;
}

const Rectangulo: React.FC<RectanguloProps> = ({ imageSrc, text }) => {
  // Función para extraer el texto entre comillas
  const extractText = (text: string) => {
    const match = text.match(/"([^"]+)"/);
    return match ? match[1] : text;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.setAttribute('download', 'estudio.png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container44">
      <div className="square">
        <img src="/BotonArchivo.png" alt="example" className="image3" />
        <p className="text1">{extractText(text)}</p>
        <img 
          src="/ImgTresPuntos.png" 
          alt="download" 
          className="image4" 
          onClick={handleDownload}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Rectangulo;
