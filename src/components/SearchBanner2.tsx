import React from 'react';
import './SearchBanner.css';

interface SearchBannerProps {
  imgSrc: string;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBanner2: React.FC<SearchBannerProps> = ({ imgSrc, searchTerm, setSearchTerm }) => {
  return (
    <div className="search-banner27">
      <img src={imgSrc} alt="Banner Icon" className="banner-img2" />
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="search-input550" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBanner2;
