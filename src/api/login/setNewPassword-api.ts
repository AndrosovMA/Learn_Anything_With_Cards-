
import {instance} from "../config/config";



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
