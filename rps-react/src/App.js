import "./styles.css";

import { useState, useEffect } from "react";
import useEvaluate from "./hooks/useEvaluate";
import Hand from "./components/Hand";
import Deck from "./components/Deck";
import TurnResult from "./components/TurnResult";

import { setHand, shuffle, computerPlayer } from "./helpers/helpers";
import { deck } from "./data/deck";

import socketIOClient from "socket.io-client";
const client = socketIOClient(process.env.REACT_APP_ENDPOINT);

export default function App() {
  const [pickA, setPickA] = useState(null); // pick index of hand
  const [pickB, setPickB] = useState(null);
  const [deckA, setDeckA] = useState(shuffle(deck, 4));
  const [deckB, setDeckB] = useState(shuffle(deck, 4));
  const { yourScore, theirScore, complexEval, resetScore } = useEvaluate();

  useEffect(() => {
    // listeners
    client.on("initDeck", data => {
      // init deck from set table config
      console.log('data', data);
      setDeckA(data.deckB);
      setDeckB(data.deckA);
    });
    client.on("theirPick", data => {
      console.log("pick:", data);
      if (data !== null) {
        setPickB(data);
      }
    });
    client.on("theyConnect", data => {
      console.log(data);
    });

    client.emit("initDeck", {deckA, deckB}); // send table config on load
  }, []);

  useEffect(() => {
    client.emit("myPick", pickA);
  }, [pickA]);

  // useEffect(() => {
    
  // }, [pickA]);

  const computerPick = () => {
    setPickB(computerPlayer(handB));
  };

  const nextTurn = () => {
    setDeckA((prev) => {
      const newArr = [...prev];
      newArr.splice(pickA, 1);
      return newArr;
    });
    setDeckB((prev) => {
      const newArr = [...prev];
      newArr.splice(pickB, 1);
      return newArr;
    });
    setPickA(null);
    setPickB(null);
    complexEval(handA[pickA], handB[pickB]);
  };

  const newGame = () => {
    setPickA(null);
    setPickB(null);
    setDeckA(shuffle(deck, 4));
    setDeckB(shuffle(deck, 4));
    resetScore();
  };

  const handA = setHand(deckA);
  const handB = setHand(deckB);

  return (
    <div className="App">
      <div className="Them">
        <Deck yourDeck={deckB} />
        <Hand hand={handB} theirHand={true} />
        <p>Their Side </p>
      </div>
    <hr />
      <p>
        Your Score: {yourScore} | Their Score: {theirScore}
      </p>
      <hr />
      <div className="You">
        <p>Your Side</p>
        <Hand hand={handA} setPick={setPickA} computerPick={computerPick} />
        <Deck yourDeck={deckA} />
      </div>
      {pickA !== null && pickB !== null && (
        <TurnResult
        nextTurn={nextTurn}
        yourPick={pickA}
        theirPick={pickB}
        yourHand={handA}
        theirHand={handB}
        />
        )}
      {!handA.length && !handB.length && (
        <div>
          <button onClick={newGame}>New Game</button>
        </div>
      )}
    </div>
  );
}
