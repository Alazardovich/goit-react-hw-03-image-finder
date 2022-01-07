const ImageGalleryItem = ({ onToggle, url, alt, largeIMG }) => {
  return (
    <li class="gallery-item" onClick={() => onToggle(largeIMG, alt)}>
      <img src={url} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
