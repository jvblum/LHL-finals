import { useState, useEffect } from "react";
import useEvaluate from "./useEvaluate";
// import useSocket from "./hooks/useSocket";

import { setHand, shuffle, computerPlayer } from "../helpers/helpers";
import { evaluate } from "../helpers/evaluate";
import { deck } from "../data/deck";

import socketIOClient from "socket.io-client";
const client = socketIOClient(process.env.REACT_APP_ENDPOINT);

export default function useGame() {
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

    client.on("message", data => {
      // listens for socket-related messages from server
      alert(data);
    });

    client.on("theyConnect", data => {
      // should check if someone else is playing; if not computer picks
      // currently unused
      // setHasOpponent(data);
    });

    client.on("publicRoomName", data => {
      setRoom(data);
      // should check if someone else is playing; if not computer picks
      // setHasOpponent(data);
    });

    // client.emit("initDeck", {deckA, deckB}); // send table config on load
    // probably unnecessary
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
        client.emit("initDeck", {deckA, deckB});
      } else {
        client.emit("publicRoom");
        client.emit("initDeck", {deckA, deckB});
      }
      setRequestRoom(false);
    }
  }, [requestRoom]);

  useEffect(() => {
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

  const roomChangeListener = value => {
    // takes element value to setRoom
    setRoom(value);
  }

  const requestJoinRoom = () => {
    // triggers useEffect with setRequestRoom dependency
    setRequestRoom(true);
  }

  return {
    setPickA,
    setResult,
    roomChangeListener,
    requestJoinRoom,
    newGame,
    handA,
    handB,
    deckA,
    deckB,
    result,
    yourScore,
    theirScore,
    room
  };
};