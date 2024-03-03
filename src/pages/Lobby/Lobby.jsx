import React, { useEffect } from "react";
import "./LobbyCard.css";
import { useSelector, useDispatch } from "react-redux";
import socket, { sendEvent } from "../../store/socket/socket";
import { EVENTS } from "../../constants";
import LobbyCard from "./LobbyCard";
import { lobbyData } from "../../store/Lobby/lobbySlice";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Lobby() {
  const dispatch = useDispatch();
  const lobby = useSelector(lobbyData);
  const socketIo = useSelector((state) => state.socket.socket);

  useEffect(() => {
    dispatch(sendEvent({ event: EVENTS.LOBBY, data: {} }));
  }, [socketIo]);

  return (
    <>
      <div className="outlayer">
        <div className="board-container">
          {!lobby ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            lobby?.map((info) => {
              return <LobbyCard data={info} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Lobby;
