function SlideImage(props) {
  const { alt, src } = props;

  return (
    <img
      src={src}
      alt={alt}
      className="slide__image"
    />
  );
}

export default SlideImage;
