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
import styled from "styled-components";
import DialogContentText from "@mui/material/DialogContentText";
import {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";
import {MdAddAPhoto} from "react-icons/md";

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
                        onClick={() => {
                            handleClose(true)
                        }}
                        animation={settings}
                        size={32}
                        wrapperStyle={{opacity: 0.6, color: "green"}}/>
                </Button>
                <Button onClick={handleClickLogout}>
                    <Logout/>
                </Button>

            </div>
            <Dialog open={open} onClose={() => {
                handleClose(false)
            }}>
                <DialogTitle>Personal information</DialogTitle>
                <DialogContentText style={{padding: "10px"}}>
                    Make changes to your profile, they can be changed again!
                </DialogContentText>

                <DialogContent>
                    <ImgWrap>
                        <img
                            style={{borderRadius: "50%", objectFit: "cover"}}
                            src={avatar} alt="photo" width='100' height='100'/>
                        <IconButton
                            className="learningIcons"
                            color={"warning"}>
                            <MdAddAPhoto onClick={() => {
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
                    <EditConfig>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="nick name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <Button variant="contained">Edit</Button>
                    </EditConfig>
                </DialogContent>


                <DialogActions>
                    <ButtonCustomOne

                        onClick={() => {
                            handleClose(false)
                            changeStatusEditAvatar(false)
                        }
                        }>Cancel
                    </ButtonCustomOne>
                    <ButtonCustomTwo

                        onClick={() => {
                            handleClose(false)
                            handleUpdateMeOnClick()
                        }}>Save</ButtonCustomTwo>

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
    background: #abaaaa;
    width: 42px;
    height: 42px;
    display: inline-block;
    margin-left: -34px;
    color: #262626;
    border: 2px solid black;
    border-radius: 50%;
    padding: 4px;
  }

`
const EditConfig = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const ButtonCustomOne = styled.button`
  background: #D7D8EF;
  box-shadow: 0 4px 18px rgba(33, 38, 143, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  /*********/
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #21268F;
  opacity: 0.8;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  min-width: 100px;
  height: 36px;
  text-decoration: none;
  outline: none;
  border: 0;
  cursor: pointer;

`
const ButtonCustomTwo = styled(ButtonCustomOne)`
  background: #21268F;
  color: #ECECF9;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`
