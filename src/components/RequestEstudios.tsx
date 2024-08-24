import React, { useEffect, useState } from 'react';
import Rectangulo from './Rectangulo';
import { useGlobalContext } from '../GlobalContext'; // Importa el hook para usar el contexto

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
  const { result: token } = useGlobalContext(); // Accede al token desde el contexto global
  const [estudios, setEstudios] = useState<Estudio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  let ra=loading;
  let ba=error;
  let an=ba;
  ba=an;
  let oa=ra;
  ra=oa;
  console.log(token);

  const fetchEstudios = async () => {
    try {
      const response = await fetch(URL + '/estudios', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Añade el token en los headers
        },
      });

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
    const intervalId = setInterval(fetchEstudios, 35000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [token]); // Add token to dependencies if it might change

  const filteredEstudios = estudios.filter(estudio =>
    estudio.tipo_estudios.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
