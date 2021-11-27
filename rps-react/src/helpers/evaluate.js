import { cardType } from "../data/cardType";

export const turnEvaluate = (pickA, pickB) => {
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
    message = `You Win! + ${point}`;
  }

  if (rules[pickB.type].includes(pickA.type)) {
    message = `They Win! + ${point}`;
  } // specific to case where pickB === defend

  return { pickA, pickB, message, point };
}; // accepts pick objects and returns with results; will incorporate multiplier

export const gameEvaluate = (yourScore, theirScore) => {
  let message = "Tie Game!";
  const point = yourScore - theirScore;

  if (yourScore > theirScore) {
    message = `You Win! ${point < 0 ? '' : '+'}${point}`;
  }

  if (yourScore < theirScore) {
    message = `They Win! + ${point}`;
  }

  return { message, point };
};