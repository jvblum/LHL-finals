import { useState } from "react";
import { cardType } from "../data/cardType";

export default function useEvaluate() {
  const [yourScore, setYourScore] = useState(0);
  const [theirScore, setTheirScore] = useState(0);
  // const [message, setMessage] = useState("");

  const complexEval = (pickA, pickB) => {
    const { rock, paper, scissors, defend, might } = cardType;
    const rules = {
      [rock]: scissors,
      [paper]: rock,
      [scissors]: paper,
      [defend]: might,
      [might]: [rock, paper, scissors]
    }; // what beats what
    const point = pickA.rating * pickB.rating;

    if (rules[pickA.type].includes(pickB.type)) {
      setYourScore((prev) => prev + point);
      // setMessage(`Player A Wins! + ${point}`);
    }

    if (rules[pickB.type].includes(pickA.type)) {
      setTheirScore((prev) => prev + point);
    } // specific to case where pickB === defend

  }; // accepts pick objects and returns with results; will incorporate multiplier

  const resetScore = () => {
    setYourScore(0);
    setTheirScore(0);
  };

  return { complexEval, yourScore, theirScore, resetScore };
}
