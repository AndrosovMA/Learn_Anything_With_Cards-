import {useAppDispatch, useAppSelector} from "../../../store/store";
import React, {useEffect} from "react";
import {getCardsPacsTC} from "../../../store/reducers/cards-packs-reducer";
import Pack from "../Pack";

export const PackList = () => {
    const dispatch = useAppDispatch()

    const packs = useAppSelector(state => state.cardsPacksReducer.cardsPacks)
    const userId = useAppSelector(state => state.cardsPacksReducer.query_params.user_id)

    useEffect(() => {
        dispatch(getCardsPacsTC())
    }, [userId]);

    return (
        <>
            {packs.map((pack) => (
                <Pack pack={pack} key={pack._id}/>
            ))}
        </>
    )
}