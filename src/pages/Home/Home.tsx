import {useAppDispatch, useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import styled from "styled-components";

import Slider from "@mui/material/Slider/Slider";
import React, {useState} from "react";
import {createCardsPackTC, } from "../../store/reducers/cards-packs-reducer";
import {Paper, Table, TableBody,TableContainer} from "@mui/material";


import Search from "./Search";
import ModuleAddNewItem from "../../components/ModuleAddNewItem";
import Paginations from "./Paginations";
import { PackList } from "./PackList/PackList";
import Profile from "./Profile/Profile";
import SortPack from "./SortPack";



function valuetext(value: number) {
    return `${value}°C`;
}

export const Home = () => {

    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(state => state.loginReducer.isLoggedIn)

    const [value, setValue] = useState<number[]>([20, 80]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };


    const addItemCallback = (title: string) => {
        dispatch(createCardsPackTC({cardsPack: {name: title}}))
    }


    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }


    return (
        <>
            <Block className="block">
                <div className="header">
                    <Profile />
                    <ProfileBelow>
                        <ProfileBelowContainer>
                            <span className="profile__below__description">Number of cards</span>
                            <Slider
                                value={value}
                                getAriaLabel={() => 'Temperature range'}
                                valueLabelDisplay="auto"
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                            />
                        </ProfileBelowContainer>
                    </ProfileBelow>
                    <div className="pack">
                        <PackListStyledComponent>
                            <h1 className="packList__title">Pack List</h1>
                            <div className="packList__headerBlock">
                                <Search/>
                                <ModuleAddNewItem addItem={addItemCallback}
                                />
                            </div>
                        </PackListStyledComponent>
                        <TableContainer component={Paper}>
                            {/*<div className="packList__table_wrap">*/}
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <SortPack />
                                <TableBody>
                                    <PackList/>
                                </TableBody>
                            </Table>
                            {/*</div>*/}
                        </TableContainer>
                        <Paginations/>
                    </div>
                </div>
            </Block>
        </>
    )
}

const Block = styled.div`
  border-radius: 10px;
  padding-top: 30px;

  .header {
    display: grid;
    grid-template-columns: 238px repeat(auto-fill, 92%);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 0 20%;

  }


  .profile__above {
    border-top-left-radius: 25px;
    background: #D9D9F1;
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    min-height: 400px;

  }

  .profile__above_settings_wrap {
    margin-top: 7px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;


    svg {
      transition-property: all;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      transition-duration: 200ms;

      :hover {
        --tw-hue-rotate: hue-rotate(180deg);
        width: 20px;
      }

      :active {
        --tw-scale-x: 1.25;
      }
    }
  }

  .btn_logOut {
    text-align: right !important;
    display: block !important;
    width: 100% !important;

    :hover {
      background: none !important;
    }
  }


  .pack {
    background: #FEFEFF;
    grid-area: 1 / 2 / 3 / 3;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    padding: 30px;
    height: 800px;


    .packList__table_wrap {
      position: relative;
    }
    
  }
`



const ProfileBelow = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  height: 100%;


`


const ProfileBelowContainer = styled.div`
  padding-top: 17px;
  background: #ECECF9;
  //height: 339px;
  height: 100%;


  border-bottom-left-radius: 25px;
  width: 100%;


  .profile__below__description {
    margin-left: 25px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #2D2E46;
  }

  .css-187mznn-MuiSlider-root {
    margin-left: 25px;
    width: 55% !important;
    margin-top: 28px;
  }

`

const PackListStyledComponent = styled.div`

  .packList__title {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #2D2E46;

  }

  .packList__headerBlock {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }

  .btnUpdate {

    height: 25px;
    width: 25px;
    position: absolute;
    cursor: pointer;
    color: yellow !important;
  }

  .learningIcons {
    height: 22px;
    width: 22px;
    position: absolute;
    margin-left: 29px;
    cursor: pointer;
    color: green !important;
  }

  .btnDelete {
    position: absolute;
    height: 25px;
    margin-left: 20px;
    width: 100px;
    cursor: pointer;
    color: red !important;
  }

  @media only screen and (max-width: 1279px) {

    .packList__headerBlock__btn {
      margin-top: 20px;
    }


  }
  @media only screen and (max-width: 1279px) {

    .packList__headerBlock {
      display: flex;
      flex-direction: column;
    }
  }

`
