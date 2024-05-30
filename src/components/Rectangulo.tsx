import React from 'react';
import './Rectangulo.css';

interface SquareImageTextProps {
  imageSrc: string;
  text: string;
}

const SquareImageText: React.FC<SquareImageTextProps> = ({ imageSrc, text }) => {
  return (
    <div className="container44">
      <div className="square">
        
        <img src="/BotonArchivo.png" alt="example" className="image3" />
        
        <p className="text1">{text}</p>
       
        <img src="/ImgTresPuntos.png" alt="example" className="image4" />
        
        
      </div>
    </div>
  );
};

export default SquareImageText;
