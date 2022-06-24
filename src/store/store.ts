import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";

import {registerReducer} from "./reducers/register-reducer";
import {loginReducer} from "./reducers/login-reducer";

export const reducers = combineReducers({
    loginReducer,
    registerReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store;