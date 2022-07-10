import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {AiFillStar, AiOutlineSearch, AiOutlineStar} from "react-icons/ai";
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {BsPencil, BsTrash} from "react-icons/bs";
import UseAnimation from "react-useanimations";
import home from "react-useanimations/lib/home";
import searchToX from "react-useanimations/lib/searchToX";


function Card() {

    return (
        <Cards>
            <div className="card__wrap">
                <div className="pack">
                    <div className="card__block__header">
                        <div className="card__block__header__home">
                            <NavLink to="/home">
                                <UseAnimation
                                    size={40}
                                    wrapperStyle={{position: "absolute", top: "14px", opacity: "75%"}}
                                    animation={home}
                                    strokeColor="blue"
                                    fillColor="#21268F"
                                />
                            </NavLink>
                            <h1 className="packList__title">Do`not remove</h1>
                        </div>
                        <div className="packList__headerBlock">
                            <div className="packList__headerBlock__inputWrap">
                                <input className="packList__headerBlock__Search" type="text"
                                       placeholder="Search..."/>
                                <UseAnimation
                                    size={32}
                                    wrapperStyle={{position: "absolute", top: "2px", opacity: "60%"}}
                                    animation={searchToX}
                                    fillColor="#21268F"
                                />
                            </div>
                            <button className="packList__headerBlock__btn">Add new Card</button>
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
                                        8 ответ
                                    </TableCell>
                                    <TableCell align="right">8 ответ</TableCell>
                                    <TableCell align="right">30.06.22</TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiOutlineStar/>
                                            <AiOutlineStar/>
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


    .card__block__header__home {
      display: flex;
      align-items: center;
    }

  }

  .packList__title {
    margin-top: 19px;
    margin-left: 42px;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #2D2E46;
    opacity: 0.9;
  }

  .packList__headerBlock {
    margin-top: 20px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;

    .packList__headerBlock__inputWrap {
      position: relative;
      flex: 1;
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
      width: 80%;
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
      padding-left: 2rem;
      text-decoration: none;

      :focus {
        border: 1px solid #635D80;
      }
    }
  }

  .packList__headerBlock__btn {
    background: #21268F;
    box-shadow: 0 4px 18px rgba(33, 38, 143, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    /*********/
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ECECF9;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    min-width: 184px;
    height: 36px;
    text-decoration: none;
    outline: none;
    border: 0;
    cursor: pointer;

  }

`
