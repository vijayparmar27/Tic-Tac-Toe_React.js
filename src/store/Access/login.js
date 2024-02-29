import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { END_POINT } from '../../constants/endPoints';

export const loginApi = createAsyncThunk(
    'loginApi',
    async (data, { getState, extra: api }) => {
        try {
            console.log(`---- data :: `,data)
            const userData = await api.post(END_POINT.LOGIN,data);
            return userData.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null, // Initialize userData to null or an appropriate initial value
    },
    reducers: {
        // Add regular action creators here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(loginApi.fulfilled, (state, action) => {
            console.log(`----------------::: action.payload :: `, action.payload)
            // state.userData = action.payload;
        })
        .addCase(loginApi.pending, (state) => {
            console.log(`-----------`)
            // state.error = null;   // Reset error state
            // state.loading = true; // Set loading state to true while fetching
        })
        .addCase(loginApi.rejected, (state, action) => {
            console.log(`----------- :: 1`)
            // state.loading = false;           // Reset loading state
            // state.error = action.error.message; // Update error state
        });
    },
    
});

export default userSlice.reducer;
