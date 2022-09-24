import Dot from "./Dot";

function SliderDots(props) {
  const { amount, currentSlideId, handleDotClick } = props;

  return (
    <div className="slider__dots">
      {Array.from({ length: amount }).map((item, index) => (
        <Dot
          id={index + 1}
          select={currentSlideId === index + 1 ? true : false}
          handleDotClick={handleDotClick}
        />
      ))}
    </div>
  );
}

export default SliderDots;
