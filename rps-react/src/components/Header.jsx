
import React, { useState } from 'react';
import useEvaluate from "../hooks/useEvaluate";
import Hand from "./Hand";
import Deck from "./Deck";
import TurnResult from "./TurnResult";
import { setHand, shuffle, computerPlayer } from "../helpers/helpers";
import { deck } from "../data/deck";

const Header = () => {
  const [pickA, setPickA] = useState(null); // pick index of hand
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
   
    setDeckA(shuffle(deck, 4));
    setDeckB(shuffle(deck, 4));
    resetScore();
  };
  return (
    <div className="header">
      <div className="text">
        <span> Rock </span>
        <span> Paper </span>
        <span> Scissors </span>
        <span> Might </span>
        <span> Defend </span>
        
      </div>
      <div className="score-box">
      <br/>
        <div>
          <button >New Game</button>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  );
};
// onClick={}
export default Header;
