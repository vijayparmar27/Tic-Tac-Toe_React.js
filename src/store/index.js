import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/slice";
import axiosClient from "../api/axiosClient";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: axiosClient,
        },
    })
});