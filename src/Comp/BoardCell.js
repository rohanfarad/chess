import React from "react";
import blackBishop from "./Img/blackBishop.png";
import blackKing from "./Img/blackKing.png";
import blackRook from "./Img/blackRook.png";
import blackKnight from "./Img/blackKnight.png";
import blackPawn from "./Img/blackPawn.png";
import blackQueen from "./Img/blackQueen.png";
import whiteBishop from "./Img/whiteBishop.png";
import whiteKing from "./Img/whiteKing.png";
import whitePawn from "./Img/whitePawn.png";
import whiteQueen from "./Img/whiteQueen.png";
import whiteKnight from "./Img/whiteKnight.png";
import whiteRook from "./Img/whiteRook.png";

const BoardCell = (props) => {
  console.log("cell");
  const renderImage = () => {
    if (props.getPiece[1] === "white") {
      switch (props.getPiece[0]) {
        case "Rook":
          return <img src={whiteRook} style={{ width: "48px" }} />;
          break;
        case "Knight":
          return <img src={whiteKnight} style={{ width: "48px" }} />;
          break;
        case "Bishop":
          return <img src={whiteBishop} style={{ width: "48px" }} />;
          break;
        case "Queen":
          return <img src={whiteQueen} style={{ width: "48px" }} />;
          break;
        case "King":
          return <img src={whiteKing} style={{ width: "48px" }} />;
          break;
        case "Pawn":
          return <img src={whitePawn} style={{ width: "48px" }} />;
          break;
        case "":
          return;
          break;
        default:
          break;
      }
    } else {
      switch (props.getPiece[0]) {
        case "Rook":
          return <img src={blackRook} style={{ width: "48px" }} />;
          break;
        case "Knight":
          return <img src={blackKnight} style={{ width: "48px" }} />;
          break;
        case "Bishop":
          return <img src={blackBishop} style={{ width: "48px" }} />;
          break;
        case "Queen":
          return <img src={blackQueen} style={{ width: "48px" }} />;
          break;
        case "King":
          return <img src={blackKing} style={{ width: "48px" }} />;
          break;
        case "Pawn":
          return <img src={blackPawn} style={{ width: "48px" }} />;
          break;
        case "":
          return;
          break;
        default:
          break;
      }
    }
  };
  const clickIfSomehing = () => {
    if (props.getTurn === true && props.getPiece[1] === "white") {
      props.getClick([props.getPiece, props.getId]);
    } else if (props.getTurn === false && props.getPiece[1] === "black") {
      props.getClick([props.getPiece, props.getId]);
    }
  };

  const clickToGoPiece = () => {
    props.getMove(props.getId);
  };
  const clickToKill = () => {
    props.getKill(props.getId);
  };

  return (
    <>
      {!props.getSelectedColor && !props.getDarkRedColor && (
        <div
          onClick={clickIfSomehing}
          className={
            props.getColor === "white" ? "BoardCellWhite" : " BoardCellBlack"
          }
        >
          {renderImage()}
        </div>
      )}
      {props.getSelectedColor && !props.getDarkRedColor && (
        <div onClick={clickToGoPiece} className=" BoardCellRed">
          {renderImage()}
        </div>
      )}
      {props.getDarkRedColor && (
        <div onClick={clickToKill} className=" BoardCellDarkRed">
          {renderImage()}
        </div>
      )}
    </>
  );
};
export default React.memo(BoardCell);
