import React from "react";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search by Name:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter name to search"
      />
    </div>
  );
};

export { Search };
