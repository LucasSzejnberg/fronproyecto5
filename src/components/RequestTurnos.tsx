import React, { useEffect, useState } from 'react';

const RequestTurnos: React.FC = () => {
  const [turnos, setTurnos] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await fetch('https://healthy-back.vercel.app/turnos');
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

  const renderTurno = (turno: any, index: number) => {
    if (typeof turno === 'object' && turno !== null) {
      return (
        <li key={index}>
          {Object.entries(turno).map(([key, value]) => (
            <div key={key}><strong>{key}:</strong> {JSON.stringify(value)}</div>
          ))}
        </li>
      );
    } else {
      return <li key={index}>{JSON.stringify(turno)}</li>;
    }
  };

  return (
    <div>
      <h2>Turnos Recibidos</h2>
      {Array.isArray(turnos) ? (
        <ul>
          {turnos.map((turno, index) => renderTurno(turno, index))}
        </ul>
      ) : (
        <div>
          <h3>Datos recibidos:</h3>
          {renderTurno(turnos, 0)}
        </div>
      )}
    </div>
  );
}

export default RequestTurnos;
