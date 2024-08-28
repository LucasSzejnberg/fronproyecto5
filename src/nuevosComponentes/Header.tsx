import './Header.css'; // Importar los estilos
import axios from 'axios';
import React, { useEffect } from 'react';

interface HeaderProps {
  logo: string; // Ruta del logo
  userImage: string; // Ruta de la imagen de perfil
}
const GetNombre: React.FC = () => {
  const token = localStorage.getItem('loginToken'); // Obtener el token de localStorage

  useEffect(() => {
    const fetchNombre = async () => {
      try {
        const response = await axios.get('https://healthy-back.vercel.app/nombre', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Incluir el token en los headers si existe
          },
        });

        // Guardar la respuesta en localStorage
        localStorage.setItem('nombreData', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching nombre:', error);
      }
    };

    if (token) {
      fetchNombre(); // Ejecutar la solicitud solo si hay token
    }
  }, [token]); // Volver a ejecutar si el token cambia

  return null; // No renderiza nada en la pantalla
};

const Header: React.FC<HeaderProps> = ({ logo, userImage }) => {
  const token = localStorage.getItem('loginToken'); // Obtener el token de localStorage

  console.log("header activo");
  useEffect(() => {
    const fetchNombre = async () => {
      try {
        const response = await axios.get('https://healthy-back.vercel.app/nombre', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Incluir el token en los headers si existe
          },
        });

        // Guardar la respuesta en localStorage
        console.log("guarda");

        localStorage.setItem('nombreData', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching nombre:', error);
      }
    };

    if (token) {
      fetchNombre(); // Ejecutar la solicitud solo si hay token
    }
  }, [token]); // Volver a ejecutar si el token cambia


  let nomb = localStorage.getItem('nombreData');
  if(nomb==null || nomb=="100p"){
    setTimeout(() => {
      window.location.reload(); // Recargar la página
    }, 1000); // Esperar 2 segundos
  }
  console.log(nomb);
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

let a =GetNombre;
let b=a;
a=b;

export default Header;
