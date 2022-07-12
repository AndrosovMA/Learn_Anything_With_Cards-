import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {IconButton} from "@mui/material";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import {Logout} from "@mui/icons-material";
import {logoutTC, updateMeTC} from "../../store/reducers/login-reducer";
import {AppStateType, useAppDispatch} from "../../store/store";
import Avatar from "../../styles/img/Avatar.png";
import {BsPencil} from "react-icons/bs";
import styled from "styled-components";
import DialogContentText from "@mui/material/DialogContentText";
import {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";

export default function ModuleFormEditProfile() {
    const avatar = useSelector<AppStateType, string | undefined>(state => state.loginReducer.userAvaName.avatar)

    const [open, setOpen] = React.useState(false);
    const [editAvatar, setEditAvatar] = useState(false);
    const [newAvatarURL, setNewAvatarURL] = useState('')
    const [newName, setNewName] = useState('')

    const dispatch = useAppDispatch()

    const handleClickLogout = () => {
        dispatch(logoutTC())
    }
    const handleClose = (status: boolean) => {
        setOpen(status);
    };

    const changeStatusEditAvatar = (status: boolean): void => {
        setEditAvatar(status)
    }
    const changeAvatarURL = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAvatarURL(e.currentTarget.value)
    }

    const handleUpdateMeOnClick = (): void => {
        const model = {
            name: newName,
            avatar: newAvatarURL
        }
        dispatch(updateMeTC(model));
        setEditAvatar(false);
    };

    return (
        <div>
            <div className="profile__above_settings_wrap">
                <Button>
                    <UseAnimations
                        onClick={()=>{handleClose(true)}}
                        animation={settings}
                        size={32}
                        wrapperStyle={{opacity: 0.6, color: "green"}}/>
                </Button>
                <Button onClick={handleClickLogout}>
                    <Logout/>
                </Button>

            </div>
            <Dialog open={open} onClose={()=>{handleClose(false)}}>
                <DialogTitle>Personal information</DialogTitle>
                <DialogContentText>
                    Make changes to your profile, they can be changed again!
                </DialogContentText>


                <DialogContent>
                    <ImgWrap>
                        <img src={avatar} alt="photo" width='100' height='100' />
                        <IconButton
                            className="learningIcons"
                            color={"warning"}>
                            <BsPencil onClick={() => {
                                changeStatusEditAvatar(true)
                            }}/>
                        </IconButton></ImgWrap>

                    {
                        editAvatar
                            ? <TextField
                                autoFocus
                                margin="dense"
                                id="avatar"
                                label="avatar"
                                placeholder="Please insert URL your new avatar "
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={changeAvatarURL}
                            />
                            : null
                    }

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="nick name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>


                <DialogActions>
                    <Button
                        variant='contained'
                        color="error"
                        onClick={() =>
                        {
                            handleClose(false)
                            changeStatusEditAvatar(false)
                        }
                            }>Cancel</Button>
                    <Button
                        variant='contained'
                        color="success"
                        onClick={() => {
                            handleClose(false)
                            handleUpdateMeOnClick()
                        }}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const ImgWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  .learningIcons {
    margin-right: 0;
    margin-top: 70px;
    cursor: pointer;
  }

  svg {
    width: 20px;
    display: inline-block;
    margin-left: -11px;
  }


`
