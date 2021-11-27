
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
