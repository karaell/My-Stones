function Dot(props) {
  const { id, select, handleDotClick } = props;

  return (
    <div
      className={select === true ? "slider__dot selected" : "slider__dot"}
      onClick={() => handleDotClick(id)}
    ></div>
  );
}

export default Dot;
