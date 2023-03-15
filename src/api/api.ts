import axios from "axios";

// export const BASE_URL = "https://webknox-jokes.p.rapidapi.com/jokes/"
export const BASE_URL = "http://localhost:4000/"

const handleResponse = (res: any) => {
    console.log(res);
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

export function getJokeData() {
    return axios.get(`${BASE_URL}`)
        .then(data => console.log(data))
        .then(handleResponse)
}


