import { createSlice } from "@reduxjs/toolkit";

interface ThemeState{
    mode:string;
}

const initialState:ThemeState={
    mode:'dark',
};

const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toogleTheme:(state)=>{
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
    },
});

export const {toogleTheme} = themeSlice.actions;
export default themeSlice.reducer;