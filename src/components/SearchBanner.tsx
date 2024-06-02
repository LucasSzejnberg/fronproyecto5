import React from 'react';
import './SearchBanner.css';

interface SearchBannerProps {
  imgSrc: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBanner: React.FC<SearchBannerProps> = ({ imgSrc, onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-banner">
      <img src={imgSrc} alt="Banner Icon" className="banner-img" />
      <input type="text" placeholder="Buscar..." className="search-input" onChange={handleInputChange} />
    </div>
  );
}

export default SearchBanner;
