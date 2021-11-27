export default function Card(props) {
  const deck = props.yourDeck;
  const top = deck[3];
  // there is no hand state
  // the first three card in the deck are hand cards
  // the top of the deck is the fourth card

  // onclick - view deck

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
    </button>
  );
}
