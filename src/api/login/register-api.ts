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