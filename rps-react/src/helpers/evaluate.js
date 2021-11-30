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
  let winner = "none";
  const point = pickA.rating * pickB.rating;

  if (rules[pickA.type].includes(pickB.type)) {
    message = `You Win! + ${point}`;
    winner = "you";
  }

  if (rules[pickB.type].includes(pickA.type)) {
    message = `They Win! + ${point}`;
    winner = "them";
  } // specific to case where pickB === defend

  return { pickA, pickB, message, point, winner };
}; // accepts pick objects and returns with results; will incorporate multiplier

export const gameEvaluate = (yourScore, theirScore) => {
  let message = "Tie Game!";
  let winner = "none";
  const point = [yourScore, theirScore].sort((a, b) => b - a).reduce((a, b) => a - b);

  if (yourScore > theirScore) {
    message = `You Win by ${point}pt${point !== 1 ? 's' : ''}!`;
    winner = "you";
  }

  if (yourScore < theirScore) {
    message = `They Win by ${point}pt${point !== 1 ? 's' : ''}!`;
    winner = "them";
  }

  return { message, point, winner };
};