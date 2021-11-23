import "./styles.css";
// import{Browser}
import GameBoard from "./components/GameBoard"
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [game_mode, set_game_mode] = useState(null)
  // let game_mode = null;

const gameModer = (e) =>{
  // console.log(e.target.innerText)
  set_game_mode(e.target.innerText)
  
}
 
  return (
    <div className="App">
      <br />
      {game_mode == null && 

         <div>
         <button onClick={gameModer}>Solo</button>
    
         <button onClick={gameModer}>Match</button>
       </div>
       
      }

{game_mode == "Solo" && 
       <GameBoard />}

    </div>
    



  );
}
