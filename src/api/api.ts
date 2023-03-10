import axios from "axios";

export const BASE_URL = "https://webknox-jokes.p.rapidapi.com/jokes/"

const handleResponse = (res: any) => {
    console.log(res);
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

const options = {
    params: {minRating: '8', maxLength: '100'},
    headers: {
        'X-RapidAPI-Key': '1d2cff9962mshccbf2d8215af5b2p14ca48jsn0e441e2be94f',
        'X-RapidAPI-Host': 'webknox-jokes.p.rapidapi.com'
    }
}

export function getJokeData() {
    return axios.get(`${BASE_URL}random`, options)
        .then(handleResponse)
}


