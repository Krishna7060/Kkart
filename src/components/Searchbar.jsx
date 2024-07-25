import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
