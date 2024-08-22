import React, { useState } from 'react';
import './Modal.css';
import FormElectro from './FormElectro';

let rst = 0;

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
    const response = await fetch('https://main-lahv.onrender.com/sz', {
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
      body: formData,
    });
    console.log('Respuesta del servidor:', response);

    if (response.ok) {
      const responseData = await response.json();
      console.log('Datos de respuesta:', responseData);
      return true;
    } else {
      const errorData = await response.json();
      console.error(`Error en la solicitud POST: ${response.status} ${response.statusText}: ${errorData.message}`);
      return false;
    }
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    return false;
  }
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fecha, setFecha] = useState<string>('');
  const [showFormElectro, setShowFormElectro] = useState(false);
  const [formElectroData, setFormElectroData] = useState<any>(null);

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

    // Mostrar el formulario Electro si el archivo es un electrocardiograma
    if (rst === 0) {
      console.log("a es igual a ", a);

      if (a === 'Upload successful: "electrocardiograma"') {
        console.log("entra a electro la concha de mi vieja");
        setShowFormElectro(true);
        rst = 1; // Indicamos que ya se ha mostrado el formulario
        return;
      }
    }

    // Si ya se hizo el submit del FormElectro, proceder con el submit final
    const formData = new FormData();
    const currentDate = new Date(fecha).toISOString().split('T')[0];
    formData.append("date", currentDate);
    formData.append("tipo", a);
    formData.append("quien_subio", "hola");
    formData.append("usuario", "1");
    formData.append("file", selectedFile);

    if (formElectroData) {
      formData.append("diccionarioElectro", JSON.stringify(formElectroData));
    }
    
    console.log(formData);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    const isSuccessful = await handleButton3Click("https://healthy-back.vercel.app/estudio", formData);
    console.log('Solicitud exitosa:', isSuccessful);

    console.log('Esperando 10 segundos antes de recargar la página...');
    setTimeout(() => {
      console.log('Recargando página...');
      window.location.reload();
    }, 15000);
  };

  const handleFormElectroSubmit = (data: any) => {
    console.log('Datos recibidos del FormElectro:', data);
    setFormElectroData(data);
    setShowFormElectro(false); // Ocultar el formulario después de enviar
    handleSubmit(); // Continuar con el flujo del modal
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
            {showFormElectro ? (
              <FormElectro onSubmit={handleFormElectroSubmit} />
            ) : (
              <>
                <input
                  type="date"
                  placeholder="Fecha..."
                  className="modal-input"
                  value={fecha}
                  onChange={handleInputChange}
                />
              </>
            )}
          </div>
          {!showFormElectro && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
