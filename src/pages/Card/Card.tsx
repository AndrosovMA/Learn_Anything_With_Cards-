import React from 'react';
import styled from "styled-components";
import {AiFillStar, AiOutlineSearch, AiOutlineStar} from "react-icons/ai";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {BsPencil, BsTrash} from "react-icons/bs";
import {GiBlackBook} from "react-icons/gi";
import back from "../../styles/assets/icon/back.svg";


function Card() {
    return (
        <Cards>
            <div className="card__wrap">
                <div className="pack">
                    <div className="card__block__header">
                        <img className="card__block__header__img" src={back} alt="back"/>
                        <h1 className="packList__title">Do`not remove</h1>
                        <div className="packList__headerBlock">
                            <div className="packList__headerBlock__inputWrap">
                                <input className="packList__headerBlock__Search" type="text"
                                       placeholder="Search..."/>
                                <AiOutlineSearch className="packList__headerBlock__glass"/>
                            </div>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Question</TableCell>
                                    <TableCell align="right">Answer</TableCell>
                                    <TableCell align="right">Update</TableCell>
                                    <TableCell align="right">Grade</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        8 вопрос
                                    </TableCell>
                                    <TableCell align="right">8 ответ</TableCell>
                                    <TableCell align="right">30.06.22</TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                            <AiOutlineStar />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton

                                            color={"error"}>
                                            <BsTrash className="btnUpdate"/>
                                        </IconButton>
                                        <IconButton

                                            color={"warning"}>
                                            <BsPencil
                                                className="learningIcons"/>
                                        </IconButton>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </Cards>
    );
}

export default Card;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  padding-top: 30px;

  //header
  .card__wrap {
    border-radius: 25px;
    margin: 0 11rem 0 11rem;
    grid-area: 1 / 1 / 6 / 2;
    height: 80vh;
    background: white;
    padding: 24px;
  }

  .card__block__header {
    position: relative;

    .card__block__header__img {
      position: absolute;
      top: 12px;
      left: 34px;
      opacity: 80%;
      cursor: pointer;
      width: 18px;
    }
  }

  .packList__title {
    margin-top: 19px;
    margin-left: 58px;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #2D2E46;
  }

  .packList__headerBlock {
    margin-top: 20px;
    margin-bottom: 28px;

    .packList__headerBlock__inputWrap {
      position: relative;
    }

    .packList__headerBlock__glass {
      position: absolute;
      top: 5px;
      width: 28px;
      height: 28px;
      opacity: 60%;
      margin-left: 1rem;
    }

    .packList__headerBlock__Search {
      width: 100%;
      height: 36px;
      background: #ECECF9;
      border: 1px solid #635D80;
      border-radius: 6px;
      /**************/
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #2D2E46;
      opacity: 0.5;
      padding-left: 3rem;
      text-decoration: none;
      
      :focus {
        border: 1px solid #635D80;
      }
    }

  }

`
