export default function Card(props) {
  const deck = props.yourDeck;
  const top = deck[3];
  const deckInfo = [...deck].slice(3).map((card, index) => {
    return <span key={index}><img src={card.img}/><div>{index}</div></span>;
  })
  // there is no hand state
  // the first three card in the deck are hand cards
  // the top of the deck is the fourth card
  // props.you conditional to show deck content

  return (
    <button
      className="Deck"
      style={{
        background: `url(${top ? top.img : null})`
      }}
      disabled
    >
      {deck.length}
      {/* {top ? top.type + top.rating : "0"} */}
      {props.you && <div className="deck-info">{deckInfo}</div>}
    </button>
  );
}
