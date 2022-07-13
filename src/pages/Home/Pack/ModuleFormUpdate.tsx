import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UseAnimations from "react-useanimations";
import settings2 from "react-useanimations/lib/settings2";
import {useAppDispatch} from "../../../store/store";
import {updateCardsPackTC} from "../../../store/reducers/cards-packs-reducer";
import styled from "styled-components";

type ModuleFormUpdateType = {
    _id: string
    user_id: string
}

export default function ModuleFormUpdate({_id, user_id}: ModuleFormUpdateType) {
    const [open, setOpen] = React.useState(false);

    const dispatch = useAppDispatch()


    const handleClickUpdatePack = (id: string, userId: string) => {
        dispatch(updateCardsPackTC({cardsPack: {_id: id, name: 'UPDATED'}}))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Wrap>
            <Button onClick={handleClickOpen}>

                <UseAnimations

                    size={34}
                    animation={settings2}
                    wrapperStyle={{
                        color: "red",
                        opacity: 0.9,
                        cursor: "pointer",
                    }}
                />


            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Pack</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you really want to remove Pack Name - Name Pack?
                        All cards will be excluded from this course.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Pack name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <ButtonCustomOne onClick={handleClose}>Cancel</ButtonCustomOne>
                    <ButtonCustomTwo onClick={() => handleClickUpdatePack(_id, user_id)}>Subscribe</ButtonCustomTwo>
                </DialogActions>
            </Dialog>
        </Wrap>
    );
}
const Wrap = styled.div`
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
