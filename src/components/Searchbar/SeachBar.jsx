import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import { Header, Form, Input, Button } from "./CSSSeachBar";

const SearchBar = ({ onSubmit, query }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value;
    if (searchQuery.trim() === "") {
      toast.info("Введите название!");
      return;
    }
    if (searchQuery.trim() === query) {
      toast.error("Введите новое название!");
      return;
    }
    onSubmit(searchQuery);
    event.currentTarget.reset();
  };
  return (
    <Header className="searchbar">
      <Form className="form" onSubmit={handleSubmit}>
        <Button type="submit" className="button">
          <FiSearch style={{ marginRight: 4 }} />
          <span className="button-label">Search</span>
        </Button>

        <Input
          className="input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
