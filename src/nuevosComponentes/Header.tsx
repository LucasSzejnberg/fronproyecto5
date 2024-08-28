import React from 'react';
import './Header.css'; // Importar los estilos

interface HeaderProps {
  logo: string; // Ruta del logo
  userImage: string; // Ruta de la imagen de perfil
}

const Header: React.FC<HeaderProps> = ({ logo, userImage }) => {
  let nomb = localStorage.getItem('nombreData');
  
  // Verificar si nomb existe y luego eliminar los primeros 21 y los últimos 3 caracteres
  if (nomb) {
    nomb = nomb.substring(21, nomb.length - 3);
  }

  return (
    <header className="Header-Container">
      <div className="Header-LogoContainer">
        <img src={logo} alt="Logo" className="Header-LogoImage" />
      </div>
      <div className="Header-UserInfo">
        <img src={userImage} alt="Foto de perfil" className="Header-UserImage" />
        <span className="Header-UserName">{nomb}</span>
      </div>
    </header>
  );
};

export default Header;
