import { useState } from "react";
import Game from '../Game';

export default function Landing() {

  const [gameMode, setGameMode] = useState(null);

  return (
    gameMode ? <Game gameMode={gameMode}/> : (
      <div className="landing">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
        <div className="bgimg w3-display-container w3-text-white">  
          <div className="w3-display-topleft w3-container w3-xxlarge">
            <p><button onClick={()=> setGameMode("join")} className="w3-button w3-black">Join Game</button></p>
            <p><button onClick={()=> setGameMode("new")} className="w3-button w3-black">New Game</button></p>
            <p><button onClick={()=> document.getElementById('rules').style.display='block'} className="w3-button w3-black">How to Play/Rules</button></p>
          </div>
          <div className="w3-display-bottomleft w3-container">
            <p className="w3-large">created by Johannes Verne Melliza, Hamed Esmaeilzad and Volkan Benli</p>
          </div>
        </div>
        {/* <!-- rules Modal --> */}
        <div id="rules" className="w3-modal">
          <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container w3-black w3-display-container">
              <span onClick={() => document.getElementById('rules').style.display='none'} className="w3-button w3-display-topright w3-large">x</span>
              <h1>Solo Game</h1>
            </div>
            <div className="w3-container">
              <h5>Just click on the New Game button and your solo game will start!</h5>
            </div>
            <div className="w3-container w3-black">
              <h1>Multiplayer</h1>
            </div>
            <div className="w3-container">
              <h5>After clicking on New Game, you can create an online lobby via entering a lobby name on top right and clicking create room/join room button. Now, your friend can join the game by opening up a new game on their end, entering lobby name and clicking the same create room/join room button.</h5>
            
            </div>
            <div className="w3-container w3-black">
              <h1>Rules</h1>
            </div>
            <div className="w3-container">
              <h5>On top of the regular rock paper scissors rules, our game has might and defend cards. As the name suggests, defend forces a tie agains all cards, whereas might wins against all cards, except defend. Each player has a hand and a deck containing rock, paper, scissors, might and defend cards. Each player chooses a card to play from their hand every turn and the round resolves. When the round is resolved, points will be awarded depending on the outcome. After a round ends, a new card is drawn from player's deck and added to the hand. When both players run out of cards in their hands and decks, game ends. You will see that some cards are level 2 and unlike regular level 1 cards, they will award you 2 points rather than 1 if you play that card and win the round. But, if you lose, your opponent will be awarded 2 points as well!</h5>
            </div>
          </div>
        </div>
      </div>
  )
  )}
