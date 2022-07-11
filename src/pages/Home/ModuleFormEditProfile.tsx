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
import {logoutTC} from "../../store/reducers/login-reducer";
import {useAppDispatch} from "../../store/store";
import Avatar from "../../styles/img/Avatar.png";
import {BsPencil} from "react-icons/bs";
import styled from "styled-components";
import DialogContentText from "@mui/material/DialogContentText";

export default function ModuleFormEditProfile() {
    const [open, setOpen] = React.useState(false);

    const dispatch = useAppDispatch()

    const handleClickLogout = () => {
        dispatch(logoutTC())
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="profile__above_settings_wrap">
                <Button>
                    <UseAnimations
                        onClick={handleClickOpen}
                        animation={settings}
                        size={32}
                        wrapperStyle={{opacity: 0.6, color: "green"}}/>
                </Button>
                <Button onClick={handleClickLogout}>
                    <Logout/>
                </Button>

            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContentText>
                    Make changes to your profile, they can be changed again!
                </DialogContentText>
                <DialogContent>
                    <ImgWrap>
                        <img src={Avatar} alt="photo"/>
                        <IconButton
                            className="learningIcons"
                            color={"warning"}>
                            <BsPencil/>
                        </IconButton></ImgWrap>
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
                        onClick={handleClose}>Cancel</Button>
                    <Button
                        variant='contained'
                        color="success"
                        onClick={handleClose}>Save</Button>
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
