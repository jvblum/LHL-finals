export default function Card(props) {
  const { card, index, setPick } = props;
  const onClick = () => {
    setPick(index);
  };
  const select = index === props.select ? "select" : "";
  return (
    <div>
      <button
        index={index}
        className={`Card ${select}`}
        onClick={onClick}
        disabled={props.theirHand}
        style={{ background: `url(${card.img})` }}
      >
      <div className="card-info"><p>{card.type} LVL {card.rating}</p></div>
      </button>
    </div>
  );
}
