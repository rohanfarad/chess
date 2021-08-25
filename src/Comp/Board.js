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
  const [arrayOfCheckCellsToBlackKing, setarrayOfCheckCellsToBlackKing] =
    useState([]); //all white pieces check if anyone able to kill king of black then that piece no. adds here
  const [arrayOfCheckCellsToWhiteKing, setarrayOfCheckCellsToWhiteKing] =
    useState([]); //all black pieces check if anyone able to kill king of white then that piece no. adds here
  const [capturedPiecesByBlack, setcapturedPiecesByBlack] = useState([]); //add all capture pieces of white from kill function
  const [capturedPiecesByWhite, setcapturedPiecesByWhite] = useState([]); //add all capture pieces of black from kill function
  const [displayBlackCheck, setdisplayBlackCheck] = useState(false);
  const [displayWhiteCheck, setdisplayWhiteCheck] = useState(false);
  const [findcheckMove, setfindcheckMove] = useState(true);
  const [findcheckKill, setfindcheckKill] = useState(true);
  const [futureValue, setfutureValue] = useState({});
  const [previousValue, setpreviousValue] = useState({});
  const [futureSelectedCell, setfutureSelectedCell] = useState(Number);
  const [blackKingPosition, setblackKingPosition] = useState(Number);
  const [whitekingPosition, setwhitekingPosition] = useState(Number);

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
    findCheckToBlackKing();
    findCheckToWhiteKing();
  }, [findcheckMove, findcheckKill]); //if change in array of findallWhiteCheckCells then run findCheckToBlackKing function

  useEffect(() => {
    displayWCheck();
  }, [findcheckMove, findcheckKill]);

  useEffect(() => {
    displayBCheck();
    findCheckMateToBlackKing();
    findCheckMateToWhiteKing();
  }, [findcheckMove, findcheckKill]);

  useEffect(() => {
    findAllblackPieces();
    findAllwhitePieces();
    kingPositions();
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
          const red = pawnBMove(props[1]);
          setredCell(red);
          const darkRed = pawnBPossibleKill(props[1]);
          setdarkRedCell(darkRed);
          break;
        case "Knight":
          const knightB = knightBMove(props[1]);
          setredCell(knightB[0]);
          setdarkRedCell(knightB[1]);
          break;
        case "Rook":
          const rookB = rookBMove(props[1]);
          setredCell(rookB[0]);
          setdarkRedCell(rookB[1]);
          break;
        case "Bishop":
          const bishopB = bishopBMove(props[1]);
          setredCell(bishopB[0]);
          setdarkRedCell(bishopB[1]);
          break;
        case "Queen":
          const queenB = queenBMove(props[1]);
          setredCell(queenB[0]);
          setdarkRedCell(queenB[1]);
          break;
        case "King":
          const kingB = kingBMove(props[1]);
          setredCell(kingB[0]);
          setdarkRedCell(kingB[1]);
          break;
        case "":
          break;
        default:
          break;
      }
    } else if (props[0][1] === "white") {
      switch (props[0][0]) {
        case "Pawn":
          const red = pawnWMove(props[1]);
          setredCell(red);
          const darkRed = pawnWPossibleKill(props[1]);
          setdarkRedCell(darkRed);
          break;
        case "Knight":
          const knightW = knightWMove(props[1]);
          setredCell(knightW[0]);
          setdarkRedCell(knightW[1]);
          break;
        case "":
          break;
        case "Rook":
          // rookWMove(props[1]);
          const rookW = rookWMove(props[1]);
          setredCell(rookW[0]);
          setdarkRedCell(rookW[1]);
          break;
        case "Bishop":
          const bishopW = bishopWMove(props[1]);
          setredCell(bishopW[0]);
          setdarkRedCell(bishopW[1]);
          break;
        case "Queen":
          const queenW = queenWMove(props[1]);
          setredCell(queenW[0]);
          setdarkRedCell(queenW[1]);
          break;
        case "King":
          const kingW = kingWMove(props[1]);
          setredCell(kingW[0]);
          setdarkRedCell(kingW[1]);
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
      return number;
    } else if (props < 29 && eachCell[Number(props) + 10].piece[0] !== "") {
      const number = [];
      return number;
    } else {
      const number = [Number(props) + 10];
      return number;
    }
  };
  const pawnBKill = (props) => {
    let rightDigit = Math.floor((props / 1) % 10);
    if (rightDigit < 2) {
      const kill = [Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "white";
      });
      return killNumber;
    } else if (rightDigit > 7) {
      const kill = [Number(props) + 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "white";
      });
      return killNumber;
    } else {
      const kill = [Number(props) + 9, Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "white";
      });
      return killNumber;
    }
  };
  //find all possible darkredspot array
  const pawnBPossibleKill = (props) => {
    let rightDigit = Math.floor((props / 1) % 10);
    if (rightDigit < 2) {
      const kill = [Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "black";
      });
      return killNumber;
    } else if (rightDigit > 7) {
      const kill = [Number(props) + 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "black";
      });
      return killNumber;
    } else {
      const kill = [Number(props) + 9, Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "black";
      });
      return killNumber;
    }
  };
  const pawnBSelfPossibleKill = (props) => {
    let rightDigit = Math.floor((props / 1) % 10);
    if (rightDigit < 2) {
      const kill = [Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "black";
      });
      return killNumber;
    } else if (rightDigit > 7) {
      const kill = [Number(props) + 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "black";
      });
      return killNumber;
    } else {
      const kill = [Number(props) + 9, Number(props) + 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "black";
      });
      return killNumber;
    }
  };
  //white pawn move function
  const pawnWMove = (props) => {
    // const number=[]
    // const kill=[]
    if (props > 70 && eachCell[Number(props) - 10].piece[0] === "") {
      // to avoid 1st move of pawn is 2 rows
      const number = [Number(props) - 10, Number(props) - 20];
      return number;
    } else if (props > 70 && eachCell[Number(props) - 10].piece[0] !== "") {
      const number = [];
      return number;
    } else {
      const number = [Number(props) - 10];
      return number;
    }
  };
  const pawnWPossibleKill = (props) => {
    if (Math.floor((props / 1) % 10) < 2) {
      const kill = [Number(props) - 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "white";
      });
      return killNumber;
    } else if (Math.floor((props / 1) % 10) > 7) {
      const kill = [Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "white";
      });
      return killNumber;
    } else {
      const kill = [Number(props) - 9, Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] !== "white";
      });
      return killNumber;
    }
  };
  const pawnWKill = (props) => {
    if (Math.floor((props / 1) % 10) < 2) {
      const kill = [Number(props) - 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "black";
      });
      return killNumber;
    } else if (Math.floor((props / 1) % 10) > 7) {
      const kill = [Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "black";
      });
      return killNumber;
    } else {
      const kill = [Number(props) - 9, Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "black";
      });
      return killNumber;
    }
  };
  const pawnWSelfPossibleKill = (props) => {
    if (Math.floor((props / 1) % 10) < 2) {
      const kill = [Number(props) - 9];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "white";
      });
      return killNumber;
    } else if (Math.floor((props / 1) % 10) > 7) {
      const kill = [Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "white";
      });
      return killNumber;
    } else {
      const kill = [Number(props) - 9, Number(props) - 11];
      const killNumber = kill.filter((element) => {
        return eachCell[element].piece[1] === "white";
      });
      return killNumber;
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

    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "white"; //filterin number array if that cell is white
    });
    return [number, killNumber];
  };
  const knightBSelfMove = (props) => {
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
      } else if (eachCell[element].piece[1] === "white") {
        return false; //if already any black piece is present is possible squares
      } else {
        return true; //if above both conditions are rejected then this is true
      }
    });

    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "black"; //filterin number array if that cell is white
    });
    return killNumber;
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
    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "black";
    });
    return [number, killNumber];
  };
  const knightWSelfMove = (props) => {
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
      } else if (eachCell[element].piece[1] === "black") {
        return false;
      } else {
        return true;
      }
    });
    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "white";
    });
    return killNumber;
  };
  //black rook move
  const rookBMove = (props) => {
    const number = [];
    const kill = [];
    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      // setredCell((prev) => [...prev, index]);

      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "white") {
        // setdarkRedCell((prev) => [...prev, index]);
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    return [number, kill];
  };
  const rookBSelfMove = (props) => {
    const kill = [];

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "black") {
        // setdarkRedCell((prev) => [...prev, index]);
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    return kill;
  };
  //white rook move
  const rookWMove = (props) => {
    const number = [];
    const kill = [];
    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "black") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    return [number, kill];
  };
  const rookWSelfMove = (props) => {
    const kill = [];

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "white") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    return kill;
  };
  const bishopBMove = (props) => {
    const number = [];
    const kill = [];
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    return [number, kill];
  };
  const bishopBSelfMove = (props) => {
    const kill = [];

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "black") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    return kill;
  };
  const bishopWMove = (props) => {
    const number = [];
    const kill = [];
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    return [number, kill];
  };
  const bishopWSelfMove = (props) => {
    const kill = [];

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "white") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    return kill;
  };
  const queenBMove = (props) => {
    const number = [];
    const kill = [];
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "white") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    return [number, kill];
  };
  const queenBSelfMove = (props) => {
    const kill = [];

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "black") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "black") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    return kill;
  };
  const queenWMove = (props) => {
    // return [number, kill];
    // kill.push(index);
    // number.push(index);
    const number = [];
    const kill = [];
    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index--
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    // console.log(redCell);
    for (
      let index = Number(props) - 10;
      index > 10 && index < 89;
      index = index - 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 10;
      index > 10 && index < 89;
      index = index + 10
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    // console.log(redCell);

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "black") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    /////////////////
    for (
      let index = Number(props) + 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }

    for (
      let index = Number(props) - 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) - 11;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index - 11
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
    }
    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[0] !== "") {
        break;
      }
      number.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "white") {
        break;
      }
    }
    return [number, kill];
  };
  const queenWSelfMove = (props) => {
    const kill = [];

    for (
      let index = Number(props) + 1;
      Math.floor(index % 10) !== 9 && Math.floor(index % 10) !== 0;
      index++
    ) {
      if (eachCell[index].piece[1] === "white") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    /////////////////

    for (
      let index = Number(props) + 9;
      Math.floor(index % 10) !== 9 &&
      Math.floor(index % 10) !== 0 &&
      index > 10 &&
      index < 89;
      index = index + 9
    ) {
      if (eachCell[index].piece[1] === "white") {
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
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
        kill.push(index);
        break;
      }
      if (eachCell[index].piece[1] === "black") {
        break;
      }
    }
    return kill;
  };
  const kingBMove = (props) => {
    console.log(props);
    const possibleCheckCell = findCheckToBlackKing();
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
      } else if (
        eachCell[element].piece[1] === "black" ||
        eachCell[element].piece[1] === "white"
      ) {
        return false;
      } else {
        return true; //if above both conditions are rejected then this is true
      }
    });

    const number1 = number.filter((val) => !possibleCheckCell[0].includes(val));
    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "white"; //filter number array if that cell is white
    });
    const killNumber1 = killNumber.filter(
      (val) => !possibleCheckCell[1].includes(val)
    );
    return [number1, killNumber1];
  };
  const kingWMove = (props) => {
    const possibleCheckCell = findCheckToWhiteKing();
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
      } else if (
        eachCell[element].piece[1] === "white" ||
        eachCell[element].piece[1] === "black"
      ) {
        return false;
      } else {
        return true; //if above both conditions are rejected then this is true
      }
    });

    const number1 = number.filter((val) => !possibleCheckCell[0].includes(val));

    const killNumber = number.filter((element) => {
      return eachCell[element].piece[1] === "black"; //filter number array if that cell is white
    });
    const killNumber1 = killNumber.filter(
      (val) => !possibleCheckCell[1].includes(val)
    );
    return [number1, killNumber1];
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
    findCheckToBlackKing();
    findCheckToWhiteKing();
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
    findCheckToBlackKing();
    findCheckToWhiteKing();
    setfindcheckKill(!findcheckKill);
    setturn(!turn);
  };
  const movenow = () => {
    if (
      arrayOfCheckCellsToBlackKing.length !== 0 ||
      arrayOfCheckCellsToWhiteKing.length !== 0
    ) {
      checkBeforeMove(futureValue, previousValue, Number(futureSelectedCell));
    }
  };
  const killnow = () => {
    if (
      arrayOfCheckCellsToBlackKing.length !== 0 ||
      arrayOfCheckCellsToWhiteKing.length !== 0
    ) {
      checkBeforeKill(futureValue, previousValue, Number(futureSelectedCell));
    } else {
      turn
        ? setcapturedPiecesByBlack((prev) => [...prev, futureValue])
        : setcapturedPiecesByWhite((prev) => [...prev, futureValue]);
    }
  };

  const checkBeforeMove = (a, b, props) => {
    if (turn && arrayOfCheckCellsToBlackKing.length !== 0) {
      makeMoveUndo(a, b, props);
    } else if (!turn && arrayOfCheckCellsToWhiteKing.length !== 0) {
      makeMoveUndo(a, b, props);
    }
  };

  const checkBeforeKill = (a, b, props) => {
    if (turn && arrayOfCheckCellsToBlackKing.length !== 0) {
      makeKillUndo(a, b, props);
    } else if (!turn && arrayOfCheckCellsToWhiteKing.length !== 0) {
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
  const findCheckToBlackKing = () => {
    const newEachcell = eachCell;
    setarrayOfCheckCellsToBlackKing([]);
    const allPossibleMoveCellOfWhite = [];
    const allPossibleKillCellOfWhite = [];
    const allPossibleSelfKillCellOfWhite = [];
    const allKillCellByWhite = [];

    Object.keys(newEachcell).forEach((element, id) => {
      if (newEachcell[element].piece[1] === "white") {
        switch (newEachcell[element].piece[0]) {
          case "Pawn":
            const darkRed1 = pawnWMove(newEachcell[element].cellNumber);
            allPossibleMoveCellOfWhite.push(...darkRed1);
            const darkRed = pawnWPossibleKill(newEachcell[element].cellNumber);
            allPossibleKillCellOfWhite.push(...darkRed);
            const darkRed2 = pawnWSelfPossibleKill(
              newEachcell[element].cellNumber
            );
            allPossibleSelfKillCellOfWhite.push(...darkRed2);

            const darkred3 = pawnWKill(newEachcell[element].cellNumber);
            allKillCellByWhite.push(...darkred3);

            const killNumberPawn = darkRed.filter((element) => {
              if (
                eachCell[element].piece[1] === "black" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberPawn.length !== 0) {
              setarrayOfCheckCellsToBlackKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }

            break;
          case "Rook":
            const rookB = rookWMove(newEachcell[element].cellNumber);
            const rookB2 = rookWSelfMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfWhite.push(...rookB[0]);
            allPossibleSelfKillCellOfWhite.push(...rookB2);
            allPossibleMoveCellOfWhite.push(...rookB[0]);
            allKillCellByWhite.push(...rookB[1]);
            const killNumberRook = rookB[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "black" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberRook.length !== 0) {
              setarrayOfCheckCellsToBlackKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }

            break;
          case "Bishop":
            const bishopB = bishopWMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfWhite.push(...bishopB[0]);
            const bishopB2 = bishopWSelfMove(newEachcell[element].cellNumber);
            allPossibleSelfKillCellOfWhite.push(...bishopB2);
            allPossibleMoveCellOfWhite.push(...bishopB[0]);
            allKillCellByWhite.push(...bishopB[1]);
            const killNumberBishop = bishopB[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "black" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberBishop.length !== 0) {
              setarrayOfCheckCellsToBlackKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }

            break;
          case "Knight":
            const knightB = knightWMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfWhite.push(...knightB[0]);
            const knightB2 = knightWSelfMove(newEachcell[element].cellNumber);
            allPossibleSelfKillCellOfWhite.push(...knightB2);
            allPossibleMoveCellOfWhite.push(...knightB[0]);
            allKillCellByWhite.push(...knightB[1]);
            const killNumberKnight = knightB[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "black" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberKnight.length !== 0) {
              setarrayOfCheckCellsToBlackKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }
            break;
          case "Queen":
            const queenB = queenWMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfWhite.push(...queenB[0]);
            const queenB2 = queenWSelfMove(newEachcell[element].cellNumber);
            allPossibleSelfKillCellOfWhite.push(...queenB2);
            allPossibleMoveCellOfWhite.push(...queenB[0]);
            allKillCellByWhite.push(...queenB[1]);
            const killNumberQueen = queenB[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "black" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberQueen.length !== 0) {
              setarrayOfCheckCellsToBlackKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }
            break;
          default:
            break;
        }
      }
    });
    console.log(
      "allPossibleKillCellOfWhite",
      allPossibleKillCellOfWhite,
      "allPossibleSelfKillCellOfWhite",
      allPossibleSelfKillCellOfWhite,
      "allPossibleMoveCellOfWhite",
      allPossibleMoveCellOfWhite,
      "allKillCellByWhite",
      allKillCellByWhite,
      "arrayOfCheckCellsToBlackKing",
      arrayOfCheckCellsToBlackKing,
      blackKingPosition
    );
    return [
      allPossibleKillCellOfWhite,
      allPossibleSelfKillCellOfWhite,
      allPossibleMoveCellOfWhite,
      allKillCellByWhite,
      blackKingPosition,
    ];
  };
  //find all black pieces who can give check to white king
  const findCheckToWhiteKing = () => {
    const newEachcell = eachCell;
    setarrayOfCheckCellsToWhiteKing([]);
    const allPossibleKillCellOfBlack = [];
    const allPossibleSelfKillCellOfBlack = [];
    const allPossibleMoveCellOfBlack = [];
    const allKillCellByBlack = [];

    Object.keys(newEachcell).forEach((element) => {
      if (newEachcell[element].piece[1] === "black") {
        switch (newEachcell[element].piece[0]) {
          case "Pawn":
            const darkRed1 = pawnBMove(newEachcell[element].cellNumber);
            allPossibleMoveCellOfBlack.push(...darkRed1);
            const darkRed = pawnBPossibleKill(newEachcell[element].cellNumber);
            allPossibleKillCellOfBlack.push(...darkRed);
            const darkRed2 = pawnBSelfPossibleKill(
              newEachcell[element].cellNumber
            );
            allPossibleSelfKillCellOfBlack.push(...darkRed2);
            const darkred3 = pawnBKill(newEachcell[element].cellNumber);
            allKillCellByBlack.push(...darkred3);

            const killNumberPawn = darkRed.filter((element) => {
              if (
                eachCell[element].piece[1] === "white" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberPawn.length !== 0) {
              setarrayOfCheckCellsToWhiteKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }

            break;
          case "Rook":
            const rookW = rookBMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfBlack.push(...rookW[0]);
            const rookW2 = rookBSelfMove(newEachcell[element].cellNumber);
            allPossibleSelfKillCellOfBlack.push(...rookW2);
            allPossibleMoveCellOfBlack.push(...rookW[0]);
            allKillCellByBlack.push(...rookW[1]);
            const killNumberRook = rookW[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "white" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberRook.length !== 0) {
              setarrayOfCheckCellsToWhiteKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }
            break;
          case "Bishop":
            const bishopW = bishopBMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfBlack.push(...bishopW[0]);
            const bishopW2 = bishopBSelfMove(newEachcell[element].cellNumber);
            allPossibleSelfKillCellOfBlack.push(...bishopW2);
            allPossibleMoveCellOfBlack.push(...bishopW[0]);
            allKillCellByBlack.push(...bishopW[1]);
            const killNumberBishop = bishopW[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "white" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberBishop.length !== 0) {
              setarrayOfCheckCellsToWhiteKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }
            break;
          case "Knight":
            const knightW = knightBMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfBlack.push(...knightW[0]);
            const knightW2 = knightBSelfMove(newEachcell[element].cellNumber);
            allPossibleSelfKillCellOfBlack.push(...knightW2);
            allPossibleMoveCellOfBlack.push(...knightW[0]);
            allKillCellByBlack.push(...knightW[1]);
            const killNumberKnight = knightW[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "white" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberKnight.length !== 0) {
              setarrayOfCheckCellsToBlackKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }
            break;
          case "Queen":
            const queenW = queenBMove(newEachcell[element].cellNumber);
            allPossibleKillCellOfBlack.push(...queenW[0]);
            const queenW2 = queenBSelfMove(newEachcell[element].cellNumber);
            allPossibleSelfKillCellOfBlack.push(...queenW2);
            allPossibleMoveCellOfBlack.push(...queenW[0]);
            allKillCellByBlack.push(...queenW[1]);
            const killNumberQueen = queenW[1].filter((element) => {
              if (
                eachCell[element].piece[1] === "white" &&
                eachCell[element].piece[0] === "King"
              ) {
                return true;
              }
            });
            if (killNumberQueen.length !== 0) {
              setarrayOfCheckCellsToBlackKing((prev) => [
                ...prev,
                newEachcell[element].cellNumber,
              ]);
            }
            break;
          default:
            break;
        }
      }
    });
    console.log(
      "allPossibleKillCellOfBlack",
      allPossibleKillCellOfBlack,
      "allPossibleSelfKillCellOfBlack",
      allPossibleSelfKillCellOfBlack,
      "allPossibleMoveCellOfBlack",
      allPossibleMoveCellOfBlack,
      "allKillCellByBlack",
      allKillCellByBlack,
      "arrayOfCheckCellsToWhiteKing",
      arrayOfCheckCellsToWhiteKing,
      whitekingPosition
    );
    return [
      allPossibleKillCellOfBlack,
      allPossibleSelfKillCellOfBlack,
      allPossibleMoveCellOfBlack,
      allKillCellByBlack,
      whitekingPosition,
    ];
  };

  const displayBCheck = () => {
    setdisplayBlackCheck(false);
    if (arrayOfCheckCellsToBlackKing.length !== 0) {
      setdisplayBlackCheck(true);
    }
  };
  const displayWCheck = () => {
    setdisplayWhiteCheck(false);
    if (arrayOfCheckCellsToWhiteKing.length !== 0) {
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
  const findCheckMateToBlackKing = () => {
    if (arrayOfCheckCellsToBlackKing.length > 0) {
      const undoCkeckByKill = findCheckToBlackKing();

      const king = kingBMove(blackKingPosition);
      const killNumber1 = arrayOfCheckCellsToBlackKing.filter(
        (val) => !undoCkeckByKill[1].includes(val)
      );
      if (
        king[0].length === 0 &&
        king[1].length === 0 &&
        killNumber1.length === 0
      ) {
        alert("checkmate");
      }
      console.log(killNumber1, king);
    }
  };
  const findCheckMateToWhiteKing = () => {
    // if (arrayOfCheckCellsToWhiteKing.length > 0) {
    //   const undoCkeckByKill = findCheckToWhiteKing();
    //   const king = kingWMove(whiteKingPosition);
    //   const killNumber1 = arrayOfCheckCellsToWhiteKing.filter(
    //     (val) => !undoCkeckByKill[1].includes(val)
    //   );
    //   if (
    //     king[0].length === 0 &&
    //     king[1].length === 0 &&
    //     killNumber1.length === 0
    //   ) {
    //     alert("checkmate");
    //   }
    //   console.log(killNumber1, king);
    // }
  };
  const kingPositions = () => {
    Object.keys(eachCell).forEach((element) => {
      if (
        eachCell[element].piece[1] === "black" &&
        eachCell[element].piece[0] === "King"
      ) {
        setblackKingPosition(Number(eachCell[element].cellNumber));
      }
    });
    Object.keys(eachCell).forEach((element) => {
      if (
        eachCell[element].piece[1] === "white" &&
        eachCell[element].piece[0] === "King"
      ) {
        setwhitekingPosition(Number(eachCell[element].cellNumber));
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
