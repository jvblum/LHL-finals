import { evaluate, complexEval } from "../helpers/evaluate";

export default function TurnResult(props) {
  //ideally, this is a pop-up window that closes when clicked
  const reset = () => {
    props.reset.setPickA(null);
    props.reset.setPickB(null);
  }
  const pickA = props.hand[props.picks.pickA];
  const pickB = props.hand[props.picks.pickB];
  return (
    <div>
      <aside class="Pick">{pickA}</aside>
      <aside class="Pick">{pickB}</aside>
      <div class="result">{complexEval(pickA, pickB)}</div>
      <button onClick={reset}>Next Turn</button>
    </div>
  )
}