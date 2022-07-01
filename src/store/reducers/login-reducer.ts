import {loginAPI, LoginParamsType, LoginResponseType} from "../../api/login-api";
import {Dispatch} from "redux";
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {AxiosError} from "axios";
import {handleNetworkError} from "../../utils/error- utills";

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

        // case 'LOGIN/SET-IS-LOGGED-IN':
        //     return {
        //         ...state,
        //         [action.data._id]: {
        //             _id: action.data._id,
        //             email: action.data.email,
        //             name: action.data.name,
        //             avatar: action.data.avatar,
        //             publicCardPacksCount: action.data.publicCardPacksCount, // количество колод
        //
        //             created: action.data.created,
        //             updated: action.data.updated,
        //             isAdmin: action.data.isAdmin,
        //             verified: action.data.verified, // подтвердил ли почту
        //             rememberMe: action.data.rememberMe,
        //
        //             error: action.data.error
        //         } }
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
    dispatch(setAppStatusAC("loading"))
    loginAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setUserDataAC(res.data))
            dispatch(setUserNameAC(res.data.name))

            // const action = setIsLoggedInAC(res.data)
            // dispatch(action)
            // console.log(res.data)
        })
        .catch((eroor) => {
            handleNetworkError(eroor, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}

// types
type InitialStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setUserNameAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
