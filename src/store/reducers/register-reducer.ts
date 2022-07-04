import {AppThunk} from "../store";
import {registerAPI, RegisterParamsType} from "../../api/login/register-api";
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {handleNetworkError} from "../../utils/error- utills";

const initialState = {
    isRegisteredIn: false
}

export const registerReducer =
    (state: InitialStateType = initialState, action: RegisterActionsType): InitialStateType => {
    switch (action.type) {
        case 'REGISTER/SET-IS-REGISTERED-IN':
            return {...state, isRegisteredIn: action.isRegisteredIn}
        default:
            return state
    }
}

// actions creator
const setIsRegisteredIn = (isRegisteredIn: boolean) =>
    ({type: 'REGISTER/SET-IS-REGISTERED-IN', isRegisteredIn} as const)


// thunks
export const register = (data: RegisterParamsType): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    registerAPI.register(data)
        .then((res) => {
            dispatch(setIsRegisteredIn(true))
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
export type RegisterActionsType =
    ReturnType<typeof setIsRegisteredIn>
    | SetAppStatusActionType
    | SetAppErrorActionType
