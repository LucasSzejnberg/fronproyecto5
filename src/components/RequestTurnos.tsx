import React, { useEffect, useState } from 'react';

const RequestTurnos: React.FC = () => {
  const [turnos, setTurnos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await fetch('https://josephfiter.no/turnos');
        if (response.ok) {
          const data = await response.json();
          setTurnos(data);
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
            {turno.paciente} - {turno.medico} - {turno.fecha} - {turno.hora}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestTurnos;
