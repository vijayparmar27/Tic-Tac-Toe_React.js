import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { matchMakeThunk, popupThunk, scoreboardThunk, selectDealerThunk, takeTurnThunk, turnThunk } from '../socket/socketConnectionState';

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
        opponentData: {},
        isInfoPopup: false,
        message: "",
        symbol: "",
        isScoreboard : false,
        scoreboardData: null
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
        },
        disablePopup(state, action) {
            state.isPopup = false
            state.popupData = {}
        },
        disableScoreboard(state, action) {
            state.isScoreboard = false
        },
        changeTableState(state, action){
            state.tableState = action.payload
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

                if (
                    data.popupType == "TostPopUp" ||
                    data.popupType == "middleToastPopup"
                ) {
                    state.isPopup = true
                    state.popupData = data
                }


            })
            .addCase(selectDealerThunk.fulfilled, (state, action) => {
                let data = JSON.parse(action.payload)
                data = data.data

                for (const player of data.playerDetails) {
                    if (state.userId === player.userId) {
                        state.symbol = player.symbol
                        break;
                    }
                }

            })
            .addCase(turnThunk.fulfilled,(state, action) => {
                let data = JSON.parse(action.payload)
                data = data.data

                state.time = data.turnTime
                state.currentTurnUserId = data.playerId
            })
            .addCase(takeTurnThunk.fulfilled,(state, action) => {
                let data = JSON.parse(action.payload)
                data = data.data

                state.gameBoard[Number(data.index)] = data.symbol
            })
            .addCase(scoreboardThunk.fulfilled,(state, action) => {
                let data = JSON.parse(action.payload)
                data = data.data
                state.isScoreboard = true
                state.scoreboardData = data.playersDetails
            })
    }
})

export const { DisabledNavbar, enableNavbar, loadingStart, loadingStop, disablePopup,disableScoreboard, changeTableState} = gameManagerSlice.actions

export default gameManagerSlice.reducer;