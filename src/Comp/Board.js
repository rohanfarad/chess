import React, { useState, useEffect } from "react";
import BoardCell from "./BoardCell";
import ShowPieces from "./ShowPieces";
import Timer from "./Timer";

const Board = () => {
  const [eachCell, seteachCell] = useState({
    //8th line
    11: {
      piece: ["Rook", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 11,
    },
    12: {
      piece: ["Knight", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 12,
    },
    13: {
      piece: ["Bishop", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 13,
    },
    14: {
      piece: ["King", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 14,
    },
    15: {
      piece: ["Queen", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 15,
    },
    16: {
      piece: ["Bishop", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 16,
    },
    17: {
      piece: ["Knight", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 17,
    },
    18: {
      piece: ["Rook", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 18,
    },
    //7th line of chess
    21: {
      piece: ["Pawn", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 21,
    },
    22: {
      piece: ["Pawn", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 22,
    },
    23: {
      piece: ["Pawn", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 23,
    },
    24: {
      piece: ["Pawn", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 24,
    },
    25: {
      piece: ["Pawn", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 25,
    },
    26: {
      piece: ["Pawn", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 26,
    },
    27: {
      piece: ["Pawn", "black"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 27,
    },
    28: {
      piece: ["Pawn", "black"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 28,
    },
    //6th line
    31: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 31,
    },
    32: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 32,
    },
    33: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 33,
    },
    34: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 34,
    },
    35: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 35,
    },
    36: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 36,
    },
    37: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 37,
    },
    38: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 38,
    },
    //5th line of chess
    41: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 41,
    },
    42: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 42,
    },
    43: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 43,
    },
    44: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 44,
    },
    45: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 45,
    },
    46: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 46,
    },
    47: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 47,
    },
    48: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 48,
    },
    //4th line
    51: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 51,
    },
    52: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 52,
    },
    53: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 53,
    },
    54: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 54,
    },
    55: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 55,
    },
    56: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 56,
    },
    57: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 57,
    },
    58: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 58,
    },
    //3rd line of chess
    61: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 61,
    },
    62: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 62,
    },
    63: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 63,
    },
    64: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 64,
    },
    65: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 65,
    },
    66: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 66,
    },
    67: {
      piece: ["", ""],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 67,
    },
    68: {
      piece: ["", ""],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 68,
    },

    //2nd line of chess
    71: {
      piece: ["Pawn", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 71,
    },
    72: {
      piece: ["Pawn", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 72,
    },
    73: {
      piece: ["Pawn", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 73,
    },
    74: {
      piece: ["Pawn", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 74,
    },
    75: {
      piece: ["Pawn", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 75,
    },
    76: {
      piece: ["Pawn", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 76,
    },
    77: {
      piece: ["Pawn", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 77,
    },
    78: {
      piece: ["Pawn", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 78,
    },
    //1st line
    81: {
      piece: ["Rook", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 81,
    },
    82: {
      piece: ["Knight", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 82,
    },
    83: {
      piece: ["Bishop", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 83,
    },
    84: {
      piece: ["King", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 84,
    },
    85: {
      piece: ["Queen", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 85,
    },
    86: {
      piece: ["Bishop", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 86,
    },
    87: {
      piece: ["Knight", "white"],
      CellColor: "black",
      selected: false,
      red: false,
      cellNumber: 87,
    },
    88: {
      piece: ["Rook", "white"],
      CellColor: "white",
      selected: false,
      red: false,
      cellNumber: 88,
    },
  });
  const [allBlackPieces, setallBlackPieces] = useState([]);
  const [allWhitePieces, setallWhitePieces] = useState([]);
  const [turn, setturn] = useState(true); //true indicate white turn is 1st
  const [redCell, setredCell] = useState([]); // all possible moves store here
  const [normalCell, setnormalCell] = useState([]); // after clicking other cell turn redcell to normal use this as default & for darkredcell also
  const [selectedCell, setselectedCell] = useState(Number); // to take record which number cell is clicked
  const [darkRedCell, setdarkRedCell] = useState([]); // if piece can able kill something then that places are store here
  const [normalDarkCell, setnormalDarkCell] = useState([]); //to make darkredcell normal after move/ kill/after clicking on another element
  const [possibleBlackCheckCells, setpossibleBlackCheckCells] = useState([]); //all white pieces check if anyone able to kill king of black then that piece no. adds here
  const [possibleWhiteCheckCells, setpossibleWhiteCheckCells] = useState([]); //all black pieces check if anyone able to kill king of white then that piece no. adds here
  const [capturedPiecesByBlack, setcapturedPiecesByBlack] = useState([]); //add all capture pieces of white from kill function
  const [capturedPiecesByWhite, setcapturedPiecesByWhite] = useState([]); //add all capture pieces of black from kill function
  const [displayBlackCheck, setdisplayBlackCheck] = useState(false);
  const [displayWhiteCheck, setdisplayWhiteCheck] = useState(false);
  const [findcheckMove, setfindcheckMove] = useState(true);
  const [findcheckKill, setfindcheckKill] = useState(true);
  const [futureValue, setfutureValue] = useState({});
  const [previousValue, setpreviousValue] = useState({});
  const [futureSelectedCell, setfutureSelectedCell] = useState(Number);
  useEffect(() => {
    makeCellRed();
  }, [redCell]); //if change in array of redcell then render that cells as red

  useEffect(() => {
    movenow();
  }, [findcheckMove, findcheckKill]);

  useEffect(() => {
    killnow();
  }, [findcheckKill]);

  useEffect(() => {
    makeCellDarkRed();
  }, [darkRedCell]); //if change in array of darkredcell then render that cells as darkred

  useEffect(() => {
    findWhiteCheck();
    findBlackCheck();
  }, [findcheckMove, findcheckKill]); //if change in array of findallWhiteCheckCells then run findWhiteCheck function

  useEffect(() => {
    displayWCheck();
  }, [findcheckMove, findcheckKill]);

  useEffect(() => {
    displayBCheck();
  }, [findcheckMove, findcheckKill]);

  useEffect(() => {
    findAllblackPieces();
    findAllwhitePieces();
  }, [turn]); //find all black and white pieces

  //to find which turn is this & which piece is click, acc to it run that specific function
  const makeRedSpotArray = (props) => {
    setredCell([]);
    setdarkRedCell([]);
    setselectedCell(props[1]);
    makeCellNormal();
    darkCellNormal();
    findAllblackPieces();
    findAllwhitePieces();

    if (props[0][1] === "black") {
      switch (props[0][0]) {
        case "Pawn":
          pawnBMove(props[1]);
          break;
        case "Knight":
          knightBMove(props[1]);
          break;
        case "Rook":
          rookBMove(props[1]);
          break;
        case "Bishop":
          bishopBMove(props[1]);
          break;
        case "Queen":
          queenBMove(props[1]);
          break;
        case "King":
          kingBMove(props[1]);
          break;
        case "":
          break;
        default:
          break;
      }
    } else if (props[0][1] === "white") {
      switch (props[0][0]) {
        case "Pawn":
          pawnWMove(props[1]);
          break;
        case "Knight":
          knightWMove(props[1]);
          break;
        case "":
          break;
        case "Rook":
          rookWMove(props[1]);
          break;
        case "Bishop":
          bishopWMove(props[1]);
          break;
        case "Queen":
          queenWMove(props[1]);
          break;
        case "King":
          kingWMove(props[1]);
          break;
        default:
          break;
      }
    }
  };
  //black pawn move function
  const pawnBMove = (props) => {
    if (props < 29 && eachCell[Number(props) + 10].piece[0] === "") {
      //// to avoid 1st move of pawn is 2 rows
      const number = [Number(props) + 10, Number(props) + 20];
      setredCell(number);
    } else if (props < 29 && eachCell[Number(props) + 10].piece[0] !== "") {
      const number = [];
      setredCell(number);
    } else {
      const number = [Number(props) + 10];
      setredCell(number);
    }
    //find all possible darkredspot array
    let rightDigit = Math.floor((props / 1) % 10);
    if (rightDigit < 2) {
      const kill = [Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "black";
      });
      setdarkRedCell(killNumber);
    } else if (rightDigit > 7) {
      const kill = [Number(props) + 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "black";
      });
      setdarkRedCell(killNumber);
    } else {
      const kill = [Number(props) + 9, Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "black";
      });
      setdarkRedCell(killNumber);
    }
  };
  //white pawn move function
  const pawnWMove = (props) => {
    if (props > 70 && eachCell[Number(props) - 10].piece[0] === "") {
      // to avoid 1st move of pawn is 2 rows
      const number = [Number(props) - 10, Number(props) - 20];
      setredCell(number);
    } else if (props > 70 && eachCell[Number(props) - 10].piece[0] !== "") {
      const number = [];
      setredCell(number);
    } else {
      const number = [Number(props) - 10];
      setredCell(number);
    }
    if (Math.floor((props / 1) % 10) < 2) {
      const kill = [Number(props) - 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "white";
      });
      setdarkRedCell(killNumber);
    } else if (Math.floor((props / 1) % 10) > 7) {
      const kill = [Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "white";
      });
      setdarkRedCell(killNumber);
    } else {
      const kill = [Number(props) - 9, Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "white";
      });
      setdarkRedCell(killNumber);
    }
  };
  //black knight move
  const knightBMove = (props) => {
    const a = Number(props) - 21; // all possible positions of knight
    const b = Number(props) - 19;
    const c = Number(props) - 12;
    const d = Number(props) - 8;
    const e = Number(props) + 8;
    const f = Number(props) + 12;
    const g = Number(props) + 19;
    const h = Number(props) + 21;
    const possibileMove = [a, b, c, d, e, f, g, h]; //all knight positions save in this

    const number = possibileMove.filter((element) => {
      if (element < 11 || element > 88) {
        //if value less than 11 & greter than 88 remove that number
        return false;
      } else if (
        Math.floor(element % 10) === 9 || // 1st from right digit is equal to 9 is reject
        Math.floor(element % 10) === 0 //1st from right digit is equal to 0 is reject
      ) {
        return false;
      } else if (eachCell[element].piece[1] === "black") {
        return false; //if already any black piece is present is possible squares
      } else {
        return true; //if above both conditions are rejected then this is true
      }
    });
    setredCell(number);

    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "white"; //filterin number array if that cell is white
    });
    setdarkRedCell(killNumber);
  };
  //white knight move
  const knightWMove = (props) => {
    const a = Number(props) - 21;
    const b = Number(props) - 19;
    const c = Number(props) - 12;
    const d = Number(props) - 8;
    const e = Number(props) + 8;
    const f = Number(props) + 12;
    const g = Number(props) + 19;
    const h = Number(props) + 21;
    const possibileMove = [a, b, c, d, e, f, g, h];

    const number = possibileMove.filter((element) => {
      if (element < 11 || element > 88) {
        return false;
      } else if (
        Math.floor(element % 10) === 9 ||
        Math.floor(element % 10) === 0
      ) {
        return false;
      } else if (eachCell[element].piece[1] === "white") {
        return false;
      } else {
        return true;
      }
    });
    setredCell(number);
    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "black";
    });
    setdarkRedCell(killNumber);
  };
  //black rook move
  const rookBMove = (props) => {
    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
  };
  //white rook move
  const rookWMove = (props) => {
    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
  };
  const bishopBMove = (props) => {
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
  };
  const bishopWMove = (props) => {
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
  };
  const queenBMove = (props) => {
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[1] === "white") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
  };
  const queenWMove = (props) => {
    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }

    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      setredCell((prev) => [...prev, index]);
      if (eachCell[index].piece[0] !== "") {
        break;
      }
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[1] === "black") {
        setdarkRedCell((prev) => [...prev, index]);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
  };
  const kingBMove = (props) => {
    const a = Number(props) - 11; // all possible positions of knight
    const b = Number(props) - 9;
    const c = Number(props) + 11;
    const d = Number(props) + 9;
    const e = Number(props) + 1;
    const f = Number(props) - 1;
    const g = Number(props) + 10;
    const h = Number(props) - 10;
    const possibileMove = [a, b, c, d, e, f, g, h]; //all knight positions save in this

    const number = possibileMove.filter((element) => {
      if (element < 11 || element > 88) {
        //if value less than 11 & greter than 88 remove that number
        return false;
      } else if (
        Math.floor(element % 10) === 9 || // 1st from right digit is equal to 9 is reject
        Math.floor(element % 10) === 0 //1st from right digit is equal to 0 is reject
      ) {
        return false;
      } else if (eachCell[element].piece[1] === "black") {
        return false;
      } else {
        return true; //if above both conditions are rejected then this is true
      }
    });
    setredCell(number);

    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "white"; //filter number array if that cell is white
    });
    setdarkRedCell(killNumber);
  };
  const kingWMove = (props) => {
    const a = Number(props) - 11; // all possible positions of knight
    const b = Number(props) - 9;
    const c = Number(props) + 11;
    const d = Number(props) + 9;
    const e = Number(props) + 1;
    const f = Number(props) - 1;
    const g = Number(props) + 10;
    const h = Number(props) - 10;
    const possibileMove = [a, b, c, d, e, f, g, h]; //all knight positions save in this

    const number = possibileMove.filter((element) => {
      if (element < 11 || element > 88) {
        //if value less than 11 & greter than 88 remove that number
        return false;
      } else if (
        Math.floor(element % 10) === 9 || // 1st from right digit is equal to 9 is reject
        Math.floor(element % 10) === 0 //1st from right digit is equal to 0 is reject
      ) {
        return false;
      } else if (eachCell[element].piece[1] === "white") {
        return false;
      } else {
        return true; //if above both conditions are rejected then this is true
      }
    });
    setredCell(number);

    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "black"; //filter number array if that cell is white
    });
    setdarkRedCell(killNumber);
  };
  const makeCellRed = () => {
    redCell.map((item, id) => {
      if (eachCell[item].piece[0] === "") {
        // make sure cell is red only if the that cell is empty
        eachCell[item].selected = true;
      }
    });
    setnormalCell(redCell);
  };

  const makeCellDarkRed = () => {
    darkRedCell.map((item, id) => {
      if (eachCell[item].piece[0] !== "") {
        // make sure cell is red only if the that cell is empty
        eachCell[item].red = true;
      }
    });
    setnormalDarkCell(darkRedCell);
  };

  const makeCellNormal = () => {
    normalCell.map((item, id) => (eachCell[item].selected = false));
  };
  const darkCellNormal = () => {
    normalDarkCell.map((item, id) => (eachCell[item].red = false));
  };

  const move = (props) => {
    setfutureSelectedCell(props);
    setfutureValue(eachCell[props].piece);
    setpreviousValue(eachCell[selectedCell].piece);
    let a = eachCell[props].piece;
    let b = eachCell[selectedCell].piece;
    eachCell[props].piece = b;
    eachCell[selectedCell].piece = a;
    makeCellNormal();
    darkCellNormal();
    findWhiteCheck();
    findBlackCheck();
    setfindcheckMove(!findcheckMove);
    setturn(!turn);
  };
  const kill = (props) => {
    setfutureSelectedCell(props);
    setfutureValue(eachCell[props].piece);
    setpreviousValue(eachCell[selectedCell].piece);
    let a = eachCell[props].piece;
    let b = eachCell[selectedCell].piece;
    eachCell[props].piece = b;
    eachCell[selectedCell].piece = ["", ""];
    makeCellNormal();
    darkCellNormal();
    findWhiteCheck();
    findBlackCheck();
    setfindcheckKill(!findcheckKill);
    setturn(!turn);
  };
  const movenow = () => {
    if (
      possibleBlackCheckCells.length !== 0 ||
      possibleWhiteCheckCells.length !== 0
    ) {
      checkBeforeMove(futureValue, previousValue, Number(futureSelectedCell));
    }
  };
  const killnow = () => {
    if (
      possibleBlackCheckCells.length !== 0 ||
      possibleWhiteCheckCells.length !== 0
    ) {
      checkBeforeKill(futureValue, previousValue, Number(futureSelectedCell));
    } else {
      turn
        ? setcapturedPiecesByBlack((prev) => [...prev, futureValue])
        : setcapturedPiecesByWhite((prev) => [...prev, futureValue]);
    }
  };

  const checkBeforeMove = (a, b, props) => {
    if (turn && possibleBlackCheckCells.length !== 0) {
      makeMoveUndo(a, b, props);
    } else if (!turn && possibleWhiteCheckCells.length !== 0) {
      makeMoveUndo(a, b, props);
    }
  };

  const checkBeforeKill = (a, b, props) => {
    if (turn && possibleBlackCheckCells.length !== 0) {
      makeKillUndo(a, b, props);
    } else if (!turn && possibleWhiteCheckCells.length !== 0) {
      makeKillUndo(a, b, props);
    } else {
      turn
        ? setcapturedPiecesByBlack((prev) => [...prev, futureValue])
        : setcapturedPiecesByWhite((prev) => [...prev, futureValue]);
    }
  };

  const makeMoveUndo = (a, b, props) => {
    eachCell[props].piece = a;
    eachCell[selectedCell].piece = b;
    setturn(!turn);
    setfindcheckKill(!findcheckKill);
  };

  const makeKillUndo = (a, b, props) => {
    eachCell[props].piece = a;
    eachCell[selectedCell].piece = b;
    setturn(!turn);
    setfindcheckKill(!findcheckKill);
  };

  //find all white pieces who can give check to black king
  const findWhiteCheck = () => {
    const newEachcell = eachCell;
    setpossibleBlackCheckCells([]);

    Object.keys(newEachcell).forEach((element, id) => {
      if (newEachcell[element].piece[1] === "white") {
        switch (newEachcell[element].piece[0]) {
          case "Pawn":
            const apawn = newEachcell[element].cellNumber - 11; // all possible positions of knight
            const bpawn = newEachcell[element].cellNumber - 9;

            const possibileMovePawn = [apawn, bpawn]; //all knight positions save in this

            const numberPawn = possibileMovePawn.filter((element) => {
              if (element < 11 || element > 88) {
                //if value less than 11 & greter than 88 remove that number
                return false;
              } else if (
                Math.floor(element % 10) === 9 || // 1st from right digit is equal to 9 is reject
                Math.floor(element % 10) === 0 //1st from right digit is equal to 0 is reject
              ) {
                return false;
              } else {
                return true; //if above both conditions are rejected then this is true
              }
            });

            const killNumberPawn = numberPawn.filter((element) => {
              if (
                eachCell[element].piece[1] === "black" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberPawn.length !== 0) {
              setpossibleBlackCheckCells((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }
            break;
          case "Rook":
            for (
              let index = newEachcell[element].cellNumber + 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index++
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index--
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);

                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 10;
              index > 10 && index < 89;
              index = index - 10
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);

                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 10;
              index > 10 && index < 89;
              index = index + 10
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);

                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            break;
          case "Bishop":
            for (
              let index = newEachcell[element].cellNumber + 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 9
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 11
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 9
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 11
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            break;
          case "Knight":
            const a = newEachcell[element].cellNumber - 21; // all possible positions of knight
            const b = newEachcell[element].cellNumber - 19;
            const c = newEachcell[element].cellNumber - 12;
            const d = newEachcell[element].cellNumber - 8;
            const e = newEachcell[element].cellNumber + 8;
            const f = newEachcell[element].cellNumber + 12;
            const g = newEachcell[element].cellNumber + 19;
            const h = newEachcell[element].cellNumber + 21;
            const possibileMove = [a, b, c, d, e, f, g, h]; //all knight positions save in this

            const number = possibileMove.filter((element) => {
              if (element < 11 || element > 88) {
                //if value less than 11 & greter than 88 remove that number
                return false;
              } else if (
                Math.floor(element % 10) === 9 || // 1st from right digit is equal to 9 is reject
                Math.floor(element % 10) === 0 //1st from right digit is equal to 0 is reject
              ) {
                return false;
              } else {
                return true; //if above both conditions are rejected then this is true
              }
            });

            const killNumber = number.filter((element) => {
              if (
                eachCell[element].piece[1] === "black" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
              //filter number array if that cell is white
            });
            setpossibleBlackCheckCells((prev) => [...prev, ...killNumber]);
            break;
          case "Queen":
            for (
              let index = newEachcell[element].cellNumber + 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index++
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);

                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index--
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 10;
              index > 10 && index < 89;
              index = index - 10
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);

                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 10;
              index > 10 && index < 89;
              index = index + 10
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                console.log(index);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 9
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 11
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 9
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 11
            ) {
              if (
                newEachcell[index].piece[1] === "black" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleBlackCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            break;
          default:
            break;
        }
      }
    });
    console.log(possibleBlackCheckCells);
  };
  //find all black pieces who can give check to white king
  const findBlackCheck = () => {
    const newEachcell = eachCell;
    setpossibleWhiteCheckCells([]);
    Object.keys(newEachcell).forEach((element) => {
      if (newEachcell[element].piece[1] === "black") {
        switch (newEachcell[element].piece[0]) {
          case "Pawn":
            const apawn = newEachcell[element].cellNumber + 11; // all possible positions of knight
            const bpawn = newEachcell[element].cellNumber + 9;
            const possibileMovePawn = [apawn, bpawn]; //all knight positions save in this
            const numberPawn = possibileMovePawn.filter((element) => {
              if (element < 11 || element > 88) {
                //if value less than 11 & greter than 88 remove that number
                return false;
              } else if (
                Math.floor(element % 10) === 9 || // 1st from right digit is equal to 9 is reject
                Math.floor(element % 10) === 0 //1st from right digit is equal to 0 is reject
              ) {
                return false;
              } else {
                return true; //if above both conditions are rejected then this is true
              }
            });
            const killNumberPawn = numberPawn.filter((element) => {
              if (
                eachCell[element].piece[1] === "white" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberPawn.length !== 0) {
              setpossibleWhiteCheckCells((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }

            break;
          case "Rook":
            for (
              let index = newEachcell[element].cellNumber + 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index++
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                console.log(newEachcell[index].cellNumber);
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index--
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                console.log(index);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 10;
              index > 10 && index < 89;
              index = index - 10
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                console.log(index);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 10;
              index > 10 && index < 89;
              index = index + 10
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            break;
          case "Bishop":
            for (
              let index = newEachcell[element].cellNumber + 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 9
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 11
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 9
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 11
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            break;
          case "Knight":
            const a = newEachcell[element].cellNumber - 21; // all possible positions of knight
            const b = newEachcell[element].cellNumber - 19;
            const c = newEachcell[element].cellNumber - 12;
            const d = newEachcell[element].cellNumber - 8;
            const e = newEachcell[element].cellNumber + 8;
            const f = newEachcell[element].cellNumber + 12;
            const g = newEachcell[element].cellNumber + 19;
            const h = newEachcell[element].cellNumber + 21;
            const possibileMove = [a, b, c, d, e, f, g, h]; //all knight positions save in this
            const number = possibileMove.filter((element) => {
              if (element < 11 || element > 88) {
                //if value less than 11 & greter than 88 remove that number
                return false;
              } else if (
                Math.floor(element % 10) === 9 || // 1st from right digit is equal to 9 is reject
                Math.floor(element % 10) === 0 //1st from right digit is equal to 0 is reject
              ) {
                return false;
              } else {
                return true; //if above both conditions are rejected then this is true
              }
            });
            const killNumber = number.filter((element) => {
              if (
                eachCell[element].piece[1] === "white" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
              //filter number array if that cell is white
            });
            setpossibleWhiteCheckCells((prev) => [...prev, ...killNumber]);
            break;
          case "Queen":
            for (
              let index = newEachcell[element].cellNumber + 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index++
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                console.log(newEachcell[index].cellNumber);
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 1;
              Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
              index--
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 10;
              index > 10 && index < 89;
              index = index - 10
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 10;
              index > 10 && index < 89;
              index = index + 10
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 9
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 11
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber - 9;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index - 9
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            for (
              let index = newEachcell[element].cellNumber + 11;
              Math.floor(index % 10) !== 9 &&
              Math.floor(index % 10) !== 0 &&
              index > 10 &&
              index < 89;
              index = index + 11
            ) {
              if (
                newEachcell[index].piece[1] === "white" &&
                newEachcell[index].piece[0] === "King"
              ) {
                setpossibleWhiteCheckCells((prev) => [
                  ...prev,
                  newEachcell[element].cellNumber,
                ]);
                break;
              }
              if (
                newEachcell[index].piece[1] === "black" ||
                newEachcell[index].piece[1] === "white"
              ) {
                break;
              }
            }
            break;
          default:
            break;
        }
      }
    });
    console.log(possibleWhiteCheckCells);
  };

  const displayBCheck = () => {
    setdisplayBlackCheck(false);
    if (possibleBlackCheckCells.length !== 0) {
      setdisplayBlackCheck(true);
    }
  };
  const displayWCheck = () => {
    setdisplayWhiteCheck(false);
    if (possibleWhiteCheckCells.length !== 0) {
      setdisplayWhiteCheck(true);
    }
  };
  const findAllblackPieces = () => {
    setallBlackPieces([]);
    Object.keys(eachCell).forEach((element) => {
      if (
        eachCell[element].piece[0] !== "" &&
        eachCell[element].piece[1] !== "white"
      ) {
        setallBlackPieces((prev) => [...prev, eachCell[element]]);
      }
    });
  };
  const findAllwhitePieces = () => {
    setallWhitePieces([]);
    Object.keys(eachCell).forEach((element) => {
      if (
        eachCell[element].piece[0] !== "" &&
        eachCell[element].piece[1] !== "black"
      ) {
        setallWhitePieces((prev) => [...prev, eachCell[element]]);
      }
    });
  };
  return (
    <>
      <label style={{ margin: "auto", textAlign: "center", display: "block" }}>
        Captured Pieces :
      </label>
      <div className="bottomHalf">
        {capturedPiecesByBlack.map((element, id) => (
          <ShowPieces key={id} getPieces={element} />
        ))}
      </div>
      {/* <label style={{ margin: "auto", textAlign: "center", display: "block" }}>
        Available Pieces :
      </label>
      <div className="bottomHalf">
        {allBlackPieces.map((element, id) => (
          <ShowPieces key={id} getPieces={element.piece} />
        ))}
      </div> */}
      <br />
      <div className="middleSection">
        <div className="checkBox">
          {displayBlackCheck && (
            <div className="checkBoxBlack">
              <h2>check to black</h2>
            </div>
          )}
        </div>

        <div className={turn ? "boardWhiteOutline" : "boardBlackOutline"}>
          <div className="Board">
            {Object.keys(eachCell).map((item, id) => (
              <BoardCell
                key={id}
                getPiece={eachCell[item].piece}
                getId={item}
                getColor={eachCell[item].CellColor}
                getClick={makeRedSpotArray}
                getDarkRedColor={eachCell[item].red}
                getSelectedColor={eachCell[item].selected}
                getMove={move}
                getKill={kill}
                getTurn={turn}
              />
            ))}
          </div>
        </div>
        <div className="checkBox">
          {displayWhiteCheck && (
            <div className="checkBoxWhite">
              <h2>check to white</h2>
            </div>
          )}
        </div>
      </div>
      {/* <label style={{ margin: "auto", textAlign: "center", display: "block" }}>
        Available Pieces :
      </label>
      <div className="bottomHalf">
        {allWhitePieces.map((element, id) => (
          <ShowPieces key={id} getPieces={element.piece} />
        ))}
      </div> */}
      <label style={{ margin: "auto", textAlign: "center", display: "block" }}>
        Captured Pieces :
      </label>
      <div className="bottomHalf">
        {capturedPiecesByWhite.map((element, id) => (
          <ShowPieces key={id} getPieces={element} />
        ))}
      </div>
      <Timer />
    </>
  );
};
export default Board;
