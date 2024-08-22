import React, { useState } from 'react';
import './Modal.css';
import FormElectro from './FormElectro'; // Asegúrate de que la ruta sea correcta

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

async function uploadFileAndGetResult(file: File): Promise<string> {
  if (!file) {
    return 'Please select a file!';
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('https://hjuyhjiuhjdsadasda-healthy.hf.space/upload-image/', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return 'Upload successful: ' + JSON.stringify(data);
    } else {
      return 'Upload failed: ' + response.statusText;
    }
  } catch (error) {
    if (error instanceof Error) {
      return 'Error: ' + error.message;
    } else {
      return 'Unexpected error occurred';
    }
  }
}

const handleButton3Click = async (url: string, formData: FormData) => {
  try {
    console.log("Botón 3 fue clickeado");
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });
    console.log('Respuesta del servidor:', response);

    if (response.ok) {
      const responseData = await response.json();
      console.log('Datos de respuesta:', responseData);
      return true; // Indica que la solicitud fue exitosa
    } else {
      const errorData = await response.json();
      console.error(`Error en la solicitud POST: ${response.status} ${response.statusText}: ${errorData.message}`);
      return false;
    }
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    return false; // Indica que la solicitud falló
  }
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fecha, setFecha] = useState<string>('');
  const [showFormElectro, setShowFormElectro] = useState(false); // Estado para controlar la visibilidad del formulario

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
    const a = await uploadFileAndGetResult(selectedFile);

    if (a === "electrocardiograma") {
      setShowFormElectro(true); // Mostrar el formulario `FormElectro` si la respuesta es "electrocardiograma"
      return; // Evitar la ejecución posterior
    }

    const formData = new FormData();
    const currentDate = new Date(fecha).toISOString().split('T')[0]; // Convertir la fecha ingresada a formato ISO
    formData.append("date", currentDate);
    formData.append("tipo", a);
    formData.append("quien_subio", "hola");
    formData.append("usuario", "1");
    formData.append("file", selectedFile);

    console.log('Datos a enviar:', formData);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    const isSuccessful = await handleButton3Click("https://healthy-back.vercel.app/estudio", formData);
    console.log('Solicitud exitosa:', isSuccessful);

    console.log('Esperando 10 segundos antes de recargar la página...');
    setTimeout(() => {
      console.log('Recargando página...');
      window.location.reload();
    }, 10000);
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
      {showFormElectro && (
        <div className="modal-overlay">
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            {/* <FormElectro /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
