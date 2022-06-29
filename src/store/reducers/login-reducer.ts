import {loginAPI, LoginParamsType, ResponseType} from "../../api/login-api";
import {Dispatch} from "redux";

const initialState = {}
//test commit
export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {
                ...state,
                [action.data._id]: {
                    _id: action.data._id,
                    email: action.data.email,
                    name: action.data.name,
                    avatar: action.data.avatar,
                    publicCardPacksCount: action.data.publicCardPacksCount, // количество колод

                    created: action.data.created,
                    updated: action.data.updated,
                    isAdmin: action.data.isAdmin,
                    verified: action.data.verified, // подтвердил ли почту
                    rememberMe: action.data.rememberMe,

                    error: action.data.error
                } }
        default:
            return state
    }
}

// actions creator
export const setIsLoggedInAC = (data: ResponseType) =>
    ({type: 'LOGIN/SET-IS-LOGGED-IN', data} as const)

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    loginAPI.login(data)
        .then((res) => {
            const action = setIsLoggedInAC(res.data)
            dispatch(action)
            console.log(res.data)
        })
}

// types
type InitialStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
