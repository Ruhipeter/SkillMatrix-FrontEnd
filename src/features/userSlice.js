import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  user:[],
};




export const UserSlice = createSlice({
  name: 'User',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    UserDetails: (state,action) => {
      
      state.user.push(action.payload);
    },
    
  },
  
});

export const { UserDetails } = UserSlice.actions;


export const selectUser = (state) => state.user;



export default UserSlice.reducer;
