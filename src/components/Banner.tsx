import React from 'react';
import './Banner.css'; // Asegúrate de crear este archivo CSS y definir los estilos necesarios
import CompartirButton from './CompartitButton';
interface BannerProps {
  logoSrc: string; // La ruta de la imagen del logo
  altText?: string; // Texto alternativo para la imagen
}

const Banner: React.FC<BannerProps> = ({ logoSrc, altText = "Logo" }) => {
  return (
    <div className="banner">
      <CompartirButton></CompartirButton>
      <img src={logoSrc} alt={altText} className="logo" draggable="false" />
    </div>
  );
}

export default Banner;
