import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch, useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../styles/assets/img/ava3.png"
import Slider from "@mui/material/Slider/Slider";
import React, {useEffect, useState} from "react";
import {
    createCardsPackTC,
    getCardsPacsTC,
} from "../../store/reducers/cards-packs-reducer";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Pack from "./Pack";

import Paginations from "./Paginations";
import ModuleFormEditProfile from "./ModuleFormEditProfile";
import ModuleAddNewPack from "./ModuleAddNewPack";
import UseAnimation from "react-useanimations";
import searchToX from "react-useanimations/lib/searchToX";


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
                        <ModuleFormEditProfile
                        />
                        <ProfileAboveContainer>
                            <img className="profile__above__avatar" src={Avatar} alt="photo"/>
                            <span className="profile__above__name">{userAvaName.name}</span>
                            <span className="profile__above__description">Front-end developer</span>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-around",
                                marginTop: "18px",
                                width: "70%",
                                padding: "3px",
                            }}>
                                <Button
                                    color={"secondary"}
                                    onClick={() => handleClickMyPacks(userId)}
                                    variant={"contained"}
                                    style={{marginLeft: "7px !important"}}>My
                                </Button>
                                <Button
                                    color={"error"}
                                    onClick={() => handleClickAllPacks()}
                                    variant={"contained"}>All</Button>
                            </div>
                        </ProfileAboveContainer>
                    </div>

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
                        <PackList>
                            <h1 className="packList__title">Pack List</h1>
                            <div className="packList__headerBlock">
                                <div className="packList__headerBlock__inputWrap">
                                    <input className="packList__headerBlock__Search" type="text"
                                           placeholder="Search..."/>
                                    <UseAnimation
                                        size={32}
                                        wrapperStyle={{
                                            position: "absolute", top: "12px",
                                            overflow: "inherit",
                                            left: '-13px',
                                            opacity: "60%"
                                        }}
                                        animation={searchToX}
                                        fillColor="#21268F"
                                    />
                                </div>
                                <ModuleAddNewPack/>
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
                                        <Pack pack={pack} key={pack._id}/>
                                    ))}
                                </TableBody>
                            </Table>
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
    grid-template-columns: 238px repeat(auto-fill, 58rem);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 0 25rem;

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
  }
`

const ProfileAboveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24%;

  .profile__above__avatar {
    max-width: 223px;
    max-height: 218px;
    border-radius: 5%;
    object-fit: cover;
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

const PackList = styled.div`

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

  .packList__headerBlock__Search {
    background: #ECECF9;
    opacity: 0.5;
    border: 1px solid #635D80;
    border-radius: 6px;
    width: 461px;
    height: 36px;
    padding-left: 36px;
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
