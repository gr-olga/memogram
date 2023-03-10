import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    joke: ""
}
export const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        setJoke: (state, action) => {
            state.joke = action.payload
        }
    }
})
export const {setJoke} =
    appStateSlice.actions;

export default appStateSlice.reducer;