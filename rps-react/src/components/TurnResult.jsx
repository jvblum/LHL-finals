import { evaluate } from "../helpers/evaluate"; // this import might not be necessary

//ideally, this is a pop-up window that closes when clicked
export default function TurnResult(props) {
  const { nextTurn, yourHand, theirHand } = props;

  const yourPick = yourHand[props.yourPick];
  const theirPick = theirHand[props.theirPick];
  const message = evaluate(yourPick, theirPick);

  return (
    <div>
      <button className="next" onClick={nextTurn}>
        <p className="Pick">
          <i>{yourPick.type}</i> - <b>{theirPick.type}</b>
        </p>
        <div className="result">{message}</div>
      </button>
    </div>
  );
}


 