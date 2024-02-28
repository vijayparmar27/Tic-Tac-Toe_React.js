import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todo/slice";
import axiosClient from "../api/axiosClient";
import { reducer } from "./Access/login";

export const store = configureStore({
    reducer: {
        // todo: todoReducer,
        login : reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: axiosClient,
        },
    })
});