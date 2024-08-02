import React, { useEffect, useState } from 'react';
import Rectangulo from './Rectangulo';

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

interface RequestEstudiosProps {
  searchTerm: string;
}

const RequestEstudios: React.FC<RequestEstudiosProps> = ({ searchTerm }) => {
  const [estudios, setEstudios] = useState<Estudio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEstudios = async () => {
    try {
      const response = await fetch(URL + '/estudios');
      if (!response.ok) {
        console.error('HTTP error:', response.status, response.statusText);
        throw new Error('Error al obtener los estudios');
      }
      const data: Estudio[] = await response.json();
      setEstudios(data);
    } catch (err) {
      console.error('Fetch error:', err);
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
    const intervalId = setInterval(fetchEstudios, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const filteredEstudios = estudios.filter(estudio =>
    estudio.tipo_estudios.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let a=loading;
  let b=a;
  a=b;
  let aa=error;
  let bb=aa;
  aa=bb;
  return (
    <div className="request-estudios-container">
      <div className="grilla">
        {filteredEstudios.map(estudio => (
          <Rectangulo
            key={estudio.id_estudios}
            imageSrc={estudio.archivo_estudios}
            text={estudio.tipo_estudios || estudio.id_estudios.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default RequestEstudios;
