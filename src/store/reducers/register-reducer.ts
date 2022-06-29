import {AppThunk} from "../store";
import {registerAPI, RegisterParamsType} from "../../api/register-api";

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
    registerAPI.register(data)
        .then((res) => {
            dispatch(setIsRegisteredIn(true))
        })
}


// types
type InitialStateType = typeof initialState
export type RegisterActionsType = ReturnType<typeof setIsRegisteredIn>
