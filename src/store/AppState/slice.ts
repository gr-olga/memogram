import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    joke: "",
    picture: ""
}
export const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        setJoke: (state, action) => {
            state.joke = action.payload
        },
        setUrl:(state, action)=>{
            state.picture = action.payload.url
        }
    }
})
export const {setJoke, setUrl} =
    appStateSlice.actions;

export default appStateSlice.reducer;