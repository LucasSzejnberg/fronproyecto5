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

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('https://healthy-back.vercel.app/turnos');
        setTurnos(response.data);
      } catch (error) {
        console.error('Error fetching turnos:', error);
      }
    };

    fetchTurnos();
  }, []);

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
