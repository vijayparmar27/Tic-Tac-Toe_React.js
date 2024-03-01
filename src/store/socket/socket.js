import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import io from 'socket.io-client';

export const disconnectSocket = createAsyncThunk(
    'socket/disconnect',
    async (_, { dispatch, getState }) => {
        const socket = getState().socket.socket;
        if (socket) {
            await socket.disconnect();
        }
        dispatch(socketSlice.actions.disconnect()); // Dispatch a disconnect action if needed
    }
);

export const connectSocket = createAsyncThunk(
    'socket/connect',
    async (_, { dispatch }) => {
        try {
            return new Promise((resolve, reject) => {

                const socket = io('http://localhost:9000/', { transports: ['websocket', 'polling'] });

                socket.on('disconnect', () => {
                    console.log('Socket disconnected:', socket.id);

                });

                socket.onAny((event, ...args) => {
                    console.log(`Received event: ${event}`, args);
                });

                // socket.on('message', (data) => {
                //     const { event, payload } = data;
                //     console.log('Received message: data ::', data);
                //     console.log('Received message:', event, payload);
                //     dispatch(addReceivedMessage({ event, payload }));
                // });

                socket.on('connect', () => {
                    console.log('Socket connected:', socket.connected);
                    console.log('Socket ID:', socket.id);
                    // dispatch(socketSlice.actions.connect(socket));
                    resolve(socket)
                });
            })
        } catch (error) {
            console.error('Error connecting to socket:', error);
            throw error; // Re-throw the error to handle it in the reducer
        }
    }
);




export const addReceivedMessage = createAsyncThunk(
    'socket/message',
    async ({ event, payload }) => {
        return { event, payload };
    }
);

const socketSlice = createSlice({
    name: 'socket',
    initialState: {
        socket: null,
        connected: false,
        socketId: null,
        messages: [],
    },
    reducers: {
        // connect: (state, action) => {
        //     state.socket = action.payload;
        //     state.connected = true;
        //     state.socketId = action.payload.id;
        // },
        disconnect: (state) => {
            state.socket = null;
            state.connected = false;
            state.socketId = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(connectSocket.pending, (state) => {
                state.connected = false; // Reset connected state on connection attempt
            })
            .addCase(connectSocket.fulfilled, (state, action) => {
                console.log(`------- state.socket :: before :: `, state.socket?.id)
                state.socket = action.payload;
                state.connected = true;
                state.socketId = action.payload.id;
                console.log(`------- state.socket :: `, state.socket.id)

            })
            .addCase(connectSocket.rejected, (state, action) => {
                console.error('Socket connection failed:', action.error.message);
            })
            .addCase(addReceivedMessage.fulfilled, (state, action) => {
                console.log(`-------------- action.payload :: playload`, action.payload)
                state.messages.push(action.payload);
            })
            .addCase(disconnectSocket.fulfilled, (state) => {
                // Add any additional logic you need when the socket is disconnected
                console.log('Socket disconnected');
            })
    },
});

export default socketSlice.reducer;

export const useSocket = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.socket.messages);
    const connected = useSelector((state) => state.socket.connected);
    const socket = useSelector((state) => state.socket.socket);

    const connect = React.useCallback(async () => {
        await dispatch(connectSocket());
        // console.log(`-------------- io ::  `, io)
    }, [dispatch]);
    //   }, []);

    const disconnect = React.useCallback(async () => {
        await dispatch(disconnectSocket());
    }, [dispatch]);

    console.log(`-------------- sendMessage ::  `, socket)
    const sendMessage = React.useCallback(async (data) => {
        console.log(`-------------- sendMessage :: connected  `, connected)
        if (socket) {
            socket.emit('message', data);
        } else {
            console.warn('Socket is not connected. Cannot send message.');
        }
    });

    return { connected, messages, connect, disconnect, sendMessage };
};
