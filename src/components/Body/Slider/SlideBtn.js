function SlideButton(props) {
  const {href} = props;

  return (
    <a href={href}>
      <button className="slide__btn">View product</button>
    </a>
    
  )
}

export default SlideButton;