import React from 'react';
import './SearchBanner.css';

interface SearchBannerProps {
  imgSrc: string;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBanner2: React.FC<SearchBannerProps> = ({  searchTerm, setSearchTerm }) => {
  return (
    <div className="search-banner27">
      <div className="banner-img202">HISTORIAL MEDICO</div>
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="search-input99901" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBanner2;
