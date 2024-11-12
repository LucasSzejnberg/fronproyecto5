import React, { useEffect } from 'react';
import axios from 'axios';

const GetNombre: React.FC = () => {
  const token = localStorage.getItem('loginToken'); // Obtener el token de localStorage

  useEffect(() => {
    const fetchNombre = async () => {
      try {
        const response = await axios.get('http://localhost:3000/nombre', {
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

export default GetNombre;
