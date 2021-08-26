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

const ShowPieces = (props) => {
  const renderImage = () => {
    if (props.getPieces[1] === "white") {
      switch (props.getPieces[0]) {
        case "Rook":
          return (
            <img alt="whiteRook" src={whiteRook} style={{ width: "24px" }} />
          );

        case "Knight":
          return (
            <img
              alt="whiteKnight"
              src={whiteKnight}
              style={{ width: "24px" }}
            />
          );

        case "Bishop":
          return (
            <img
              alt="whiteBishop"
              src={whiteBishop}
              style={{ width: "24px" }}
            />
          );

        case "Queen":
          return (
            <img alt="whiteQueen" src={whiteQueen} style={{ width: "24px" }} />
          );

        case "King":
          return (
            <img alt="whiteKing" src={whiteKing} style={{ width: "24px" }} />
          );

        case "Pawn":
          return (
            <img alt="whitePawn" src={whitePawn} style={{ width: "24px" }} />
          );

        default:
      }
    } else {
      switch (props.getPieces[0]) {
        case "Rook":
          return (
            <img alt="blackRook" src={blackRook} style={{ width: "24px" }} />
          );
        case "Knight":
          return (
            <img
              alt="blackKnight"
              src={blackKnight}
              style={{ width: "24px" }}
            />
          );
        case "Bishop":
          return (
            <img
              alt="blackBishop"
              src={blackBishop}
              style={{ width: "24px" }}
            />
          );
        case "Queen":
          return (
            <img alt="blackQueen" src={blackQueen} style={{ width: "24px" }} />
          );
        case "King":
          return (
            <img alt="blackKing" src={blackKing} style={{ width: "24px" }} />
          );
        case "Pawn":
          return (
            <img alt="blackPawn" src={blackPawn} style={{ width: "24px" }} />
          );
        case "":
          return;
        default:
      }
    }
  };

  return (
    <>
      <div className="ShowSmallPieces">{renderImage()}</div>
    </>
  );
};
export default ShowPieces;
