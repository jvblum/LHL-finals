import Hand from "./Hand";
import Deck from "./Deck";
import TurnResult from "./TurnResult";

import useGame from "../hooks/useGame";
import Join from "./Join";

export default function Game(props) {
  const {gameType} = props;
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
  } = useGame();

  const joinExistingGame = gameType === 'join';

  return (joinExistingGame ? <Join  roomChangeListener={roomChangeListener} requestJoinRoom={requestJoinRoom} room={room} /> : (
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
  ))
}
