import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch, useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../styles/img/Avatar.png"
import Slider from "@mui/material/Slider/Slider";
import React, {useEffect, useState} from "react";
import {Logout} from "@mui/icons-material";
import {logoutTC} from "../../store/reducers/login-reducer";
import {AiOutlineSearch} from "react-icons/ai";

import {
    createCardsPackTC,
    getCardsPacsTC,
} from "../../store/reducers/cards-packs-reducer";
import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Pack from "./Pack";


function valuetext(value: number) {
    return `${value}°C`;
}


export const Home = () => {


    const dispatch = useAppDispatch()
    const packs = useAppSelector(state => state.cardsPacksReducer.cardsPacks)
    const userId = useAppSelector(state => state.loginReducer.userData._id)


    const [value, setValue] = useState<number[]>([20, 80]);
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.loginReducer.isLoggedIn)
    const userAvaName = useAppSelector(state => state.loginReducer.userAvaName)

    const handleClickLogout = () => {
        dispatch(logoutTC())
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleClickMyPacks = (userId: string) => {
        dispatch(getCardsPacsTC({user_id: userId}))
    }

    const handleClickAllPacks = () => {
        dispatch(getCardsPacsTC())
    }


    const handleClickAddPack = () => {
        dispatch(createCardsPackTC())
    }


    useEffect(() => {
        dispatch(getCardsPacsTC())

    }, []);


    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }


    return (
        <>
            <Block className="block">
                <div className="header">

                    <div className="profile__above">
                        <IconButton className="btn_logOut" onClick={handleClickLogout}>
                            <Logout/>
                        </IconButton>
                        <ProfileAboveContainer>
                            <img src={Avatar} alt="photo"/>
                            <span className="profile__above__name">{userAvaName.name}</span>
                            <span className="profile__above__description">Front-end developer</span>

                            <div style={{
                                display: "flex",
                                justifyContent: "space-around",
                                marginTop: "18px",
                                width: "50%"
                            }}>

                                <Button
                                    color={"secondary"}
                                    onClick={() => handleClickMyPacks(userId)}
                                    variant={"contained"}>My
                                </Button>

                                <Button
                                    color={"error"}
                                    onClick={() => handleClickAllPacks()}
                                    variant={"contained"}>All</Button>
                            </div>
                        </ProfileAboveContainer>
                    </div>

                    <div className="profile__below">
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
                    </div>
                    <div className="pack">
                        <PackList>
                            <h1 className="packList__title">Pack List</h1>
                            <div className="packList__headerBlock">
                                <div className="packList__headerBlock__inputWrap">
                                    <input className="packList__headerBlock__Search" type="text"
                                           placeholder="Search..."/>
                                    <AiOutlineSearch/>
                                </div>
                                <button
                                    onClick={handleClickAddPack}
                                    className="packList__headerBlock__btn">Add new Pack
                                </button>
                            </div>
                        </PackList>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Card Count</TableCell>
                                        <TableCell align="right">Update</TableCell>
                                        <TableCell align="right">Author name</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {packs.map((pack) => (
                                        <Pack pack={pack}/>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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
    margin: 0 11rem 0 11rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr 3fr;
    height: 80vh;
    border-radius: 8px;
  }

  .profile__above {
    border-top-left-radius: 25px;
    background: #D9D9F1;
    grid-area: 1 / 1 / 2 / 2;
    margin-right: 25rem;
    min-width: 250px;
    height: 330px;
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
    margin-left: -25rem;
    min-width: 500px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    margin-bottom: 67px;

  }
`

const ProfileAboveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;

  img {

  }

  .profile__above__name {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #2D2E46;
    margin-top: 4px;
  }

  .profile__above__description {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #2D2E46;
    opacity: 0.5;
    margin-top: 4px;
  }


`

const ProfileBelowContainer = styled.div`
  padding-top: 17px;
  background: #ECECF9;
  grid-area: 2 / 1 / 3 / 2;
  margin-right: 25rem;
  min-width: 250px;
  border-bottom-left-radius: 25px;
  height: 465px;
  margin-bottom: 67px;

  .profile__below__description {
    margin-left: 25px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #2D2E46;
  }

  .css-187mznn-MuiSlider-root {
    margin-left: 25px;
    width: 80% !important;
    margin-top: 54px;
  }

`

const PackList = styled.div`

  .packList__title {
    margin-top: 24px;
    margin-left: 110px;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #2D2E46;

  }

  .packList__headerBlock {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 28px;
  }

  .packList__headerBlock__Search {
    background: #ECECF9;
    opacity: 0.5;
    border: 1px solid #635D80;
    border-radius: 6px;
    width: 461px;
    height: 36px;
    padding-left: 45px;
    text-decoration: none;
    /************/
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #2D2E46;
  }

  .packList__headerBlock__inputWrap {
    display: inline-block;
    position: relative;
  }

  svg {
    position: absolute;
    left: 1rem;
    width: 25px;
    height: 60px;
    opacity: 30%;
    top: -11px;
    bottom: 0;
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

  //button


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
