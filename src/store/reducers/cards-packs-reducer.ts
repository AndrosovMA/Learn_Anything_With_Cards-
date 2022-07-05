import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {
    cardsPackApi,
    CardsPackType,
    DomainCardsPackParamsType
} from "../../api/cards/cards-pack-api";
import {AppThunk} from "../store";
import {handleNetworkError} from "../../utils/error- utills";

export const initialState = {
    cardsPacks: [] as CardsPackType[],
    user_id: '',
    user_name: '',
    name: '',
    grade: 1,
    cardsCount: 4,
    params: {
        page: 0,
        pageCount: 7,
        cardPacksTotalCount: 7,
        minCardsCount: 0,
        maxCardsCount: 7,
    } as DomainCardsPackParamsType
};

export const cardsPacksReducer = (state: InitialStateType = initialState, action: CardsPacksActionsType): InitialStateType => {
    switch (action.type) {

        case 'CARDS/SET-CARDS-PACKS':
            return {...state, ...action.payload};

        default:
            return state
    }
}


export const setCardsPacksAC = (cards: CardsPackType[]) =>
    ({type: 'CARDS/SET-CARDS-PACKS', payload: cards} as const);


const getCardsPackTC = (cardsPack_id: string | undefined): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC("loading"))
    const {page, pageCount} = getState().cardsPacksReducer.params;
    cardsPackApi
        .getCardsPacks(cardsPack_id, pageCount, page)
        .then((res) => {
            dispatch(setCardsPacksAC(res.data.cardPacks));
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
    | SetAppStatusActionType
    | SetAppErrorActionType
