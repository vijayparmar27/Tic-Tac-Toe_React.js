import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { matchMakeThunk, popupThunk } from '../socket/socketConnectionState';

const gameManagerSlice = createSlice({
    name: "gameManager",
    initialState: {
        userId: null,
        gameBoard: ["", "", "", "", "", "", "", "", ""],
        tableState: null,
        isTurn: false,
        currentTurnIndex: null,
        currentTurnUserId: null,
        time: 0,
        isPopup: false,
        popupData: {},
        players: [],
        currentPlayer: {},
        isLoading: false,
        tableId: null,
        bootValue: null,
        winAmount: null,
        currentPlayerJoinId: null,
        isDisabledNavbar: false,
        isPlayBoardDisable: false,
        opponentData: {}
    },
    reducers: {
        loadingStart(state, action) {
            state.isLoading = true
        },
        loadingStop(state, action) {
            state.isLoading = false
        },
        DisabledNavbar(state, action) {
            state.isDisabledNavbar = true
        },
        enableNavbar(state, action) {
            state.isDisabledNavbar = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(matchMakeThunk.fulfilled, (state, action) => {

                let data = JSON.parse(action.payload.data)
                data = data.data
                state.userId = action.payload.id
                state.tableId = data.tableId
                state.tableState = data.tableState
                state.bootValue = data.bootValue
                state.winAmount = data.winAmount
                state.players = data.players
                state.currentPlayerJoinId = data.currentPlayerId

                for (const player of data.players) {
                    if (state.userId == player.userId) {
                        state.currentPlayer = player
                    } else {
                        state.opponentData = player
                    }
                }
            })
            .addCase(popupThunk.fulfilled, (state, action) => {
                let data = JSON.parse(action.payload)
                data = data.data
                state.isPopup = true
                state.popupData = data
            })
    }
})

export const { DisabledNavbar, enableNavbar, loadingStart, loadingStop } = gameManagerSlice.actions

export default gameManagerSlice.reducer;