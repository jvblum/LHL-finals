export const computerPlayer = (hand) => {
  return Math.floor(Math.random() * hand.length);
}; // plays a random hand

export const shuffle = (arr, rep) => {
  const newArr = [...arr].sort((a, b) => Math.floor(Math.random() * 3 - 1));
  return rep ? shuffle(newArr, rep - 1) : newArr;
};

export const setHand = (deck) => {
  if (deck.length > 2) return [deck[0], deck[1], deck[2]];
  if (deck.length === 2) return [deck[0], deck[1]];
  if (deck.length === 1) return [deck[0]];
  return [];
};
