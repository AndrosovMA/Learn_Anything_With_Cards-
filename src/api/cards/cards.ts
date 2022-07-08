import {instance} from '../config/config'
import {AxiosResponse} from "axios";

export const cardsAPI = {
    getCards(cardsPack_id: string | undefined, pageCount: number, page: number) {
        return instance.get<any, AxiosResponse<DomainCardsType>>(`cards/card`, {
            params: {
                cardsPack_id,
                pageCount,
                page
            }
        });
    },
}

export type CardsType = {
    answer?: string
    question?: string
    cardsPack_id?: string
    grade?: number
    shots?: number
    user_id?: string
    created?: string
    updated?: string
    _id?: string
}

type DomainCardsType = {
    cards: CardsType[]
    cardsTotalCount?: number
    maxGrade?: number
    minGrade?: number
    page?: number
    pageCount?: number
    packUserId?: string
}


