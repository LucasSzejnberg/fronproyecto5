// App.tsx
import { Routes, Route } from 'react-router-dom';
import HistoriaClinica from './HistoriaClinica';
import Estudios from './Estudios';
import Pagturnos from './Pagturnos'; // Importar el nuevo componente
import Casa from "./Casa";
import Registro from "./Registro";
import Inicio from "./Inicio";
import Perfil from "./Perfil";
import Nuevoestudio from "./EstudiosNueva";
import Nuevohistoria from "./HistoriaClinicaNueva";
import NuevoTurnos from "./TurnosNuevo";


function App() {
  return (
    <Routes>
      <Route path="/estudios" element={<Estudios />} />
      <Route path="/historia-clinica" element={<HistoriaClinica />} />
      <Route path="/turnos" element={<Pagturnos />} /> {/* Nueva ruta */}
      <Route path="/casa" element={<Casa />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/iniciar" element={<Inicio />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/EstudiosNueva" element={<Nuevoestudio />} />
      <Route path="/HistoriaClinicaNueva" element={<Nuevohistoria />} />
      <Route path="/TurnosNueva" element={<NuevoTurnos />} />

    </Routes>
  );
}

export default App;
