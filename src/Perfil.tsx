import React from 'react';
import './Perfil.css';
import './Casa.css';

const Casa: React.FC = () => {
  return (
    <div className="casa">
      <div className="franja superior">
        {/* Contenido de la franja superior */}
        <img src="logo.png" className="holacompañero" alt="Descripción de la imagen" />
      </div>

      <div className="franja media">
      <div className="todomedio">
        <div className="franja-izquierda">
          <img src="imagen.png" alt="Descripción de la imagen" />
          <h2>DATOS PERSONALES</h2>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="date" placeholder="Fecha de nacimiento" />
          <input type="text" placeholder="Sexo" />
        </div>

        <div className="franja-central">
          <h2>DATOS FISICOS</h2>
          <input type="text" placeholder="Peso" />
          <input type="text" placeholder="Altura" />
          <input type="text" placeholder="Tipo de sangre" />
          <h2>DATOS MEDICOS</h2>
          <input type="text" placeholder="Médico principal" />
          <input type="text" placeholder="Número de mi credencial" />
          <input type="text" placeholder="Obra social" />
          <input type="text" placeholder="Plan obra social" />
        </div>

        <div className="franja-derecha">
          <h2>ENFERMEDADES CRONICAS</h2>
          <input type="text" placeholder="Enfermedades crónicas" />
          <div className="botones">
            <button>Guardar</button>
            <button>Cerrar</button>
          </div>
        </div>
        </div>
      </div>

      <div className="franja inferior">
        {/* Contenido de la franja inferior */}
      </div>
    </div>
  );
};

export default Casa;
