import React, { useState, useEffect } from 'react';
import './CompartirButton.css'; // Asegúrate de crear y añadir estilos en este archivo
import Modal6 from './Modal7'; // Asegúrate de tener el componente Modal6

const CompartirButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [shareLink, setShareLink] = useState<string>('');
  
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const token = localStorage.getItem('loginToken'); // Obtén el token del almacenamiento local

  useEffect(() => {
    if (showModal) {
      fetch('https://healthy-back.vercel.app/userURL', {
        headers: {
          'Authorization': `Bearer ${token}`, // Agrega el token en los headers
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        setShareLink(data.url); // Ajusta esto según la estructura de la respuesta del API
      })
      .catch(error => console.error('Error fetching share link:', error));
    }
  }, [showModal, token]);

  return (
    <>
      <button onClick={handleShowModal} className="compartir-button">
        Compartir
      </button>
      {showModal && (
        <Modal6 onClose={handleCloseModal}>
          <div className="modal-content">
            <p>Link para compartir: <a href={shareLink} target="_blank" rel="noopener noreferrer">{shareLink}</a></p>
          </div>
        </Modal6>
      )}
    </>
  );
};

export default CompartirButton;
