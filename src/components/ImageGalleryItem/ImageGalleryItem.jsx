const ImageGalleryItem = ({ onToggle, url, alt, onlargeImg }) => {
  return (
    <li className="gallery-item" onClick={() => onToggle(onlargeImg, alt)}>
      <img src={url} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
