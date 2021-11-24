import "./styles.css";

import { useState, useEffect } from "react";
import useEvaluate from "./hooks/useEvaluate";
import Hand from "./components/Hand";
import Deck from "./components/Deck";
import TurnResult from "./components/TurnResult";

import { setHand, shuffle, computerPlayer } from "./helpers/helpers";
import { evaluate } from "./helpers/evaluate";
import { deck } from "./data/deck";

import socketIOClient from "socket.io-client";
const client = socketIOClient(process.env.REACT_APP_ENDPOINT);

export default function App() {
  const [pickA, setPickA] = useState(null); // pick index of hand
  const [pickB, setPickB] = useState(null);
  const [deckA, setDeckA] = useState(shuffle(deck, 4));
  const [deckB, setDeckB] = useState(shuffle(deck, 4));
  const [result, setResult] = useState(null);
  const [room, setRoom] = useState("");
  const [requestRoom, setRequestRoom] = useState(false);
  // const [hasOpponent, setHasOpponent] = useState(false);
  const { yourScore, theirScore, complexEval, resetScore } = useEvaluate();

  useEffect(() => {
    // listeners
    client.on("initDeck", data => {
      // init deck from set table config
      setDeckA(data.deckB);
      setDeckB(data.deckA);
    }); // the game is dumb now; it just init decks and not update

    client.on("theirPick", data => {
      // listens for opponent picks
      setPickB(data);
    });

    client.on("theyConnect", data => {
      // should check if someone else is playing; if not computer picks
      // setHasOpponent(data);
    });

    client.on("publicRoomName", data => {
      setRoom(data);
      // should check if someone else is playing; if not computer picks
      // setHasOpponent(data);
    });

    client.emit("initDeck", {deckA, deckB}); // send table config on load
  }, []);

  useEffect(() => {
    // if (hasOpponent) { // this doesn't work
      client.emit("myPick", pickA);
    // } else {
    //   setPickB(computerPlayer(handB));
    // }
  }, [pickA]);

  useEffect(() => {
    if (requestRoom) {
      if (room) {
        client.emit("joinRoom", room);
      } else {
        client.emit("publicRoom");
      }
      setRequestRoom(false);
    }
  }, [requestRoom]);

  const cycleCards = () => {
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
  };

  useEffect(() => {
    if (Number.isInteger(pickA) && Number.isInteger(pickB)) {
      console.log("useEffect", handA[pickA]);
      setResult(evaluate(handA[pickA], handB[pickB]));
      complexEval(handA[pickA], handB[pickB]);
      setPickA(null);
      setPickB(null);
      cycleCards();
    }
  }, [pickA, pickB, complexEval]);

  const newGame = () => {
    setPickA(null);
    setPickB(null);
    setDeckA(shuffle(deck, 4));
    setDeckB(shuffle(deck, 4));
    resetScore();
    // resets game board, but not over sockets
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
      <input type="text-field" value={room} placeholder="room name here" onChange={(e) => {
        setRoom(e.target.value);
      }} />
      <button onClick={() => {
        setRequestRoom(true);
      }}>join room</button>
      <hr />
      <div className="You">
        <p>Your Side</p>
        <Hand hand={handA} setPick={setPickA} />
        <Deck yourDeck={deckA} />
      </div>
      {result && <TurnResult result={result} setResult={setResult} />}
      {!handA.length && !handB.length && (
        <div>
          <button onClick={newGame}>New Game</button>
        </div>
      )}
    </div>
  );
}
