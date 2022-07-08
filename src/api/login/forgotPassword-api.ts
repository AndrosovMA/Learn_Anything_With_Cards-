import {instance} from "../config/config";


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
