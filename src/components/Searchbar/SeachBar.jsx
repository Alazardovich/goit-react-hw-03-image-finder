import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value;
    if (searchQuery.trim() === "") {
      toast.info("Введите название!");
      return;
    }
    onSubmit(searchQuery);
    event.currentTarget.reset();
  };
  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <FiSearch style={{ marginRight: 4 }} />
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
