import { Item, Img } from "./CSSItem";

const ImageGalleryItem = ({ onToggle, url, alt, onlargeImg }) => {
  return (
    <Item className="gallery-item" onClick={() => onToggle(onlargeImg, alt)}>
      <Img src={url} alt={alt} />
    </Item>
  );
};

export default ImageGalleryItem;
