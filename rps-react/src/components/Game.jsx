import Hand from "./Hand";
import Deck from "./Deck";
import TurnResult from "./TurnResult";
import GameResult from "./GameResult";

import useGame from "../hooks/useGame";

export default function Game() {
  const {
    setPickA,
    setTurnResult,
    setGameResult,
    startNewGame,
    roomChangeListener,
    requestJoinRoom,
    handA,
    handB,
    deckA,
    deckB,
    turnResult,
    gameResult,
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
      <p>{room ? `Room: ${room}` : `Playing solo`} </p>
      <input type="text-field" value={room} placeholder="room name here" onChange={(e) => {
        roomChangeListener(e.target.value);
      }} />
      <button onClick={() => {
        requestJoinRoom(true);
        startNewGame();
        // reset current game when joining new room
      }}>join room</button>
      <hr />
      <div className="You">
        <p>Your Side</p>
        <Hand hand={handA} setPick={setPickA} />
        <Deck yourDeck={deckA} you={true} />
      </div>
      {turnResult && <TurnResult result={turnResult} setResult={setTurnResult} />}
      {!turnResult && gameResult && <GameResult result={gameResult} yourScore={yourScore} theirScore={theirScore} setResult={setGameResult} newGame={startNewGame} />}
    </div>
  );
}
