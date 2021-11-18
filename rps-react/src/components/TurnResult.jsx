import { evaluate } from "../helpers/evaluate";

export default function TurnResult(props) {
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
      <div class="result">{evaluate(pickA, pickB)}</div>
      <button onClick={reset}>Next Turn</button>
    </div>
  )
}