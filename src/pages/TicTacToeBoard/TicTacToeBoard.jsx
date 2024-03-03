import React, { useState } from "react";
import "./TicTacToeBoard.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ProfilePictureWithTimer from "./ProfilePictureWithTimer ";
import PlayerProfilePictureWithTimer from "./PlayerProfilePictureWithTimer";
import GameStartTimer from "../../components/GameStartTimer";
import { useSelector, useDispatch } from "react-redux";
import { popup } from "../../components/popup";

const TicTacToeBoard = () => {
  // Initialize the board state with an array of 9 null values
  const [board, setBoard] = useState(Array(9).fill(null));
  const isPopup = useSelector((state) => state.gameManager.isPopup);

  // Function to handle cell click
  const handleCellClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
  };

  // Render the board with cells
  const renderCells = () => {
    return board.map((value, index) => (
      <>
        <div
          key={index}
          className="cell"
          dataset={{ index }}
          onClick={() => handleCellClick(index)}
        >
          {value}
        </div>
      </>
    ));
  };

  return (
    <>
      <div className="outlayer">
        <div className="board-container">
          {/** popup data */}
          {isPopup ? popup("TostPopUp") : ""}
          <ProfilePictureWithTimer />
          <div className="board">{renderCells()}</div>
          <PlayerProfilePictureWithTimer />
        </div>
      </div>
    </>
  );
};

export default TicTacToeBoard;
