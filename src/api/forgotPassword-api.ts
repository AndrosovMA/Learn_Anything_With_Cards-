import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const forgotPasswordAPI = {
    forgot (data: ForgotPasswordType) {
        return instance.post<ForgotPasswordResponseType>("auth/forgot", data);
    }
}

// types
export type ForgotPasswordType = {
    email: string
    message: string
}

export type ForgotPasswordResponseType = {
    info: string
    error: string;
}