// RequestHistorial.tsx
import React, { useEffect, useState } from 'react';
import Rectangulo2 from './Rectangulo2';
import './Rectangulo2.css';


const RequestHistorial: React.FC = () => {
  const [historialMedico, setHistorialMedico] = useState<any[]>([]); // Estado para almacenar el historial médico

  useEffect(() => {
    // Función para hacer la solicitud al historial médico
    const fetchHistorialMedico = async () => {
      try {
        const response = await fetch('https://healthy-back.vercel.app/historial/1');
        if (response.ok) {
          const data = await response.json();
          setHistorialMedico(data);
        } else {
          console.error('Error al obtener el historial médico');
        }
      } catch (error) {
        console.error('Error en la solicitud', error);
      }
    };

    fetchHistorialMedico();
  }, []);

  return (
    <div className="historial-container">
      {historialMedico.map((item, index) => (
        <Rectangulo2
          key={index}
          fecha={item.fecha_historialmedico}
          nombre={item.quien_subio_historialmedico}
          punto_historialmedico={item.punto_historialmedico}
          onClick={() => {
            console.log(`Detalles del historial médico ${item.id_historialmedico}`);
            // Lógica para manejar el clic en el rectángulo
          }}
        />
      ))}
    </div>
  );
};

export default RequestHistorial;
