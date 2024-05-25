import React from 'react';
import './Sidebar.css';

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
  return (
    <div className="sidebar">
      <button className="sidebar-btn">
        <img src={topButton1ImgSrc} alt="Button 1" className="btn-img" />
      </button>
      <button className="sidebar-btn">
        <img src={topButton2ImgSrc} alt="Button 2" className="btn-img" />
      </button>
      <img src={sidebarImgSrc} alt="Sidebar" className="sidebar-img" />
      <button className="sidebar-btn">
        <img src={bottomButtonImgSrc} alt="Bottom Button" className="btn-img" />
      </button>
    </div>
  );
}

export default Sidebar;
