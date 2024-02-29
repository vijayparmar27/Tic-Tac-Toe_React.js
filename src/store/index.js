import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todo/slice";
import axiosClient from "../api/axiosClient";
import access  from "./Access/access";

export const store = configureStore({
    reducer: {
        access : access
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: axiosClient,
        },
    })
});