import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleButton3Click = async (url: string, data: any) => {
  try {
    console.log("Botón 3 fue clickeado"); // Verificar si se ejecuta la función
    // Realiza la solicitud POST utilizando la función fetch
    const response = await fetch(url, {
      method: 'POST', // Método de la solicitud
      headers: {
        'Content-Type': 'application/json' // Tipo de contenido que se está enviando (en este caso, JSON)
      },
      body: JSON.stringify(data) // Convierte los datos a formato JSON antes de enviarlos
    });

    // Verifica si la solicitud fue exitosa (código de estado 2xx)
    if (response.ok) {
      // Recibe la respuesta en formato JSON
      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);
    } else {
      // Si la solicitud no fue exitosa, lanza un error
      throw new Error('Error en la solicitud POST');
    }
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud
    console.error('Error en la solicitud POST:', error);
  }
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src="/ImgNuevoEstudio.png" alt="Photo" className="modal-photo" />
        </div>
        <div className="modal-body">
          <input type="text" placeholder="Nombre..." className="modal-input" />
        </div>
        <div className="modal-footer">
          <button className="modal-button button1">
            <img src="/BotonArchivo.png" alt="Button 1" className="modal-button-image" />
          </button>
          <button className="modal-button button2">
            <img src="/BotonCancelar.png" alt="Button 2" className="modal-button-image" />
          </button>
          <button className="modal-button button3"  onClick={() => handleButton3Click("http://localhost:3000/", {"hsgdh":1})}>
            <img src="/BotonCrear.png" alt="Button 3" className="modal-button-image" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
