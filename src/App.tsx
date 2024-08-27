import { Routes, Route } from 'react-router-dom';
import HistoriaClinica from './HistoriaClinica';
import Estudios from './Estudios';
import Pagturnos from './Pagturnos';
import Casa from "./Casa";
import Registro from "./Registro";
import Inicio from "./Inicio";
import Perfil from "./Perfil";
import Nuevoestudio from "./EstudiosNueva";
import Nuevohistoria from "./HistoriaClinicaNueva";
import NuevoTurnos from "./TurnosNuevo";
import Estudioscompar from "./EstudiosNuevaCompartido"

function App() {
  return (
    <Routes>
      <Route path="/estudios" element={<Estudios />} />
      <Route path="/historia-clinica" element={<HistoriaClinica />} />
      <Route path="/turnos" element={<Pagturnos />} />
      <Route path="/casa" element={<Casa />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/iniciar" element={<Inicio />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/EstudiosNueva" element={<Nuevoestudio />} />
      {/* Ruta dinámica para EstudiosNueva con token en la URL */}
      <Route path="/EstudiosNuevaCompartir/:token" element={<Estudioscompar />} />
      
      <Route path="/HistoriaClinicaNueva" element={<Nuevohistoria />} />
      <Route path="/TurnosNueva" element={<NuevoTurnos />} />
    </Routes>
  );
}

export default App;
