import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../styles/img/Avatar.png"
import Slider from "@mui/material/Slider/Slider";
import {useState} from "react";

function valuetext(value: number) {
    return `${value}°C`;
}

export const Home = () => {

    const [value, setValue] = useState<number[]>([20, 80]);
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.loginReducer.isLoggedIn)

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
                            <img src={Avatar} alt="photo"/>
                            <span className="profile__above__name">Petr Ivanov</span>
                            <span className="profile__above__description">Front-end developer</span>
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


                    <div className="card"></div>

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


  .card {
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







