import React from 'react';
import './Rectangulo.css';

interface SquareImageTextProps {
  imageSrc: string;
  text: string;
}

const SquareImageText: React.FC<SquareImageTextProps> = ({ imageSrc, text }) => {
  return (
    <div className="container44">
      <div className="square"></div>
      <img src={imageSrc} alt="example" className="image" />
      <p className="text">{text}</p>
    </div>
  );
};

export default SquareImageText;
