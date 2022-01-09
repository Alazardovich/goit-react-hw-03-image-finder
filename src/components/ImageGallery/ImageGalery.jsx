import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { ListItem } from "./CSSListGallery";

const ImageGallery = ({ images, onToggleModal }) => {
  return (
    <ListItem>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            url={image.webformatURL}
            alt={image.tags}
            onlargeImg={image.largeImageURL}
            onToggle={onToggleModal}
          />
        );
      })}
    </ListItem>
  );
};
ImageGallery.defaultProp = {
  images: [],
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onToggleModal: PropTypes.func.isRequired,
};
export default ImageGallery;
