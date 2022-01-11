import PropTypes from "prop-types";
import { Button } from "./CSSButtonLoad";

const LoadButton = ({ children, onClick, ...allyProps }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    <div>
      <Button type="button" onClick={onClick} {...allyProps}>
        {children}
      </Button>
    </div>
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
