import SliderList from "./Slider/SliderList";
import SliderDots from "./Slider/Dots/SliderDots";
import { useEffect, useState } from "react";

const dataSlider = [
  { id: 1, title: "Title 1", subtitle: "Subtitle 1", href: "#"},
  { id: 2, title: "Title 2", subtitle: "Subtitle 2", href: "#"},
  { id: 3, title: "Title 3", subtitle: "Subtitle 3", href: "#"},
  { id: 4, title: "Title 4", subtitle: "Subtitle 4", href: "#"},
  { id: 5, title: "Title 5", subtitle: "Subtitle 5", href: "#"},
];

export function Slider() {
  const [currentSlideId, setCurrentSlideId] = useState(1);
  const sliderLength = dataSlider.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlideId !== sliderLength) {
        setCurrentSlideId(currentSlideId + 1);
      } else if (currentSlideId === sliderLength) {
        setCurrentSlideId(1);
      }
    }, 4000);
    return () => clearInterval(interval);
  })

  function handleDotClick(currentSlide) {
    setCurrentSlideId(currentSlide)
  }

  return (
    <div className="home__body-slider slider">
      <SliderList data={dataSlider} currentSlideId={currentSlideId} />
      <SliderDots
        amount={dataSlider.length}
        currentSlideId={currentSlideId}
        handleDotClick={handleDotClick}
      />
    </div>
  );
}
