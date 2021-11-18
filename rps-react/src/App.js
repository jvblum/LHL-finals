import { useState, useEffect } from "react";
import './App.css';
import Hand from './components/Hand';
import TurnResult from "./components/TurnResult";

import { computerPlayer } from "./helpers/comPlayer";
import { cardType } from "./helpers/cardType";

function App() {
  const [pickA, setPickA] = useState(null); // pick index of hand
  const [pickB, setPickB] = useState(null);

  // const options = ['✄' ,'♦️' ,'⌧'];
  const options = Object.keys(cardType).map(key => cardType[key]);
  // console.log(options);

  // for computer players, updates on pickA change
  useEffect(() => {
    setPickB(computerPlayer(options));
  }, [pickA]);

  return (
    <div className="App">
      <Hand hand={options} onClick={setPickA}/>
      {pickA !== null && <TurnResult reset={{setPickA, setPickB}} picks={{pickA, pickB}} hand={options}/>}
    </div>
  );
}


export default App;
