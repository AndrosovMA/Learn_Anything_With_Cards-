
const initialState = {}

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state}
        default:
            return state
    }
}

// actions creator
const test = 'test';

// thunks


// types
type InitialStateType = typeof initialState

