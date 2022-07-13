import React from 'react';
import ModuleFormEditProfile from "./ModuleFormEditProfile";
import Avatar from "../../../styles/assets/img/ava3.png";

import {useAppSelector} from "../../../store/store";

import styled from "styled-components";
import ChoiceOfPacksContainer from "./ChoiceOfPacksContainer";


function Profile() {

    const userAvaName = useAppSelector(state => state.loginReducer.userAvaName)

    return (
        <div className="profile__above">

            <ModuleFormEditProfile />

            <ProfileAboveContainer>
                <img className="profile__above__avatar" src={Avatar} alt="photo"/>
                <span className="profile__above__name">{userAvaName.name}</span>
                <span className="profile__above__description">Front-end developer</span>

                    <ChoiceOfPacksContainer />

            </ProfileAboveContainer>
        </div>
    );
}

export default Profile;

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
