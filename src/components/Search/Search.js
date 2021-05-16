const Search = ({ handleChange }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Pretraži..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
