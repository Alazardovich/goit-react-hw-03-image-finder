import PropTypes from "prop-types";

const LoadButton = ({ children, onClick, ...allyProps }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "auto",
  });
  return (
    <button type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

LoadButton.defaultProps = {
  onClick: () => null,
  children: null,
};

LoadButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  "aria-label": PropTypes.string.isRequired,
};
export default LoadButton;
