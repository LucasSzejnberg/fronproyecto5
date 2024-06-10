import React from 'react';
import './SearchBanner.css';

interface SearchBannerProps {
  imgSrc: string;
}

const SearchBanner: React.FC<SearchBannerProps> = ({ imgSrc }) => {
  return (
    <div className="search-banner2">
      <img src={imgSrc} alt="Banner Icon" className="banner-img2" />
      <input type="text" placeholder="Buscar..." className="search-input" />
    </div>
  );
}

export default SearchBanner;
