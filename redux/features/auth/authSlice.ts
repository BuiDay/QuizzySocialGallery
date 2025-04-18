import { IUser } from "@/type";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";


interface IinitialState{
    token:string,
    user?:IUser
}

const initialState:IinitialState = {
    token: "",
    user: undefined,
};

const authSilce = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration:(state, action:PayloadAction<{token:string}>)=>{
            state.token = action.payload.token;
        },
        userLoggedIn:(state, action:PayloadAction<{accessToken:string,user:IUser}>)=>{
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut:(state)=>{
            state.token = "";
            state.user = undefined;
        }
    }
})

export const {userRegistration, userLoggedIn, userLoggedOut} = authSilce.actions
export default authSilce.reducer