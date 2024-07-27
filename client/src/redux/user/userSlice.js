import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser:null,
    error:null,
    loading:null
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state) => {
            state.loading = true;
        },
        signInSuccess:(state, action) => {
            state.currentUser=action.payload;
            // console.log("ABCHDJF",action.payload);
            state.error=null;
            state.loading=false;
        },
        signInFailure:(state, action) => {
            state.error=action.payload;
            state.loading=false;
        }

    },
})

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;

export default userSlice.reducer;
