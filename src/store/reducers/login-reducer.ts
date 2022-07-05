import {loginAPI, LoginParamsType, LoginResponseType} from "../../api/login/login-api";
import { SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {handleNetworkError} from "../../utils/error- utills";
import {AppThunk} from "../store";
import {meAPI, UpdateMeModelType} from "../../api/login/me-api";

const initialState = {
    isLoggedIn: false,
    userData: {} as LoginResponseType,
    userAvaName: {
        name: "",
        avatar: ""
    } as UpdateMeModelType
}
//test commit
export const loginReducer = (state: InitialStateType = initialState, action: LoginActionsType): InitialStateType => {
    switch (action.type) {
        case "LOGIN/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.isLoggedIn}
        case "LOGIN/SET-USER-DATA":
            return {...state, userData: action.userData}
        case "LOGIN/SET-USER-AVA-NAME":
            return {...state, userAvaName: {...state.userAvaName, ...action.model }}
        default:
            return state
    }
}

// actions creator
export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({type: 'LOGIN/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const setUserDataAC = (userData: LoginResponseType) =>
    ({type: 'LOGIN/SET-USER-DATA', userData} as const)
export const setUserAvaNameAC = (model: UpdateMeModelType) =>
    ({type: 'LOGIN/SET-USER-AVA-NAME', model} as const)

// thunks
export const loginTC = (data: LoginParamsType): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    loginAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setUserDataAC(res.data))
            const model: UpdateMeModelType = {
                name: res.data.name,
                avatar: res.data.avatar
            }
            dispatch(setUserAvaNameAC(model))
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}
export const logoutTC = (): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    meAPI.logout()
        .then((res) => {
            dispatch(setIsLoggedInAC(false))
        })
        // .catch((error) => {
        //     handleNetworkError(error, dispatch)
        // })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}
export const updateMeTC = (model: UpdateMeModelType): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    meAPI.updateMe(model)
        .then((res) => {
            const model: UpdateMeModelType = {
                name: res.data.name,
                avatar: res.data.avatar
            }
            dispatch(setUserAvaNameAC(model))
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}




// types
type InitialStateType = typeof initialState
export type LoginActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setUserAvaNameAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
