import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const registerAPI = {
    register(params: RegisterParamsType) {
        return instance.post<RegisterResponseType>("auth/register", params)
    }
}

export type RegisterParamsType = {
    email: string
    password: string
}
type RegisterResponseType = {
    addedUser: {
        _id: string
        email: string
        rememberMe: boolean
        isAdmin: boolean
        name: string
        verified: boolean
        publicCardPacksCount: number
        created: string
        updated: string
        __v: number
    }
    error?: string
}



// "_id": "62baefc75961e93180e0f96c",
//     "email": "svyat5555@gmail.com",
//     "rememberMe": false,
//     "isAdmin": false,
//     "name": "svyat5555@gmail.com",
//     "verified": false,
//     "publicCardPacksCount": 0,
//     "created": "2022-06-28T12:10:47.717Z",
//     "updated": "2022-06-28T12:10:47.717Z",
//     "__v": 0