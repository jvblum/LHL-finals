import React from "react";
import GameBoard from "./GameBoard";
const newGame = () => {
  setPickA(null);
  setPickB(null);
  setDeckA(shuffle(deck, 4));
  setDeckB(shuffle(deck, 4));
  resetScore();
};
const Header = () => {
  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div>
          <button onClick={newGame}>New Game</button>
        </div>
      </div>
    </div>
  );
};
// 
export default Header;
