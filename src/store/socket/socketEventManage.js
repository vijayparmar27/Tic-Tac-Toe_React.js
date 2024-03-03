import { matchMakeThunk, popupThunk, signupThunk, updateMessage } from "./socketConnectionState";
import { EVENTS } from "../../constants";
import { lobbyThunk } from "../Lobby/lobbySlice";
import { loadingStop } from "../gameManager/gameManagerSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
            dispatch(loadingStop());
            dispatch(lobbyThunk(data[0]));
            break;
        case EVENTS.MATCH_MAKE:
            dispatch(loadingStop());
            dispatch(matchMakeThunk(data[0]));
            break;
        case EVENTS.POPUP:
            dispatch(popupThunk(data[0]));
            break;
        default:
            console.log("====== call default :: SocketEventManage :: ");
    }
    //   }, [event, data, dispatch]); // Dependency array

    return null; // No JSX needed
};

export default SocketEventManage;
