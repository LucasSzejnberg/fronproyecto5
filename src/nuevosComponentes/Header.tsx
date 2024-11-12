import './Header.css'; // Importar los estilos
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import React, { useEffect, useState } from 'react';

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
  const navigate = useNavigate(); // Hook para navegar
  const [fotito, setFotito] = useState(''); // Estado para la foto

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
        console.log("guarda nombre");
        localStorage.setItem('nombreData', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching nombre:', error);
      }
    };

    const fetchFoto = async () => {
      try {
        const response = await axios.get('https://healthy-back.vercel.app/foto', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Incluir el token en los headers si existe
          },
        });

        const fotoUrl = response.data[response.data.length-1]["foto_foto"]; // Ajusta esto según la estructura de la respuesta
        userImage=fotoUrl;
        // Guardar la respuesta en localStorage
        console.log("guarda foto");
        setFotito(fotoUrl); // Actualizar el estado
        console.log(userImage);
        
      } catch (error) {
        if (error instanceof Error) {
          let errorposta=error.message;
          if (errorposta.includes("403")) {
            console.log("El string contiene el número 403");


            try {
              console.log("siguiente");
              // Aquí no necesitas pasar el token, ya que el navegador enviará las cookies automáticamente
              const response = await fetch(`http://localhost:3000/token123`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include', // Esto permite que las cookies se incluyan en la solicitud
              });
          
             
          
              const data = await response.json();
              console.log(data);
             
            } catch (err) {
              console.error('Error al hacer la solicitud:', err);
            } 



          }
          console.error("Error capturado:", error.message);
        } else {
          console.error("Error desconocido:", error);
        }
      }
    };

    if (token) {
      fetchNombre(); // Ejecutar la solicitud para obtener el nombre
      fetchFoto();   // Ejecutar la solicitud para obtener la foto
    }
  }, [token]); // Volver a ejecutar si el token cambia

  let nomb = localStorage.getItem('nombreData');
  if (nomb == null || nomb === "100p") {
    setTimeout(() => {
      window.location.reload(); // Recargar la página
    }, 3000); // Esperar 3 segundos
  }
  console.log(nomb);

  if (nomb) {
    nomb = nomb.substring(21, nomb.length - 3); // Ajustar el contenido del nombre si existe
  }

  // Función para manejar el clic en la imagen de perfil
  const handleProfileClick = () => {
    navigate('/perfil'); // Navegar a la página de perfil
  };

  return (
    <header className="Header-Container">
      <div className="Header-LogoContainer">
        <img src={logo} alt="Logo" className="Header-LogoImage" />
      </div>
      <div className="Header-UserInfo">
        <img
          src={fotito}
          alt="Foto de perfil"
          className="Header-UserImage"
          onClick={handleProfileClick} // Agregar evento onClick para navegar
          style={{ cursor: 'pointer' }} // Cambiar el cursor a pointer para indicar que es clicable
        />
        <span className="Header-UserName">{nomb}</span>
      </div>
    </header>
  );
};

export default Header;

let a = GetNombre;
let b = a;
a = b;
