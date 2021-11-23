
import { useState } from "react";
import useEvaluate from "../hooks/useEvaluate";
import Hand from "./Hand";
import Deck from "./Deck";
import TurnResult from "./TurnResult";
import { setHand, shuffle, computerPlayer } from "../helpers/helpers";
import { deck } from "../data/deck";const [pickA, setPickA] = useState(null); // pick index of hand
  
export default function GameBoard() {

const [pickB, setPickB] = useState(null);
  const [deckA, setDeckA] = useState(shuffle(deck, 4));
  const [deckB, setDeckB] = useState(shuffle(deck, 4));
  const { yourScore, theirScore, complexEval, resetScore } = useEvaluate();

  const handA = setHand(deckA);
  const handB = setHand(deckB);

  const computerPick = () => {
    setPickB(computerPlayer(handB));
  };

  const nextTurn = () => {
    setDeckA((prev) => {
      const newArr = [...prev];
      newArr.splice(pickA, 1);
      return newArr;
    });
    setDeckB((prev) => {
      const newArr = [...prev];
      newArr.splice(pickB, 1);
      return newArr;
    });
    setPickA(null);
    setPickB(null);
    complexEval(handA[pickA], handB[pickB]);
  };

  const newGame = () => {
    setPickA(null);
    setPickB(null);
    setDeckA(shuffle(deck, 4));
    setDeckB(shuffle(deck, 4));
    resetScore();
  };

  return (
    <div className="Game">
       {/* <Header  /> */}
      <Deck yourDeck={deckB} />
      <Hand hand={handB} theirHand={true} />
      <p>Their Side </p>
      <hr />
      <p>
        Your Score: {yourScore} | Their Score: {theirScore}
      </p>
      <hr />
      <p>Your Side</p>
      <Hand hand={handA} setPick={setPickA} computerPick={computerPick} />
      <Deck yourDeck={deckA} />
      {pickA !== null && pickB !== null && (
        <TurnResult
          nextTurn={nextTurn}
          yourPick={pickA}
          theirPick={pickB}
          yourHand={handA}
          theirHand={handB}
        />
      )}
      {!handA.length && !handB.length && (
        <div>
          <button onClick={newGame}>New Game</button>
        </div>
      )}
    </div>
  );
}