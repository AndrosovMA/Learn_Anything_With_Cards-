import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getCardsPacksTC, setSortAC} from "../../store/reducers/cards-packs-reducer";
import {TableCell, TableHead, TableRow} from "@mui/material";

import UseAnimation from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";
import arrowUp from "react-useanimations/lib/arrowUp";
import styled from "styled-components";


function SortPack() {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const sortPacks = useAppSelector(state => state.cardsPacksReducer.query_params.sortPacks)

    const ASK = 0
    const DESK = 1

    const requestForSorting = (num: number) => {
        console.log(num)
        const sortPacks = `${num}cardsCount`;
        dispatch(setSortAC(sortPacks));
        setOpen(!open);
    };

    useEffect(() => {
        dispatch(getCardsPacksTC());
    }, [sortPacks]);


    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">
                        Card Count
                        {!open && (
                            <Wrap>
                                <span
                                    onClick={() => requestForSorting(ASK)}>
                                    <UseAnimation
                                        size={32}
                                        wrapperStyle={{
                                            position: "absolute", bottom: "0px", opacity: "80%",
                                            left: "-4px"
                                        }}
                                        animation={arrowDown}
                                        fillColor="#21268F"
                                    />
                                </span>
                            </Wrap>
                        )}
                        {open && (
                            <Wrap>
                                <span onClick={() => requestForSorting(DESK)}>
                            <UseAnimation
                                size={32}
                                wrapperStyle={{
                                    position: "absolute", bottom: "0px", opacity: "80%",
                                    left: "-4px"
                                }}
                                animation={arrowUp}
                                fillColor="#21268F"
                            />
                            </span>
                            </Wrap>
                        )}
                    </TableCell>
                    <TableCell align="right">Update</TableCell>
                    <TableCell align="right">Author name</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
        </>
    )
        ;
}

export default SortPack;

const Wrap = styled.div`
  position: relative;

  span {
    position: relative;
  }
`
