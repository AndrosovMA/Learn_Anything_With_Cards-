import {useAppSelector} from "../../../store/store";
import React from "react";
import Pack from "../Pack/Pack";

export const PackList = () => {

    const packs = useAppSelector(state => state.cardsPacksReducer.cardsPacks)

    return (
        <>
            {packs.map((pack) => (
                <Pack pack={pack} key={pack._id}/>
            ))}
        </>
    )
}
