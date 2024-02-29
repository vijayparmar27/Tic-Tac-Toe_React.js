import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { END_POINT } from '../../constants/endPoints';
import Cookies from 'js-cookie'
import showToast from '../../components/Toaster';

export const loginApi = createAsyncThunk(
    'loginApi',
    async (data, { getState, extra: api }) => {
        try {
            console.log(`---- data :: `, data)
            const userData = await api.post(END_POINT.LOGIN, data);
            return userData.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }
);
export const registerApi = createAsyncThunk(
    'registerApi',
    async (data, { getState, extra: api }) => {
        try {
            const apiData = await api.post(END_POINT.SIGN_UP, data);
            return apiData.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }
);

const accessSlice = createSlice({
    name: 'access',
    initialState: {
        userData: null,
        error: null,
        loading: null
    },
    reducers: {
        // Add regular action creators here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginApi.fulfilled, (state, action) => {
                Cookies.set(`token`, action.payload?.data.accessToken, { path: "/", expires: 1 / 2 })
                state.userData = action.payload?.data?.userInfo
                showToast('Login Success', 'success', "response.message");
            })
            .addCase(loginApi.pending, (state) => {
            })
            .addCase(loginApi.rejected, (state, action) => {
                showToast('Login Success', 'error', "somthing want wrong !");
            });

        builder
            .addCase(registerApi.fulfilled, (state, action) => {
            })
            .addCase(registerApi.pending, (state) => {
            })
            .addCase(registerApi.rejected, (state, action) => {
            });
    },

});

export const userData = (state) => state.access.userData;

export default accessSlice.reducer;
