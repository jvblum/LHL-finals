import Hand from "./Hand";
import Deck from "./Deck";
import TurnResult from "./TurnResult";

import useGame from "../hooks/useGame";

export default function Game() {
  const {
    setPickA,
    setResult,
    roomChangeListener,
    requestJoinRoom,
    newGame,
    handA,
    handB,
    deckA,
    deckB,
    result,
    yourScore,
    theirScore,
    room
  } = useGame();;

  return (
    <div className="App">
      <div className="Them">
        <Deck yourDeck={deckB} />
        <Hand hand={handB} theirHand={true} />
        <p>Their Side </p>
      </div>
    <hr />
      <p>
        Your Score: {yourScore} | Their Score: {theirScore}
      </p>
      <input type="text-field" value={room} placeholder="room name here" onChange={(e) => {
        roomChangeListener(e.target.value);
      }} />
      <button onClick={() => {
        requestJoinRoom(true);
      }}>join room</button>
      <hr />
      <div className="You">
        <p>Your Side</p>
        <Hand hand={handA} setPick={setPickA} />
        <Deck yourDeck={deckA} />
      </div>
      {result && <TurnResult result={result} setResult={setResult} />}
      {!handA.length && !handB.length && (
        <div>
          <button onClick={newGame}>New Game</button>
        </div>
      )}
    </div>
  );
}
