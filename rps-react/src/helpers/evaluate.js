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

  let message = "Tie Game!";
  const point = pickA.rating * pickB.rating;

  if (rules[pickA.type].includes(pickB.type)) {
    message = `Player A Wins! + ${point}`;
  }

  if (rules[pickB.type].includes(pickA.type)) {
    message = `Player B Wins! + ${point}`;
  } // specific to case where pickB === defend

  return { pickA, pickB, message, point };
}; // accepts pick objects and returns with results; will incorporate multiplier
