import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch, useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../styles/img/Avatar.png"
import Slider from "@mui/material/Slider/Slider";
import {useState} from "react";
import {IconButton} from "@mui/material";
import {Logout} from "@mui/icons-material";
import {logoutTC} from "../../store/reducers/login-reducer";
import {AiOutlineSearch} from "react-icons/ai";
import Pack from "./Pack";
import Paginator from "./Paginator";

function valuetext(value: number) {
    return `${value}°C`;
}

export const Home = () => {

    const dispatch = useAppDispatch()

    const [value, setValue] = useState<number[]>([20, 80]);
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.loginReducer.isLoggedIn)
    const userAvaName = useAppSelector(state => state.loginReducer.userAvaName)

    const handleClickLogout = () => {
        dispatch(logoutTC())
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };


    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }


    return (
        <>
            <Block className="block">
                <div className="header">

                    <div className="profile__above">

                        <ProfileAboveContainer>
                            <img src={userAvaName.avatar} alt="photo"/>
                            <img src={Avatar} alt="photo"/>
                            <span className="profile__above__name">{userAvaName.name}</span>
                            <span className="profile__above__description">Front-end developer</span>
                            <IconButton onClick={handleClickLogout}>
                                <Logout/>
                            </IconButton>
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
                                <button className="packList__headerBlock__btn">Add new Pack</button>
                            </div>
                        </PackList>

                        <TableContainers>

                            <div className='packsBoxRight'>
                                <div className='packsBoxSearch'>
                                </div>

                                <ul className='packsList'>
                                    <li className='packsItem'>Name</li>
                                    <li className='packsItem'>
                                        Cards
                                    </li>
                                    <li className="packsItem">Last Updated</li>
                                    <li className="packsItem">Actions</li>
                                </ul>
                                <Pack/>
                                <Paginator/>
                            </div>

                        </TableContainers>

                    </div>

                </div>
            </Block>
        </>
    )
}

// types

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
    height: 243px;
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
  }

  .packList__headerBlock__Search {
    background: #ECECF9;
    opacity: 0.5;
    border: 1px solid #635D80;
    border-radius: 2px;
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
    width: 184px;
    height: 36px;
    text-decoration: none;
    outline: none;
    border: 0;
    cursor: pointer;
  }

`

const TableContainers = styled.div`
  margin-top: 24px;

  li {
    outline: none;
    text-decoration: none;
    list-style-type: none
  }

  .packsBoxRight {
    background-color: #ffffff;
    width: 100%;
    padding: 25px 45px;
  }

  .packsBoxRightTitle {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    margin-bottom: 15px;
  }

  .packsBoxSearch {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    position: relative;
  }
  
  /*//packsList*/
  .packsList {
    display: flex;
    padding: 16px 24px;
    background: #ECECF9;
  }

  .packsItem {
    flex: 1 1 25%;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #000;
  }

  .loader2 {
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`






