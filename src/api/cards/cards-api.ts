import {instance} from '../config/config'
import {AxiosResponse} from "axios";

export const cardsAPI = {
    getCards(params: CardsParamsType) {
        return instance.get<any, AxiosResponse<GetCardResponseType>>(`cards/card`,
            {params});
    },

    createCard(payload: CreateCardPayloadType) {
        return instance.post<CreateCardResponseType>(`/cards/pack`, payload);
    },

    updateCard(payload: UpdateCardPayloadType) {
        return instance.put<UpdateCardResponseType>(`/cards/pack`, payload);
    },

    deleteCard(id: string) {
        return instance.delete(`cards/pack?id=${id}`);
    }
}

export type CreateCardPayloadType = {
    card: {
        cardsPack_id: string

        question?: string // если не отправить будет таким "no question"
        answer?: string // если не отправить будет таким "no answer"
        grade?: number // 0..5, не обязателен
        shots?: number // не обязателен
        answerImg?: string // не обязателен "url or base 64"
        questionImg?: string // не обязателен "url or base 64"
        questionVideo?: string // не обязателен "url or base 64"
        answerVideo?: string // не обязателен "url or base 64"
    }
}
export type UpdateCardPayloadType = {
    _id: string

    question?: string // если не отправить будет таким "no question"
    answer?: string // если не отправить будет таким "no answer"
    grade?: number // 0..5, не обязателен
    shots?: number // не обязателен
    answerImg?: string // не обязателен "url or base 64"
    questionImg?: string // не обязателен "url or base 64"
    questionVideo?: string // не обязателен "url or base 64"
    answerVideo?: string // не обязателен "url or base 64"

}
export type CardsParamsType = {
    cardsPack_id: string

    cardAnswer?: string // не обязательно
    cardQuestion?: string // не обязательно
    min?: number // не обязательно
    max?: number // не обязательно
    sortCards?: string // не обязательно
    page: number // не обязательно
    pageCount: number // не обязательно
}
export type CardType = {
    _id: string
    cardsPack_id: string
    user_id: string
    answer: string
    question: string
    grade: number
    shots: number
    comments?: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    __v: number
}
export type GetCardResponseType = {
    cards: CardType[]
    packUserId: string
    page: number
    pageCount: number
    cardsTotalCount: number
    minGrade: number
    maxGrade: number
    token: string
    tokenDeathTime: number
}
export type CreateCardResponseType = {
    newCard: CardType
    token: string
    tokenDeathTime: number
}
export type UpdateCardResponseType = {
    updatedCard: CardType
    "token": string
    "tokenDeathTime": number
}