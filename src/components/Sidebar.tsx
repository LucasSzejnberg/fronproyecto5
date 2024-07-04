import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import Modal from './Modal';


interface SidebarProps {
  topButton1ImgSrc: string;
  topButton2ImgSrc: string;
  sidebarImgSrc: string;
  bottomButtonImgSrc: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  topButton1ImgSrc, 
  topButton2ImgSrc, 
  sidebarImgSrc, 
  bottomButtonImgSrc 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButton1Click = () => {
    navigate('/');
  };

  const handleButton2Click = () => {
    navigate('/historia-clinica');
  };

  return (
    <div className="sidebar">
      <button className="sidebar-btn" onClick={handleButton1Click}>
        <img src={topButton1ImgSrc} alt="Button 1" className="btn-img" />
      </button>
      <button className="sidebar-btn" onClick={handleButton2Click}>
        <img src={topButton2ImgSrc} alt="Button 2" className="btn-img" />
      </button>
      <img src={sidebarImgSrc} alt="Sidebar" className="sidebar-img" />
      
      <button className="sidebar-btn" onClick={openModal}>
        <img src={bottomButtonImgSrc} alt="Bottom Button" className="btn-img" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
     
    </div>
  );
}

export default Sidebar;
