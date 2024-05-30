import React, { useEffect, useState } from 'react';
import Rectangulo from './Rectangulo';

interface Estudio {
  id_estudios: number;
  archivo_estudios: string;
  tipo_estudios: string;
  diagnostico_estudios: string;
  fecha_estudios: string;
  quien_subio_estudios: string;
  id_usuarios: number;
}

const RequestEstudios: React.FC = () => {
  const [estudios, setEstudios] = useState<Estudio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEstudios = async () => {
      try {
        const response = await fetch('/api/estudios'); // Usar proxy
        if (!response.ok) {
          throw new Error('Error al obtener los estudios');
        }
        const data: Estudio[] = await response.json();
        setEstudios(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEstudios();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
     
    </div>
  );
};

export default RequestEstudios;
