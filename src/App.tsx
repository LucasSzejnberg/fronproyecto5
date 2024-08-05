// App.tsx
import { Routes, Route } from 'react-router-dom';
import HistoriaClinica from './HistoriaClinica';
import Estudios from './Estudios';
import Pagturnos from './Pagturnos'; // Importar el nuevo componente
import Casa from "./Casa";

function App() {
  return (
    <Routes>
      <Route path="/estudios" element={<Estudios />} />
      <Route path="/historia-clinica" element={<HistoriaClinica />} />
      <Route path="/turnos" element={<Pagturnos />} /> {/* Nueva ruta */}
      <Route path="/casa" element={<Casa />} />
    </Routes>
  );
}

export default App;
