import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rectangulo1 from './Rectangulo1';
import './RequestTurnos1.css';

interface Turno {
  _id: string;
  paciente: string;
  medico: string;
  fecha: string;
  hora: string;
}

interface RequestTurnos1Props {
  searchTerm: string;
}

const RequestTurnos1: React.FC<RequestTurnos1Props> = ({ searchTerm }) => {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('https://healthy-back.vercel.app/turnos');
        
        // Verificar si la respuesta es un array
        if (Array.isArray(response.data)) {
          setTurnos(response.data);
        } else {
          console.error('La respuesta no es un array:', response.data);
          setError('Error: los datos recibidos no son válidos.');
        }
      } catch (error) {
        console.error('Error fetching turnos:', error);
        setError('Error al obtener los turnos');
      }
    };

    fetchTurnos();
  }, []);

  if (error) {
    return <div>{error}</div>; // Mostrar mensaje de error si lo hay
  }

  const filteredTurnos = turnos
    .filter(turno =>
      turno.medico.toLowerCase().includes(searchTerm.toLowerCase()) ||
      turno.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      turno.fecha.toLowerCase().includes(searchTerm.toLowerCase()) ||
      turno.hora.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

  return (
    <div className="request-turnos-container">
      {filteredTurnos.map((turno) => (
        <Rectangulo1
          key={turno._id}
          fecha={turno.fecha}
          medico={turno.medico}
          paciente={turno.paciente}
          hora={turno.hora}
        />
      ))}
    </div>
  );
};

export default RequestTurnos1;
