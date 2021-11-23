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
      setDeckA(data.deckB);
      setDeckB(data.deckA);
    }); // the game is dumb now; it just init decks and not update
    client.on("theirPick", data => {
      // if (data !== null) {
        setPickB(data);
      // }
    });
    client.on("theyConnect", data => {
      console.log(data);
    });

    client.emit("initDeck", {deckA, deckB}); // send table config on load
  }, []);

  useEffect(() => {
    client.emit("myPick", pickA);
  }, [pickA]);

  const computerPick = () => {
    setPickB(computerPlayer(handB));
  };

  const nextTurn = () => {
    const yourPick = pickA;
    const theirPick = pickB;

    setPickA(null);
    // setPickB(null); only setPickB if computer

    setDeckA((prev) => {
      const newArr = [...prev];
      newArr.splice(yourPick, 1);
      return newArr;
    });
    setDeckB((prev) => {
      const newArr = [...prev];
      newArr.splice(theirPick, 1);
      return newArr;
    });
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
