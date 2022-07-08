import axios from "axios";
import {instance} from "../config/config";



export const loginAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginResponseType>("auth/login", data);
    }
}


// types
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginResponseType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string

    avatar?: string

    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number,
    token: string
    tokenDeathTime: number

    error?: string
}
