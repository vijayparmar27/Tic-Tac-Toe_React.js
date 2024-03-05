import React, { useState } from "react";
import "./TicTacToeBoard.css";
import ProfilePictureWithTimer from "./ProfilePictureWithTimer ";
import PlayerProfilePictureWithTimer from "./PlayerProfilePictureWithTimer";
import { useSelector, useDispatch } from "react-redux";
import { popup } from "../../components/popup/popup";
import MessagePopup from "../../components/popup/MessagePopup";
import { EVENTS } from "../../constants";
import { sendEvent } from "../../store/socket/socket";
import ScoreBoard from "./ScoreBoard";

const TicTacToeBoard = () => {
  // Initialize the board state with an array of 9 null values
  const dispatch = useDispatch();

  const board = useSelector((state) => state.gameManager.gameBoard);
  const isPopup = useSelector((state) => state.gameManager.isPopup);
  const isInfoPopup = useSelector((state) => state.gameManager.isInfoPopup);
  const isScoreboard = useSelector((state) => state.gameManager.isScoreboard);
  const popupData = useSelector((state) => state.gameManager.popupData);
  const currentTurnUserId = useSelector(
    (state) => state.gameManager.currentTurnUserId
  );
  const userData = useSelector((state) => state.gameManager.currentPlayer);

  // Function to handle cell click
  const handleCellClick = (index) => {
    if (currentTurnUserId && currentTurnUserId == userData?.userId) {
      dispatch(
        sendEvent({
          event: EVENTS.TAKE_TURN,
          data: {
            index: index,
          },
        })
      );
    } else {
      // tooltip
    }
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
          {/* {<ScoreBoard />} */}
          {isScoreboard && <ScoreBoard />}
          {isPopup && popup(popupData.popupType)}
          {isInfoPopup && <MessagePopup data={{ timer: 3, msg: "" }} />}
          <ProfilePictureWithTimer />
          <div className="board">{renderCells()}</div>
          <PlayerProfilePictureWithTimer />
        </div>
      </div>
    </>
  );
};

export default TicTacToeBoard;
