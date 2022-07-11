import axios from "axios";

// https://neko-back.herokuapp.com/2.0
export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})
