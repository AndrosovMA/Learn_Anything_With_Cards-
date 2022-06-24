
const initialState = {}

export const registerReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state}
        default:
            return state
    }
}

// actions creator


// thunks


// types
type InitialStateType = typeof initialState

