// App.tsx
import { Routes, Route } from 'react-router-dom';
import HistoriaClinica from './HistoriaClinica';
import Estudios from './Estudios';
import Turnos from './Turnos'; // Importar el nuevo componente

function App() {
  return (
    <Routes>
      <Route path="/" element={<Estudios />} />
      <Route path="/historia-clinica" element={<HistoriaClinica />} />
      <Route path="/turnos" element={<Turnos />} /> {/* Nueva ruta */}
    </Routes>
  );
}

export default App;
