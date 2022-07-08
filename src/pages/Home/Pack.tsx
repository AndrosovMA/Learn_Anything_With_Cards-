import React from 'react';
import styled from "styled-components";

import {CardsPackType} from "../../api/cards/cards-pack-api";
import {IconButton, TableCell, TableRow} from "@mui/material";
import moment from "moment";
import {BsPencil, BsTrash} from "react-icons/bs";
import {GiBlackBook} from "react-icons/gi";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {deleteCardsPackTC, updateCardsPackTC} from "../../store/reducers/cards-packs-reducer";


function Pack({pack}: { pack: CardsPackType }) {
    const userId = useAppSelector(state => state.loginReducer.userData._id)


    const dispatch = useAppDispatch()

    const handleClickDeletePack = (id: string) => {
        dispatch(deleteCardsPackTC(id))
    }

    const handleClickUpdatePack = (id: string) => {
        dispatch(updateCardsPackTC(id))
    }

    return (
        <>
            <TableRow
                key={pack.name}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
                <TableCell component="th" scope="row">
                    {pack.name.slice(0, 20)}
                </TableCell>
                <TableCell align="right">{pack.cardsCount}</TableCell>
                <TableCell align="right">{moment(pack.updated).format("MMM DD, YYYY")}</TableCell>
                <TableCell align="right">{pack.user_name}</TableCell>
                <TableCell align="right">
                    {userId === pack.user_id && (
                        <>
                            <IconButton
                                onClick={() => handleClickDeletePack(pack._id)}
                                color={"error"}>
                                <BsTrash className="btnUpdate"/>
                            </IconButton>
                            <IconButton
                                onClick={() => handleClickUpdatePack(pack._id)}
                                color={"warning"}>
                                <BsPencil
                                    className="learningIcons"/>
                            </IconButton>
                        </>
                    )
                    }

                    <IconButton disabled color={"success"}>
                        <GiBlackBook className="btnDelete"/></IconButton>
                </TableCell>
            </TableRow>
        </>
    );
}

export default Pack;

const Containers = styled.div`

  .nthChildOdd:nth-child(odd) {
    background: #F8F7FD;
  }

  .packBox {
    padding: 16px 110px 16px 24px;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }


  .packItem {
    flex: 1 1 25%;
    flex-grow: 0;
  }

  .packName {
    font-size: 13px;
    color: #000000;
    text-decoration: none;
  }

  .btnUpdate {

    height: 25px;
    width: 25px;
    position: absolute;
    cursor: pointer;
  }

  .learningIcons {
    height: 22px;
    width: 22px;
    position: absolute;
    margin-left: 29px;
    cursor: pointer;
  }

  .btnDelete {
    position: absolute;
    height: 25px;
    margin-left: 20px;
    width: 100px;
    cursor: pointer;
  }

  .boxBtn {
    display: flex;
    align-items: center;
    list-style-type: none;

  }

  li {
    outline: none;
    text-decoration: none;
    list-style-type: none
  }

  

`
