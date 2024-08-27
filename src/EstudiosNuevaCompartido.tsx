import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Para capturar el token de la URL y navegar
import Estudios from "./EstudiosNueva";

const EstudiosNueva: React.FC = () => {
  const { token } = useParams<{ token: string }>(); // Extrae el token de la URL
  const navigate = useNavigate(); // Hook para navegar entre rutas

  useEffect(() => {
    if (token) {
      const tokenWithQuotes = `"${token}"`; // Agrega comillas al principio y al final del token
      localStorage.setItem('loginToken', tokenWithQuotes); // Guarda el token con comillas en localStorage

      // Esperar 1 segundo antes de navegar a la ruta "/estudiosnueva"
      setTimeout(() => {
        navigate("/estudiosnueva");
      }, 1000); // 1000 milisegundos = 1 segundo
    }
  }, [token, navigate]);

  return (
    <div>
      <Estudios />
    </div>
  );
};

export default EstudiosNueva;
