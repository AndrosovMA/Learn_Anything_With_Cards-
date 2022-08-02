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
        pageCount: 5,
        max:103,
        min: 0,
        packName: "",
        sortPacks: "0updated"
    } as DomainCardsPackParamsType
};

export const cardsPacksReducer =
    (state: InitialStateType = initialState, action: CardsPacksActionsType): InitialStateType => {
        switch (action.type) {
            case 'CARDS-PACKS/SET-CARDS-PACKS':
                return {...state, cardsPacks: action.cardsPacks};
            case "CARDS-PACKS/SET-CARDS-PACKS-TOTAL-COUNT":
                return {...state, cardPacksTotalCount: action.cardPacksTotalCount};
            case "CARDS-PACKS/SET-MIN-CARDS-COUNT":
                return {...state, minCardsCount: action.minCardsCount};
            case "CARDS-PACKS/SET-MAX-CARDS-COUNT":
                return {...state, maxCardsCount: action.maxCardsCount};
            /***********/
            case "CARDS-PACKS/SET-SEARCH":
                return {...state, query_params: {...state.query_params, packName: action.searchValue}};

            case 'CARDS-PACKS/SET-USER-ID':
                return {...state, query_params: {...state.query_params, user_id: action.value}};

            case 'CARDS-PACKS/SET-QUERY-PARAMS':
                return {...state, query_params: {...state.query_params, ...action.newParams}};

            case 'CARDS-PACKS/SORT-PACKS-PACK':
                return { ...state, query_params: { ...state.query_params, sortPacks: action.sortPacks } };

            default:
                return state
        }
    }

// actions
export const setCardsPacksAC = (cardsPacks: CardsPackType[]) =>
    ({type: 'CARDS-PACKS/SET-CARDS-PACKS', cardsPacks} as const);
export const setCardPacksTotalCountAC = (cardPacksTotalCount: number) =>
    ({type: 'CARDS-PACKS/SET-CARDS-PACKS-TOTAL-COUNT', cardPacksTotalCount} as const);
export const setMinCardsCountAC = (minCardsCount: number) =>
    ({type: 'CARDS-PACKS/SET-MIN-CARDS-COUNT', minCardsCount} as const);
export const setMaxCardsCountAC = (maxCardsCount: number) =>
    ({type: 'CARDS-PACKS/SET-MAX-CARDS-COUNT', maxCardsCount} as const);
export const setSearchAC = (searchValue: string) =>
    ({type: 'CARDS-PACKS/SET-SEARCH', searchValue} as const);
export const setUserId = (value: string | null) =>
    ({type: 'CARDS-PACKS/SET-USER-ID', value} as const);
export const setCardsPacksQueryParams = (newParams: DomainCardsPackParamsType,) =>
    ({type: 'CARDS-PACKS/SET-QUERY-PARAMS', newParams} as const);
export const setSortAC = (sortPacks: string) =>
    ({type: 'CARDS-PACKS/SORT-PACKS-PACK', sortPacks} as const);


// thanks
export const getCardsPacksTC = (pageCount?: number, numberPage?: number): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC("loading"))
    // const params = getState().cardsPacksReducer.query_params
    const params = {...getState().cardsPacksReducer.query_params, pageCount: pageCount, page:numberPage}
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
            dispatch(getCardsPacksTC())
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
            dispatch(getCardsPacksTC())
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
            dispatch(getCardsPacksTC())
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
export type SetCardsPacksActionType = ReturnType<typeof setCardsPacksAC>

export type CardsPacksActionsType =
    SetCardsPacksActionType
    | ReturnType<typeof setCardPacksTotalCountAC>
    | ReturnType<typeof setMinCardsCountAC>
    | ReturnType<typeof setMaxCardsCountAC>
    | ReturnType<typeof setSearchAC>
    | ReturnType<typeof setUserId>
    | ReturnType<typeof setCardsPacksQueryParams>
    | ReturnType<typeof setSortAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
