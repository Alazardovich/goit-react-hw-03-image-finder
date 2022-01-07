const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.currentTarget.elements.query.value);
    event.currentTarget.reset();
  };
  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          name="query"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
