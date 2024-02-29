// api.js
// Define your custom API service
export const myCustomApiService = {
    // Your API functions go here
    fetchUserData: async (userId) => {
      // Example API call
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const data = await response.json();
      return data;
    },
  };
  
  // reducer.js
  // Your root reducer goes here
  
  // store.js
  // Configure the Redux store with the custom API service
  import { configureStore } from '@reduxjs/toolkit';
  import rootReducer from './reducer';
  import { myCustomApiService } from './api';
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: myCustomApiService,
        },
      }),
  });
  
  // actions.js
  // Create actions and thunks that use the custom API service
  import { createSlice } from '@reduxjs/toolkit';
  
  // Example slice with actions and a thunk
  const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
      // Add regular action creators here if needed
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        // Handle the fulfilled state when the API call is successful
        // Update the state with the fetched user data
        state.userData = action.payload;
      });
    },
  });
  
  // Thunk function to fetch user data
  export const fetchUser = (userId) => async (dispatch, getState, api) => {
    try {
      // You can use the custom API service here
      const userData = await api.fetchUserData(userId);
  
      // Dispatch an action when the data is successfully fetched
      dispatch(fetchUser.fulfilled(userData));
    } catch (error) {
      // Handle errors if needed
      console.error('Error fetching user data:', error);
    }
  };
  
  // Export actions and reducer
  export const { actions, reducer } = userSlice;
  export default reducer;
  

//   export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, { dispatch, getState, api }) => {
//     try {
//         console.log("=================");
//         console.log("================= dispatch :: ",dispatch);
//         console.log("================= getState :: ",getState);
//         console.log("================= api :: ",api);
//         // You can use the custom API service here
//         const userData = await api.get("http://localhost:3001/test");
//         console.log(`---------- userData :: `, userData.data);
//         // Dispatch the action with the fetched user data
//         // dispatch(register(userData.data));
//         return userData.data;
//     } catch (error) {
//         // Handle errors if needed
//         console.error('Error fetching user data:', error);
//     }
// });