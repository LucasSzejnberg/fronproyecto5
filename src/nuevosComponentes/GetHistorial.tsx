import React, { useEffect, useState } from 'react';
import Rectangulo2 from '../components/Rectangulo2';
import '../components/Rectangulo2.css';
import "./GetHistorial.css"
interface GetHistorialProps {
  searchTerm: string;
}

const GetHistorial: React.FC<GetHistorialProps> = ({ searchTerm }) => {
  const [historialMedico, setHistorialMedico] = useState<any[]>([]); // Estado para almacenar el historial médico
  const token = localStorage.getItem('loginToken');

  useEffect(() => {
    // Función para hacer la solicitud al historial médico
    const fetchHistorialMedico = async () => {
      try {
        const response = await fetch('http://localhost:3000/historial', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Añade el token en los headers
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Ordenar los datos por fecha antes de almacenarlos en el estado
          const sortedData = data.sort((a: any, b: any) => new Date(b.fecha_historialmedico).getTime() - new Date(a.fecha_historialmedico).getTime());
          setHistorialMedico(sortedData);
        } else {
          console.error('Error al obtener el historial médico');
        }
      } catch (error) {
        console.error('Error en la solicitud', error);
      }
    };

    fetchHistorialMedico();
  }, [token]); // Asegúrate de que el useEffect se vuelva a ejecutar si el token cambia

  // Filtrar los datos según el término de búsqueda
  const filteredHistorial = historialMedico.filter(item => 
    item.quien_subio_historialmedico.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="historial-container-new">
      {filteredHistorial.map((item, index) => (
        <Rectangulo2
          key={index}
          fecha={item.fecha_historialmedico}
          nombre={item.quien_subio_historialmedico}
          punto_historialmedico={item.punto_historialmedico}
        />
      ))}
    </div>
  );
};

export default GetHistorial;
