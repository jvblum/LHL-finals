import React from "react";

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
          <button >New Game</button>
        </div>
      </div>
    </div>
  );
};
// onClick={newGame}
export default Header;
