import React from 'react';
import './SearchBanner.css';

interface SearchBannerProps {
  // imgSrc ya no es necesario, puedes eliminarlo
  onSearch: (searchTerm: string) => void;
}

const SearchBanner: React.FC<SearchBannerProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-banner">
      {/* Reemplaza la imagen con un div que tenga el texto */}
      <div className="banner-img202">ESTUDIOS MEDICOS</div>
      <input type="text" placeholder="Buscar..." className="search-input99901" onChange={handleInputChange} />
    </div>
  );
}

export default SearchBanner;
