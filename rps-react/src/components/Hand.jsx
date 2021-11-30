import Card from "./Card";

export default function Hand(props) {
  const hand = [...props.hand].map((card, index) => (
    <Card
      key={index}
      index={index}
      card={card}
      setPick={props.setPick}
      computerPick={props.computerPick}
      theirHand={props.theirHand}
      select={props.select}
    />
  ));
  return <div className="Hand">{hand}</div>;
}
