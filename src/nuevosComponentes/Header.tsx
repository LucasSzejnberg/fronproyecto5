import React from 'react';
import './Header.css'; // Importar los estilos

interface HeaderProps {
  logo: string; // Ruta del logo
  userName: string; // Nombre del usuario
  userImage: string; // Ruta de la imagen de perfil
}

const Header: React.FC<HeaderProps> = ({ logo,  userImage }) => {
  const nomb = localStorage.getItem('nombreData');

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
