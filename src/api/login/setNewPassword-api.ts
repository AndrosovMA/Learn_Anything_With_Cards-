import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const setNewPasswordAPI = {
    setPassword (data: SetNewPasswordType) {
        return instance.post<SetNewPasswordResponseType>("/auth/set-new-password", data);
    }
}

// types
export type SetNewPasswordType = {
    password: string
    resetPasswordToken: string
}

export type SetNewPasswordResponseType = {
    info: string
    error: string;
}