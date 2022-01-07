import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({ images, onToggleModal }) => {
  return (
    <ul className="gallery">
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            url={image.webformatURL}
            alt={image.tags}
            largeIMG={image.largeImageURL}
            onToggle={onToggleModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
