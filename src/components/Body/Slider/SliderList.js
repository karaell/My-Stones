import Slide from "./Slide";

function SliderList(props) {
  const { data, currentSlideId } = props;

  return (
    <div className="slider__list">
      {data.map((slide) => (
        <Slide
          key={slide.id}
          active = {currentSlideId === slide.id ? true : false}
          id={slide.id}
          title={slide.title}
          subtitle={slide.subtitle}
          href={slide.href}
          src={require(`../../../img/HOME/slider/slide${slide.id}.jpg`)}
        />
      ))}
    </div>
  );
}

export default SliderList;
