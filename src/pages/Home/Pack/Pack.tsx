import React from 'react';
import styled from "styled-components";

import {CardsPackType} from "../../../api/cards/cards-pack-api";
import {IconButton, Paper, TableCell,TableContainer, TableRow} from "@mui/material";
import moment from "moment";
import {GiBlackBook} from "react-icons/gi";
// import {useAppDispatch, useAppSelector} from "../../../store/store";

import {NavLink} from 'react-router-dom';

import ModuleFormDelete from "./ModuleFormDelete";
import ModuleFormUpdate from "./ModuleFormUpdate";
import {useAppSelector} from "../../../store/store";


function Pack({pack}: { pack: CardsPackType }) {
    const userId = useAppSelector(state => state.loginReducer.userData._id)

    return (
        <>
                <TableRow
                    key={pack._id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                    <TableCell component="th" scope="row">
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "black", fontWeight: '600'
                            }}
                            to={`/cards/${pack._id}`}>
                            {pack.name.slice(0, 20)}
                        </NavLink>
                    </TableCell>
                    <TableCell align="right">{pack.cardsCount}</TableCell>
                    <TableCell align="right">{moment(pack.updated).format("MMM DD, YYYY")}</TableCell>
                    <TableCell align="right">{pack.user_name}</TableCell>
                    <TableCell align="right">
                        <WrapIcon>
                            {userId === pack.user_id && (
                                <>
                                    <ModuleFormDelete
                                        _id={pack._id}
                                        user_id={pack.user_id}
                                    />
                                    <ModuleFormUpdate
                                        _id={pack._id}
                                        user_id={pack.user_id}/>
                                </>
                            )
                            }
                            <IconButton disabled color={"success"}>
                                <GiBlackBook className="btnDelete"/></IconButton>
                        </WrapIcon>
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

  a {
    text-decoration: none !important;
    outline: none !important;
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

  . .pack__name {
    text-decoration: none !important;
    outline: none !important;
  }

`

const WrapIcon = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`
