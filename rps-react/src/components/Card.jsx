export default function Card(props) {
  const { card, index, setPick } = props;
  const onClick = () => {
    setPick(index);
  };
  return (
    <div className="Card">
      <button
        index={index}
        className="Card"
        onClick={onClick}
        disabled={props.theirHand}
        style={{ background: `url(${card.img})` }}
      >
      <div className="card-info"><p>{card.type} LVL {card.rating}</p></div>
      </button>
    </div>
  );
}
