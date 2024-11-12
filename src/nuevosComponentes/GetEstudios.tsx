import React, { useEffect, useState } from 'react';
import Rectangulo from '../components/Rectangulo';
import "./GetEstudios.css"
const URL = "http://localhost:3000";

interface Estudio {
  id_estudios: number;
  archivo_estudios: string;
  tipo_estudios: string;
  diagnostico_estudios: string;
  fecha_estudios: string;
  quien_subio_estudios: string;
  id_usuarios: number;
}

interface GetEstudiosProps {
  searchTerm: string; // Recibe el término de búsqueda como prop
}

const GetEstudios: React.FC<GetEstudiosProps> = ({ searchTerm }) => {
  const [estudios, setEstudios] = useState<Estudio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem('loginToken'); // Obtener el token del localStorage

  const fetchEstudios = async () => {
    console.log("Token:", token);  // Asegúrate de que el token tenga valor
  
    try {
      console.log("Iniciando solicitud de estudios...");
  
      // Verifica la URL antes de hacer la solicitud
      console.log("URL de la solicitud:", `${URL}/estudios`);
  
      const response = await fetch(`${URL}/estudios`, {
        method: 'GET',
        headers: {
          //'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Añadir el token en los headers
        },
      });
  
      console.log("Respuesta de la solicitud:", response);  // Verifica el objeto de respuesta
  
      // Verifica si la respuesta no es ok
      if (!response.ok) {
        const errorMessage = await response.text();  // Obtén el mensaje de error del servidor
        console.error("Error al obtener los estudios:", errorMessage); // Verificar el error
        throw new Error('Error al obtener los estudios');
      }
  
      // Si la respuesta es exitosa, verifica el contenido de los datos
      const data: Estudio[] = await response.json();
      console.log("Datos recibidos:", data);  // Verifica los datos obtenidos
  
      // Llama a la función para actualizar el estado
      setEstudios(data);
    } catch (err) {
      // Manejo de errores
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error capturado:", err.message);  // Verifica el mensaje de error
      } else {
        setError('Error desconocido');
        console.error("Error desconocido:", err);  // Verifica si se captura un error no estándar
      }
    } finally {
      // Verifica si el estado de carga se desactiva
      console.log("Cargando completado. Estado de loading:", loading);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchEstudios();
  }, [token]);

  // Filtrado de estudios según el término de búsqueda
  const filteredEstudios = estudios.filter(estudio =>
    estudio.tipo_estudios.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Cargando estudios...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="get-estudios-container">
      <div className="grillaGetEstudios">
        {filteredEstudios.map(estudio => (
          <Rectangulo
            key={estudio.id_estudios}
            imageSrc={estudio.archivo_estudios} // URL de la imagen
            text={estudio.tipo_estudios || estudio.id_estudios.toString()} // Tipo de estudio o ID como texto
          />
        ))}
      </div>
    </div>
  );
};

export default GetEstudios;
