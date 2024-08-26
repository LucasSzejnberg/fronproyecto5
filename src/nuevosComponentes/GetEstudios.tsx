import React, { useEffect, useState } from 'react';
import Rectangulo from '../components/Rectangulo';
import "./GetEstudios.css"
const URL = "https://healthy-back.vercel.app";

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
    try {
      const response = await fetch(`${URL}/estudios`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Añadir el token en los headers
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los estudios');
      }

      const data: Estudio[] = await response.json();
      setEstudios(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error desconocido');
      }
    } finally {
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
