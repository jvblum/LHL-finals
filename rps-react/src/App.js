import "./styles.css";

import { useState } from "react";
import useEvaluate from "./hooks/useEvaluate";
import Hand from "./components/Hand";
import Deck from "./components/Deck";
import TurnResult from "./components/TurnResult";
import GameBoard from "./components/GameBoard"

import { setHand, shuffle, computerPlayer } from "./helpers/helpers";
import { deck } from "./data/deck";

import Header from "./components/Header";

export default function App() {
  // const [pickA, setPickA] = useState(null); // pick index of hand
  // const [pickB, setPickB] = useState(null);
  // const [deckA, setDeckA] = useState(shuffle(deck, 4));
  // const [deckB, setDeckB] = useState(shuffle(deck, 4));
  // const { yourScore, theirScore, complexEval, resetScore } = useEvaluate();

  // const handA = setHand(deckA);
  // const handB = setHand(deckB);

  // const computerPick = () => {
  //   setPickB(computerPlayer(handB));
  // };

  // const nextTurn = () => {
  //   setDeckA((prev) => {
  //     const newArr = [...prev];
  //     newArr.splice(pickA, 1);
  //     return newArr;
  //   });
  //   setDeckB((prev) => {
  //     const newArr = [...prev];
  //     newArr.splice(pickB, 1);
  //     return newArr;
  //   });
  //   setPickA(null);
  //   setPickB(null);
  //   complexEval(handA[pickA], handB[pickB]);
  // };

  // const newGame = () => {
  //   setPickA(null);
  //   setPickB(null);
  //   setDeckA(shuffle(deck, 4));
  //   setDeckB(shuffle(deck, 4));
  //   resetScore();
  // };

  return (
    <div className="App">
       <Header  />
      <GameBoard />
      </div>



  );
}
