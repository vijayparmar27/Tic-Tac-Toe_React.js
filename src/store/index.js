import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todo/slice";
import axiosClient from "../api/axiosClient";
import login  from "./Access/login";

export const store = configureStore({
    reducer: {
        // todo: todoReducer,
        login : login
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: axiosClient,
        },
    })
});