import {Dispatch} from "redux";
import {forgotPasswordAPI, ForgotPasswordType} from "../../api/login/forgotPassword-api";
import {setNewPasswordAPI, SetNewPasswordType} from "../../api/login/setNewPassword-api";

const initialState = {}
const linkMessage = {
    message: `<div style="background-color: lime; padding: 15px">
                password recovery link: 
                <a href='http://localhost:3000/#/set-new-password/$token$/'>
                link</a>
               </div>`
}

export const forgotPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FORGOT-PASSWORD":
            return {...state}
        default:
            return state
    }
}

// actions creator
export const setForgotPasswordAC = () =>
    ({type: "FORGOT-PASSWORD"} as const)

// thunks
export const forgotPasswordTC = (email: string) => (dispatch: Dispatch<ActionsType>) => {
    const data: ForgotPasswordType = {email, ...linkMessage}
    localStorage.setItem('statusForgotPassword', 'true');

    forgotPasswordAPI.forgot(data)
        .then((res) => {
            dispatch(setForgotPasswordAC())
        })
}

export const setNewPasswordTC = (password: string, token: string) => (dispatch: Dispatch<ActionsType>) => {
    const data: SetNewPasswordType = {password: password, resetPasswordToken: token}

    setNewPasswordAPI.setPassword(data)
        .then((res) => {
            dispatch(setForgotPasswordAC())
        })
}


// types
type InitialStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof setForgotPasswordAC>

