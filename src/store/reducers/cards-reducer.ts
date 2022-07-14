import {
    cardsAPI,
    CardsParamsType,
    CardType,
    CreateCardPayloadType,
    UpdateCardPayloadType
} from "../../api/cards/cards-api";
import {AppThunk} from "../store";
import {setAppStatusAC} from "./app-reducer";
import {handleNetworkError} from "../../utils/error- utills";
import {SetCardsPacksActionType} from "./cards-packs-reducer";

const initialState = {
    cards: {} as CardsStateType,
    cardsTotalCount: 0,
    minGrade: 0,
    maxGrade: 6,
    query_params: {
        cardsPack_id: "",

        cardQuestion: "",
        cardAnswer: "",
        page: 1,
        pageCount: 1,
        min: 0,
        max: 0
    } as CardsParamsType
}

export const cardsReducer =
    (state: InitialStateType = initialState, action: CardsActionsType): InitialStateType => {
        switch (action.type) {
            case "CARDS-PACKS/SET-CARDS-PACKS": {
                const stateCopy = {...state}
                action.cardsPacks.forEach(pack =>
                    stateCopy.cards[pack._id] = [])
                return stateCopy
            }
            case "CARDS/SET-CARDS":
                return {...state, cards: {[action.packId]: action.cards}}
            case "CARDS/SET-CARDS-TOTAL-COUNT":
                return {...state, cardsTotalCount: action.totalCount}
            case "CARDS/SET-MIN-GRADE":
                return {...state, minGrade: action.minGrade}
            case "CARDS/SET-MAX-GRADE":
                return {...state, maxGrade: action.maxGrade}
            case "CARDS/SET-QUERY-PARAMS":
                return {
                    ...state, query_params:
                        {...state.query_params, ...action.newParams}
                }
            default:
                return state

        }
    }

// actions
export const setCardsAC = (cards: CardType[], packId: string) =>
    ({type: 'CARDS/SET-CARDS', cards, packId} as const);
export const setCardsTotalCountAC = (totalCount: number) =>
    ({type: 'CARDS/SET-CARDS-TOTAL-COUNT', totalCount} as const);
export const setMinGradeAC = (minGrade: number) =>
    ({type: 'CARDS/SET-MIN-GRADE', minGrade} as const);
export const setMaxGradeAC = (maxGrade: number) =>
    ({type: 'CARDS/SET-MAX-GRADE', maxGrade} as const);
export const setCardsQueryParamsAC = (newParams: CardsParamsType) =>
    ({type: 'CARDS/SET-QUERY-PARAMS', newParams} as const);

// thunks
export const getCardsTC = (): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC("loading"))
    const params = getState().cardsReducer.query_params
    cardsAPI.getCards(params)
        .then((res) => {
            const {cards, cardsTotalCount, maxGrade, minGrade} = res.data
            dispatch(setCardsAC(cards, cards[0].cardsPack_id))
            dispatch(setCardsTotalCountAC(cardsTotalCount))
            dispatch(setMinGradeAC(minGrade))
            dispatch(setMaxGradeAC(maxGrade))
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}
export const createCardTC = (payload: CreateCardPayloadType): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    cardsAPI.createCard(payload)
        .then(() => {
            dispatch(getCardsTC())
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}
export const updateCardTC = (payload: UpdateCardPayloadType): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    cardsAPI.updateCard(payload)
        .then(() => {
            dispatch(getCardsTC())
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}
export const deleteCardTC = (id: string): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    cardsAPI.deleteCard(id)
        .then(() => {
            dispatch(getCardsTC())
        })
        .catch((error) => {
            handleNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}

// types
type InitialStateType = typeof initialState
type CardsStateType = { [key: string]: CardType[] }
export type CardsActionsType =
    SetCardsPacksActionType
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsTotalCountAC>
    | ReturnType<typeof setMinGradeAC>
    | ReturnType<typeof setMaxGradeAC>
    | ReturnType<typeof setCardsQueryParamsAC>