import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signupThunk, updateMessage } from "./socketConnectionState";
import { EVENTS } from "../../constants";
import { lobbyThunk } from "../Lobby/lobbySlice";

const SocketEventManage = (dispatch, event, data) => {
    console.log("---- SocketEventManage :: ", event);
    console.log(`------- data :: `, data[0], typeof data[0]);

    switch (event) {
        case "message":
            dispatch(updateMessage(data[0]));
            break;
        case EVENTS.SIGN_UP:
            dispatch(signupThunk(data[0]));
            break;
        case EVENTS.LOBBY:
            dispatch(lobbyThunk(data[0]));
            break;
        default:
            console.log("====== call default :: SocketEventManage :: ");
    }
    //   }, [event, data, dispatch]); // Dependency array

    return null; // No JSX needed
};

export default SocketEventManage;
