import { evaluate } from "../helpers/evaluate"; // this import might not be necessary

//ideally, this is a pop-up window that closes when clicked
export default function TurnResult(props) {
  const { nextTurn, yourHand, theirHand, setResults } = props;

  const yourPick = yourHand[props.yourPick];
  const theirPick = theirHand[props.theirPick];
  const message = evaluate(yourPick, theirPick);
  console.log(message);
    setTimeout(() => {
      nextTurn();
    }, 2000);

  return (
    <div>
      <button className="next">
        <p className="Pick">
          <img src={yourPick.img} alt={`${yourPick.type} + ${yourPick.rating}`} />
          <span>-</span>
          <img src={theirPick.img} alt={`${theirPick.type} + ${theirPick.rating}`} />
        </p>
        <div className="result">{message}</div>
      </button>
    </div>
  );
}
