import React, { useState } from 'react';
import './Modal.css';
 
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleButton3Click = async (url: string, data: any) => {
  try {
    console.log("Botón 3 fue clickeado");
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);
    } else {
      throw new Error('Error en la solicitud POST');
    }
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
  }
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log('Archivo seleccionado:', file);
    }
  };

  const handleButton11Click = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = (event) => handleFileSelect(event as unknown as React.ChangeEvent<HTMLInputElement>);
    fileInput.click();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      name: inputValue,
      fileName: selectedFile?.name,
      fileType: selectedFile?.type,
      fileSize: selectedFile?.size
    };

    handleButton3Click("http://localhost:3000/", data);
  };

  if (!isOpen) return null;

  return (
    <div className="container">
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <img src="/ImgNuevoEstudio.png" alt="Photo" className="modal-photo" />
          </div>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Nombre..."
              className="modal-input"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-footer1">
            <button className="modal-button-button11" onClick={handleButton11Click}>
              <img src="/BotonArchivo.png" alt="Button 1" className="modal-button-image1" />
            </button>
            <button className="modal-button-button22" onClick={onClose}>
              <img src="/BotonCancelar.png" alt="Button 2" className="modal-button-image" />
            </button>
            <button className="modal-button-button23" onClick={handleSubmit}>
              <img src="/BotonCrear.png" alt="Button 3" className="modal-button-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
