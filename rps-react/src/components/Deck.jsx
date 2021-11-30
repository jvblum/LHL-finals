export default function Card(props) {
  const deck = props.yourDeck;
  const top = deck[3];
  const deckInfo = [...deck].slice(3).map((card, index) => {
    return <span key={index}><img src={card.img} alt={card.type}/><div>{index + 1}</div></span>;
  })
  // there is no hand state
  // the first three card in the deck are hand cards
  // the top of the deck is the fourth card
  // props.you conditional to show deck content

  return (
    // button tag to align
    <button
      className="Deck"
      disabled
    >
      {top !== undefined &&
      <>
      <br/>
      <img src={top.img} alt={`${top.type} + ${top.rating}`}/>
      <div>{deckInfo.length}</div>
      </>}
      {props.you && <div className="deck-info">{deckInfo}</div>}
    </button>
  );
}
