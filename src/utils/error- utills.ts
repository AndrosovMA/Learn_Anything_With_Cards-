import axios, {AxiosError} from "axios";
import {Dispatch} from "redux";
import {setAppErrorAC, SetAppErrorActionType} from "../store/reducers/app-reducer";

export const handleNetworkError = (error: Error | AxiosError, dispatch: Dispatch<ErrorActionType>) => {
    const errorMessage = axios.isAxiosError(error)
        ? (error.response?.data as { error: string }).error
        : error.message + ', more details in the console'


    dispatch(setAppErrorAC(errorMessage))
}

type ErrorActionType = SetAppErrorActionType
