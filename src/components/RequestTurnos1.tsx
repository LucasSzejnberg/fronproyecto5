import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rectangulo1 from './Rectangulo1';
import './RequestTurnos1.css';

let a=0;
let b=a;
a=b;
let db=React;
let aa=db;
db=aa;

interface Turno {
  _id: string;
  paciente: string;
  medico: string;
  fecha: string;
  hora: string;
}

const RequestTurnos1 = () => {
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

  return (
    <div className="request-turnos-container">
      {turnos.map((turno) => (
        <Rectangulo1 key={turno._id} fecha={turno.fecha} medico={turno.medico} paciente={turno.paciente} hora={turno.hora} />
      ))}
    </div>
  );
};

export default RequestTurnos1;
