import React from 'react';
import './SearchBanner3.css';

interface SearchBannerProps {
  imgSrc: string;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBanner2: React.FC<SearchBannerProps> = ({ imgSrc, searchTerm, setSearchTerm }) => {
  return (
    <div className="search-banner3">
      <img src={imgSrc} alt="Banner Icon" className="banner-img22" />
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="search-input" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBanner2;
