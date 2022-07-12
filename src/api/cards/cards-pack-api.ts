import {instance} from "../config/config";
import {AxiosResponse} from "axios";


export const cardsPackAPI = {
    getCardsPacks(params?: DomainCardsPackParamsType) {
        return instance.get<any, AxiosResponse<GetCardsPacksResponseType>>(`/cards/pack`,
            {params});
    },

    createCardsPack(payload: CreateCardsPackPayloadType) {
        return instance.post<CreateCardsPackResponseType>(`/cards/pack`, payload);
    },

    updateCardsPack(payload: UpdateCardsPackPayloadType) {
        return instance.put<UpdateCardsPackResponseType>(`/cards/pack`, payload);
    },

    deleteCardsPack(id: string) {
        return instance.delete(`cards/pack?id=${id}`);
    }
}

// types
export type CreateCardsPackPayloadType = {
    cardsPack: {
        name: string
        deckCover?: string
        private?: boolean
    }
}
export type UpdateCardsPackPayloadType = {
    cardsPack: {
        _id: string
        name: string
    }
}

export type CardsPackType = {
    _id: string,
    user_id: string,
    user_name: string,
    private?: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    deckCover: string,
    cardsCount: number,
    type?: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
    __v: number
}

export type DomainCardsPackParamsType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    user_id?: string | null
    page?: number
    pageCount?: number
}

export type GetCardsPacksResponseType = {
    cardPacks: CardsPackType[]
    page: number,
    pageCount: number,
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    token: string,
    tokenDeathTime: string
}
export type CreateCardsPackResponseType = {
    newCardsPack: CardsPackType
    token: string,
    tokenDeathTime: string
}
export type UpdateCardsPackResponseType = {
    updatedCardsPack: CardsPackType
    token: string,
    tokenDeathTime: string
}
