import { cardType } from "./cardType";

import imgDef from "../icons/def.svg";
import imgMgt from "../icons/mgt.svg";
import imgRck1 from "../icons/rck.svg";
import imgRck2 from "../icons/rck2.svg";
import imgPpr1 from "../icons/ppr.svg";
import imgPpr2 from "../icons/ppr2.svg";
import imgSci1 from "../icons/sci.svg";
import imgSci2 from "../icons/sci2.svg";

const { rock, paper, scissors, defend, might } = cardType;

const ref = [
  {
    id: 0,
    type: rock,
    rating: 1,
    img: imgRck1
  },
  {
    id: 1,
    type: paper,
    rating: 1,
    img: imgPpr1
  },
  {
    id: 2,
    type: scissors,
    rating: 1,
    img: imgSci1
  },
  {
    id: 3,
    type: rock,
    rating: 2,
    img: imgRck2
  },
  {
    id: 4,
    type: paper,
    rating: 2,
    img: imgPpr2
  },
  {
    id: 5,
    type: scissors,
    rating: 2,
    img: imgSci2
  },
  {
    id: 6,
    type: defend,
    rating: 1,
    img: imgDef
  },
  {
    id: 7,
    type: might,
    rating: 1,
    img: imgMgt
  }
];

const deckTemplate = [
  4, // rock1
  1, // rock2
  4, // scissors1
  1, // scissors2:
  4, // paper1
  1, // paper2
  3, // defend
  2 // might:
]; // awkward implementation; consider restructuring ref

const generateDeck = (template, reference) => {
  const deck = [];
  template.forEach((val) => {
    for (let i = 0; i < val; i++) {
     deck.push(reference[val]);
    }
  })
  return deck;
}

export const deck = generateDeck(deckTemplate, ref);

// export const deck = [
//   ref[0],
//   ref[0],
//   ref[0],
//   ref[0],
//   ref[1],
//   ref[1],
//   ref[1],
//   ref[1],
//   ref[2],
//   ref[2],
//   ref[2],
//   ref[2],
//   ref[3],
//   ref[4],
//   ref[5],
//   ref[6],
//   ref[6],
//   ref[6],
//   ref[7],
//   ref[7]
// ];
