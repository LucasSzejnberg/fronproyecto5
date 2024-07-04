
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HistoriaClinica from './HistoriaClinica';
import Estudios from './Estudios';
import Turnos from './Turnos'; // Asegúrate de importar el componente Turnos si lo necesitas

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Estudios />} />
        <Route path="/historia-clinica" element={<HistoriaClinica />} />
        <Route path="/turnos" element={<Turnos />} /> {/* Añade otras rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
