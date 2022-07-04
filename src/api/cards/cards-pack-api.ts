import {instance} from "../config/config";


export const cardsPackApi = {
    getCardsPacks(cardsPack_id: string | undefined, pageCount: number, page: number) {
        return instance.get<DomainCardsPackQueryParamsType>(`/cards/pack`, {
            params: {
                cardsPack_id,
                pageCount,
                page
            }
        });
    },

    createCardsPack(params: CardsPostPackType) {
        return instance.post(`/cards/pack`, params);
    },

    updateCardsPack(cardsPack: { _id: string, name: string }) {
        return instance.put(`/cards/pack`, cardsPack);
    },

    deleteCardsPack(id: string | undefined) {
        return instance.delete(`cards/card?id=${id}`);
    }
}

// types
export type CardsPostPackType = {
    cardsPack: {
        name: string
        deckCover: string
        private: boolean
    }
}

type DomainCardsPackType = {
    _id?: string,
    user_id: string,
    user_name?: string,
    private?: boolean,
    name?: string,
    path?: string,
    grade?: number,
    shots?: number,
    deckCover?: string,
    cardsCount?: number,
    type?: string,
    rating?: number,
    created?: string,
    updated?: string,
    more_id?: string,
    __v?: number
}

export type DomainCardsPackQueryParamsType = {
    cardPacks: DomainCardsPackType[]
    page: number,
    pageCount: number,
    cardPacksTotalCount?: number,
    minCardsCount?: number,
    maxCardsCount?: number,
    token?: string,
    tokenDeathTime?: string
}
