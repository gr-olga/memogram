import axios from "axios";
import {setJoke} from "./slice";

export const BASE_URL = "https://webknox-jokes.p.rapidapi.com/jokes/"

export const getJokeData = async (dispatch: (arg0: { payload: any; type: "appState/setJoke"; }) => void, getState: any ) => {
    try {
        const res = await axios.get(`${BASE_URL}random`);
        const jokeData = res.data
        console.log("data,", jokeData)
        dispatch(setJoke(jokeData));
    } catch (e: any) {
        console.log(e.message)
    }
}