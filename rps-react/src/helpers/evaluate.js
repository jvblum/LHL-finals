import { cardType } from "../data/cardType";

export const evaluate = (pickA, pickB) => {
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
    return `Player A Wins! + ${point}`;
  }

  if (rules[pickB.type].includes(pickA.type)) {
    return `Player B Wins! + ${point}`;
  } // specific to case where pickB === defend

  if (pickA.type === pickB.type) {
    return "Tie Game!";
  }

  if (pickA.type === defend || pickB.type === defend) {
    return "Tie Game!";
  } // comes after so "defend beats "might" before it forces a tie
}; // accepts pick objects and returns with results; will incorporate multiplier
