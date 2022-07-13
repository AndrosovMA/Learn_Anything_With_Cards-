import React from 'react';
import {Button} from "@mui/material";
import {setQueryParams} from "../../../store/reducers/cards-packs-reducer";
import {useAppDispatch, useAppSelector} from "../../../store/store";


function ChoiceOfPacksContainer() {

    const dispatch = useAppDispatch()

    const userId = useAppSelector(state => state.loginReducer.userData._id)

    const handleClickMyPacks = () => {
        if (userId) {
            dispatch(setQueryParams({user_id: userId}))
        }
    }

    const handleClickAllPacks = () => {
        if (userId) {
            dispatch(setQueryParams({user_id: ""}))
        }
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "18px",
            width: "70%",
            padding: "3px",
        }}>
            <Button
                color={"secondary"}
                onClick={() => handleClickMyPacks()}
                variant={"contained"}
                style={{marginLeft: "7px !important"}}>My
            </Button>
            <Button
                color={"error"}
                onClick={() => handleClickAllPacks()}
                variant={"contained"}>All</Button>
        </div>
    );
}

export default ChoiceOfPacksContainer;
