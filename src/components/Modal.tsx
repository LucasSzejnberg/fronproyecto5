import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleButton3Click = async (url: string, formData: FormData) => {
  try {
    console.log("Botón 3 fue clickeado");
    const response = await fetch(url, {
      method: 'POST',
      
      body: formData
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);
    } else {
      const errorData = await response.json();
      throw new Error(`Error en la solicitud POST: ${response.status} ${response.statusText}: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
  }
};


const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fecha, setFecha] = useState<string>('');

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
    setFecha(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    const currentDate = new Date(fecha).toISOString().split('T')[0]; // Convertir la fecha ingresada a formato ISO
    formData.append("date", currentDate);
    formData.append("tipo", "1");
    formData.append("quien_subio", "hola");
    formData.append("usuario", "1");
    formData.append("file", selectedFile);

    console.log('Datos a enviar:', formData);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    await handleButton3Click("https://healthy-back.vercel.app/estudio", formData);
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
              type="date"
              placeholder="Fecha..."
              className="modal-input"
              value={fecha}
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
