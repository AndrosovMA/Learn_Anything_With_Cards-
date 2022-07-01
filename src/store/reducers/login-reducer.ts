import {loginAPI, LoginParamsType, LoginResponseType} from "../../api/login-api";
import {Dispatch} from "redux";

const initialState = {
    isLoggedIn: false,
    userData: {} as LoginResponseType,
    userName: ""
}
//test commit
export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "LOGIN/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.isLoggedIn}
        case "LOGIN/SET-USER-DATA":
            return {...state, userData: action.userData}
        case "LOGIN/SET-USER-NAME":
            return {...state, userName: action.userName}
        default:
            return state
    }
}

// actions creator
export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({type: 'LOGIN/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const setUserDataAC = (userData: LoginResponseType) =>
    ({type: 'LOGIN/SET-USER-DATA', userData} as const)
export const setUserNameAC = (userName: string) =>
    ({type: 'LOGIN/SET-USER-NAME', userName} as const)

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    loginAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setUserDataAC(res.data))
            dispatch(setUserNameAC(res.data.name))
        })
}

// types
type InitialStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setUserNameAC>
