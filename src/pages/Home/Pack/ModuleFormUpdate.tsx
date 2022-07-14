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
import {ButtonStyledComponent} from '../../../components/ButtonStyledComponent';

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
                    <ButtonStyledComponent
                        styleClose
                        width={"100px"}
                        onClick={handleClose}>Cancel</ButtonStyledComponent>
                    <ButtonStyledComponent
                        width={"100px"}
                        onClick={() => handleClickUpdatePack(_id, user_id)}>Subscribe</ButtonStyledComponent>
                </DialogActions>
            </Dialog>
        </Wrap>
    );
}
const Wrap = styled.div`
`
