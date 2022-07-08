import axios from "axios";
import { instance } from "../config/config";



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
