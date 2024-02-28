import React, { useState } from "react";
import "./TicTacToeBoard.css";

const TicTacToeBoard = () => {
  // Initialize the board state with an array of 9 null values
  const [board, setBoard] = useState(Array(9).fill(null));

  // Function to handle cell click
  const handleCellClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
  };

  // Render the board with cells
  const renderCells = () => {
    return board.map((value, index) => (
      <div
        key={index}
        className="cell"
        dataset={{ index }}
        onClick={() => handleCellClick(index)}
      >
        {value}
      </div>
    ));
  };

  return (
    <div className="outlayer">
      <div className="board-container" >
        <div className="board">{renderCells()}</div>
      </div>
    </div>
  );
};

export default TicTacToeBoard;
