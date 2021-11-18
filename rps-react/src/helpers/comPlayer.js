export const computerPlayer = hand => {
  return Math.floor(Math.random() * hand.length)
}; // plays a random hand