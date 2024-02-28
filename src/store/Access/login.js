// import { END_POINT } from "../../constants";
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        // Add regular action creators here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            // Handle the fulfilled state when the API call is successful
            // Update the state with the fetched user data
            state.userData = action.payload;
        });
    },
});

export const register = () => async (dispatch, getState, api) => {
    try {
        console.log("=================")
        // You can use the custom API service here
        const userData = await api.get("http://localhost:9000/test");
        console.log(`---------- userData :: `, userData)
        // Dispatch an action when the data is successfully fetched
        dispatch(register.fulfilled(userData.data));
    } catch (error) {
        // Handle errors if needed
        console.error('Error fetching user data:', error);
    }
};

export const { actions, reducer } = userSlice;