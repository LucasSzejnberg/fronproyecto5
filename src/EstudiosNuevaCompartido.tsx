import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Para capturar el token de la URL y navegar
import Nombre from "./nuevosComponentes/GetNombre"
import axios from 'axios';

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
        console.log("se guardo el nombre");
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

const EstudiosNueva: React.FC = () => {
  const { token } = useParams<{ token: string }>(); // Extrae el token de la URL
  const navigate = useNavigate(); // Hook para navegar entre rutas

  useEffect(() => {
    if (token) {
      const compartido ="activado";
      const tokenWithQuotes = `"${token}"`; // Agrega comillas al principio y al final del token
      localStorage.setItem('loginToken', tokenWithQuotes); // Guarda el token con comillas en localStorage
      localStorage.setItem('esCompartido', compartido); // Guarda el token con comillas en localStorage

      // Esperar 1 segundo antes de navegar a la ruta "/estudiosnueva"
      setTimeout(() => {
        navigate("/estudiosnueva");
      }, 1000); // 1000 milisegundos = 1 segundo
    }
  }, [token, navigate]);

  return (
    <div>
            <Nombre></Nombre>

    </div>
  );
};
let a =GetNombre;
let b=a;
a=b;


export default EstudiosNueva;
