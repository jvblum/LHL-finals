
export default function Card(props) {
  const { card, index, setPick, computerPick, sethumanHandHistory, humanHandHistory } = props;
  const onClick = () => {
    setPick(index);
    // console.log(card)

    sethumanHandHistory(humanHandHistory => [...humanHandHistory, card])
    // if computer player, updates with pickA change
    computerPick();
  };
  return (
    // <div className="Card" onClick={onClick}>
    // </div>
    <div className="Card">
      <button
        className="Card"
        onClick={onClick}
        disabled={props.theirHand}
        style={{ background: `url(${card.img})` }}
      >
        {/* <div title={card.type + card.rating}>
          <img
            alt={`${card.type}${card.rating}`}
            className="card-image"
            src={card.img}
          />
        </div> */}
        {/* {`${card.type}${card.rating}`} */}
      </button>
    </div>
  );
}
