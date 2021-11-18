export const evaluate = (pickA, pickB) => {
  const rules = {
    '✄': '⌧',
    '♦️': '✄',
    '⌧': '♦️'
  }
  if (pickA === pickB) {
    return "Tie Game!";
  }
  if (rules[pickA] === pickB) {
    return "Player A Wins!";
  }
  if (rules[pickB] === pickA) {
    return "Player B Wins!";
  } // this third check might not be necessary at the moment
};