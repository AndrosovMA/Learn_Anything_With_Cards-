import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

import {RegisterActionsType, registerReducer} from "./reducers/register-reducer";
import {LoginActionsType, loginReducer} from "./reducers/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import {AppActionsType, appReducer } from "./reducers/app-reducer";
import {CardsPacksActionsType, cardsPacksReducer} from "./reducers/cards-packs-reducer";

export const reducers = combineReducers({
    loginReducer,
    registerReducer,
    appReducer,
    cardsPacksReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof reducers>

// в react 18 используем useAppDispatch вместо useDispatch
export type DispatchType  = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>()

// в react 18 используем useAppSelector вместо useSelector
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

//тип всех action-ов приложения
export type AllActionsAppType = RegisterActionsType | AppActionsType | LoginActionsType | CardsPacksActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AllActionsAppType>


// @ts-ignore
window.store = store;
