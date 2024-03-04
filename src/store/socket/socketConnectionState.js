import { createAsyncThunk } from '@reduxjs/toolkit';
import { DisabledNavbar } from '../gameManager/gameManagerSlice';

export const updateMessage = createAsyncThunk(
    'socket/updateMessage',
    (data) => data
);

export const signupThunk = createAsyncThunk(
    'socket/signup',
    (data) => data
);
export const matchMakeThunk = createAsyncThunk(
    'socket/matchMake',
    (data, { getState,dispatch }) => {
        const userinfo = getState().access.userData;
        dispatch(DisabledNavbar())
        return { data, id: userinfo._id }
    }
);

export const popupThunk = createAsyncThunk(
    'socket/popupThunk',
    (data) => data
);

export const selectDealerThunk = createAsyncThunk(
    'socket/selectDealer',
    (data) => data
);

export const turnThunk = createAsyncThunk(
    'socket/turn',
    (data) => data
);

export const takeTurnThunk = createAsyncThunk(
    'socket/takeTurn',
    (data) => data
);

export const scoreboardThunk = createAsyncThunk(
    'socket/scoreboard',
    (data) => data
);