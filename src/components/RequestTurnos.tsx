import React, { useEffect, useState } from 'react';

const RequestTurnos: React.FC = () => {
  const [turnos, setTurnos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await fetch('https://healthy-back.vercel.app/turnos');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setTurnos(data);
          } else {
            setError('La respuesta del servidor no es un array');
          }
        } else {
          setError('Error al obtener los turnos');
        }
      } catch (error) {
        setError('Error de red al obtener los turnos');
      } finally {
        setLoading(false);
      }
    };

    fetchTurnos();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Turnos Recibidos</h2>
      <ul>
        {turnos.map((turno, index) => (
          <li key={index}>
            {JSON.stringify(turno)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestTurnos;
