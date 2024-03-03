import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateMessage = createAsyncThunk(
    'socket/updateMessage',
    (data) => data
);

export const signupThunk = createAsyncThunk(
    'socket/signup',
    (data) => data
);
