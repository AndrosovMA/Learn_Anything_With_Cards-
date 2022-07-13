import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {
    cardsPackAPI,
    CardsPackType,
    DomainCardsPackParamsType,
    CreateCardsPackPayloadType, UpdateCardsPackPayloadType
} from "../../api/cards/cards-pack-api";
import {AppThunk} from "../store";
import {handleNetworkError} from "../../utils/error- utills";

export const initialState = {
    cardsPacks: [] as CardsPackType[],
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    query_params: {
        user_id: "",
        page: 1,
        pageCount: 0,
        max: 0,
        min: 0,
        packName: "",
        sortPacks: ""
    } as DomainCardsPackParamsType
};

export const cardsPacksReducer =
    (state: InitialStateType = initialState, action: CardsPacksActionsType): InitialStateType => {
        switch (action.type) {
            case 'CARDS/SET-CARDS-PACKS':
                return {...state, cardsPacks: action.cardsPacks};
            case "CARDS/SET-CARDS-PACKS-TOTAL-COUNT":
                return {...state, cardPacksTotalCount: action.cardPacksTotalCount};
            case "CARDS/SET-MIN-CARDS-COUNT":
                return {...state, minCardsCount: action.minCardsCount};
            case "CARDS/SET-MAX-CARDS-COUNT":
                return {...state, maxCardsCount: action.maxCardsCount};
            /***********/
            case "CARDS/SET-SEARCH":
                return {...state, query_params: {...state.query_params, packName: action.searchValue}};

            case 'CARDS/SET-USER-ID':
                return {...state, query_params: {...state.query_params, user_id: action.value}};

            case 'CARDS/SET-QUERY-PARAMS':
                return {...state, query_params: {...state.query_params, ...action.newParams}};

            default:
                return state
        }
    }

// actions
export const setCardsPacksAC = (cardsPacks: CardsPackType[]) =>
    ({type: 'CARDS/SET-CARDS-PACKS', cardsPacks} as const);
export const setCardPacksTotalCountAC = (cardPacksTotalCount: number) =>
    ({type: 'CARDS/SET-CARDS-PACKS-TOTAL-COUNT', cardPacksTotalCount} as const);
export const setMinCardsCountAC = (minCardsCount: number) =>
    ({type: 'CARDS/SET-MIN-CARDS-COUNT', minCardsCount} as const);
export const setMaxCardsCountAC = (maxCardsCount: number) =>
    ({type: 'CARDS/SET-MAX-CARDS-COUNT', maxCardsCount} as const);
export const setSearchAC = (searchValue: string) =>
    ({type: 'CARDS/SET-SEARCH', searchValue} as const);
export const setUserId = (value: string | null) =>
    ({type: 'CARDS/SET-USER-ID', value} as const);
export const setQueryParams = (newParams: DomainCardsPackParamsType,) =>
    ({type: 'CARDS/SET-QUERY-PARAMS', newParams} as const);

export const getCardsPacsTC = (): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC("loading"))
    const params = getState().cardsPacksReducer.query_params
    cardsPackAPI.getCardsPacks(params)
        .then((res) => {
            dispatch(setCardsPacksAC(res.data.cardPacks));
            dispatch(setCardPacksTotalCountAC(res.data.cardPacksTotalCount));
            dispatch(setMinCardsCountAC(res.data.minCardsCount));
            dispatch(setMaxCardsCountAC(res.data.maxCardsCount));
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}

export const createCardsPackTC = (payload: CreateCardsPackPayloadType): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    cardsPackAPI.createCardsPack(payload)
        .then(() => {
            dispatch(getCardsPacsTC())
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}
export const updateCardsPackTC = (payload: UpdateCardsPackPayloadType): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    cardsPackAPI.updateCardsPack(payload)
        .then(() => {
            dispatch(getCardsPacsTC())
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}

export const deleteCardsPackTC = (id: string): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    cardsPackAPI.deleteCardsPack(id)
        .then(() => {
            dispatch(getCardsPacsTC())
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}


//type
type InitialStateType = typeof initialState

export type CardsPacksActionsType =
    | ReturnType<typeof setCardsPacksAC>
    | ReturnType<typeof setCardPacksTotalCountAC>
    | ReturnType<typeof setMinCardsCountAC>
    | ReturnType<typeof setMaxCardsCountAC>
    | ReturnType<typeof setSearchAC>
    | ReturnType<typeof setUserId>
    | ReturnType<typeof setQueryParams>
    | SetAppStatusActionType
    | SetAppErrorActionType
