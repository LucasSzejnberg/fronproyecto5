// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './GlobalContext'; // Importa el GlobalProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalProvider> {/* Envuelve tu aplicación con el GlobalProvider */}
        <App />
      </GlobalProvider>
    </HashRouter>
  </React.StrictMode>
);


