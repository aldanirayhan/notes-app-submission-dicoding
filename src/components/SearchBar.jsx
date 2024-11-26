import React from 'react';
function SearchBar({ query, handleChange }) {
  return (
    <div className="note-app__search">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={query}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
