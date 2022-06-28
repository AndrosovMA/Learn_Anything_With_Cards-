
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
const test2 = 'test';
const test3 = 'test';
const test4 = 'test';

// thunks


// types
type InitialStateType = typeof initialState

