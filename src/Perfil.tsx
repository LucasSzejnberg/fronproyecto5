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
            <input type="text" className="input-estilo" placeholder="Nombre" />
            <input type="text" className="input-estilo" placeholder="Apellido" />
            <input type="email" className="input-estilo" placeholder="Correo electrónico" />
            <input type="date" className="input-estilo" placeholder="Fecha de nacimiento" />
            <input type="text" className="input-estilo" placeholder="Sexo" />
          </div>

          <div className="franja-central">
            <h2>DATOS FISICOS</h2>
            <input type="text" className="input-estilo" placeholder="Peso" />
            <input type="text" className="input-estilo" placeholder="Altura" />
            <input type="text" className="input-estilo" placeholder="Tipo de sangre" />
            <h2>DATOS MEDICOS</h2>
            <input type="text" className="input-estilo" placeholder="Médico principal" />
            <input type="text" className="input-estilo" placeholder="Número de mi credencial" />
            <input type="text" className="input-estilo" placeholder="Obra social" />
            <input type="text" className="input-estilo" placeholder="Plan obra social" />
          </div>

          <div className="franja-derecha">
            <h2>ENFERMEDADES CRONICAS</h2>
            <input type="text" className="input-estilo" placeholder="Enfermedades crónicas" />
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
