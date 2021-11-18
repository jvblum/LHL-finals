import Card from "./Card";
import "./Hand.css";

export default function Hand (props) {
  return (
  <div className="Hand">
    {[...props.hand].map((card, index) => <Card key={index} index={index} card={card} onClick={props.onClick}/>)}
  </div>
  );
};