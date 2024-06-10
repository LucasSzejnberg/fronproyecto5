
import { Routes, Route } from 'react-router-dom';
import HistoriaClinica from './HistoriaClinica';
import Estudios from './Estudios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Estudios />} />
      <Route path="/historia-clinica" element={<HistoriaClinica />} />
    </Routes>
  );
}

export default App;
