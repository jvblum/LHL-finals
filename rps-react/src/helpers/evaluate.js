import { cardType } from "./cardType";

export const evaluate = (pickA, pickB) => {
  const rules = {
    '✄': '⌧',
    '♦️': '✄',
    '⌧': '♦️'
  } // what beats what

  if (pickA === pickB) {
    return "Tie Game!";
  }
  if (rules[pickA].includes(pickB)) {
    return "Player A Wins!";
  }
  // if (rules[pickB] === pickA) {
  //   return "Player B Wins!";
  // } // this third check might not be necessary at the moment
  return "Player B Wins!";
}; // currently accepts pick-type string and returns with results

export const complexEval = (pickA, pickB) => {
  const { rock, paper, scissors, defend, might } = cardType;

  const rules = {
    [rock]: scissors,
    [paper]: rock,
    [scissors]: paper,
    [defend]: might,
    [might]: [rock, paper, scissors]
  } // what beats what

  if (rules[pickA].includes(pickB)) {
    return "Player A Wins!";
  }

  if (pickA === pickB) {
    return "Tie Game!";
  }

  if (pickA === defend || pickB === defend) {
    return "Tie Game!";
  } // this comes last because "pass" beats "super" first before it forces a tie

  return "Player B Wins!"

}; // currently accepts pick-type string and returns with results; will incorporate multiplier