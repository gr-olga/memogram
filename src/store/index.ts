import {configureStore} from "@reduxjs/toolkit";
import appStateReducer from "../store/AppState/slice";

export default configureStore({
    reducer: {
        appState: appStateReducer
    }
})