export default function Card(props) {
  const { card, index, setPick, computerPick } = props;
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
      </button>
    </div>
  );
}
