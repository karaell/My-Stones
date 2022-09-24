import SlideImage from "./SlideImage";
import SlideTitle from "./SlideTitle";
import SlideSubtitle from "./SlideSubtitle";
import SlideButton from "./SlideBtn";

function Slide(props) {
  const { title, subtitle, href, src, active, id } = props;
  
  return (
    <div className={active === true ? "slide active" : "slide"}>
      <SlideImage src={src} alt={title} />
      <SlideTitle title={title} />
      <SlideSubtitle subtitle={subtitle} />
      <SlideButton href={href} />
    </div> 
  );
}

export default Slide;
