import Hand from "./Hand";
import Deck from "./Deck";
import TurnResult from "./TurnResult";
import GameResult from "./GameResult";
import RoomStatus from "./RoomStatus";

import useGame from "../hooks/useGame";
import { deck } from "../data/deck";

export default function Game() {
  const {
    setPickA,
    setTurnResult,
    setGameResult,
    startNewGame,
    roomChangeListener,
    requestJoinRoom,
    requestLeaveRoom,
    handA,
    handB,
    deckA,
    deckB,
    turnResult,
    gameResult,
    yourScore,
    theirScore,
    room,
    roomListener,
    hasOpponent
  } = useGame();;

  return (
    <div className="App">
      <RoomStatus
        room={room}
        roomListener={roomListener}
        roomChangeListener={roomChangeListener}
        hasOpponent={hasOpponent}
        requestLeaveRoom={requestLeaveRoom}
        requestJoinRoom={requestJoinRoom}
        startNewGame={startNewGame}
      />
      <div className="Them">
        <Deck yourDeck={deckB} />
        <Hand hand={handB} theirHand={true} />
        <p>Them: <b>{theirScore}</b></p>
      </div>
    <hr />
      <div className="You">
        <p>You: <b>{yourScore}</b> </p>
        <Hand hand={handA} setPick={setPickA} />
        <Deck yourDeck={deckA} you={true} />
      </div>
      {turnResult && <TurnResult result={turnResult} setResult={setTurnResult} />}
      {!turnResult && gameResult && <GameResult result={gameResult} yourScore={yourScore} theirScore={theirScore} setResult={setGameResult} newGame={startNewGame} />}
    </div>
  );
}
