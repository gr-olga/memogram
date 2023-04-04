import axios from "axios";
import {setUrl} from "../store/AppState/slice";

// export const BASE_URL = "https://webknox-jokes.p.rapidapi.com/jokes/"
export const BASE_URL = "http://localhost:4000/"

// const handleResponse = (res: any) => {
//     console.log(res);
//     if (!res.ok) {
//         return Promise.reject(`Error: ${res.status}`);
//     }
//     return res.json();
// }
//
// export function getJokeData() {
//     return async
//     {
//         const res = await axios.get(`${BASE_URL}`)
//             .then(data => console.log(data))
//             .then(handleResponse)
//     }
// }

export const getPic = () => {
    return async (dispatch: (arg0: { payload: any; type: any; }) => void, getState: any) => {
        try {
            const res = await axios.get(`${BASE_URL}`);
            dispatch(setUrl(res.data))
        } catch (error: any) {
            console.log(error.response.data.message);
        }
    }
}


