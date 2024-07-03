import React, { useState } from 'react';
import RequestTurnos from './components/RequestTurnos';

const Turnos: React.FC = () => {
  const [paciente, setPaciente] = useState('');
  const [medico, setMedico] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const turno = {
      paciente,
      medico,
      fecha,
      hora,
    };

    try {
      const response = await fetch('https://josephfiter.no/turnos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(turno),
      });

      if (response.ok) {
        console.log('Turno guardado exitosamente');
        // Aquí puedes manejar lo que suceda después de guardar el turno
      } else {
        console.error('Error al guardar el turno');
      }
    } catch (error) {
      console.error('Error de red al guardar el turno:', error);
    }
  };

  return (
    <div>
      <h1>Turnos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Paciente:</label>
          <input
            type="text"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
          />
        </div>
        <div>
          <label>Médico:</label>
          <input
            type="text"
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label>Hora:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <button type="submit">Guardar Turno</button>
      </form>
      <RequestTurnos />
    </div>
  );
}

export default Turnos;
