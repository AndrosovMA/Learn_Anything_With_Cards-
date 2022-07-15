import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import trash2 from "react-useanimations/lib/trash2";
import UseAnimations from "react-useanimations";
import {useAppDispatch} from "../../../store/store";
import {deleteCardsPackTC} from "../../../store/reducers/cards-packs-reducer";
import styled from "styled-components";
import { ButtonStyledComponent } from '../../../components/ButtonStyledComponent';

type ModuleFormDeleteType = {
    _id:string
    user_id: string
}

export default function ModuleFormDelete({_id, user_id}: ModuleFormDeleteType) {
    const [open, setOpen] = React.useState(false);

    const dispatch = useAppDispatch()


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleClickDeletePack = (id: string, userId: string) => {
        dispatch(deleteCardsPackTC(id))
    }


    return (
        <Wrap>
            <Button
                onClick={handleClickOpen}
                className="packList__headerBlock__btn">

                <UseAnimations
                    size={34}
                    animation={trash2}
                    wrapperStyle={{
                        color: "red",
                        opacity: 0.9,
                        cursor: "pointer",
                    }}
                    strokeColor="#d32f2f"
                />

            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Pack"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to remove Pack Name - Name Pack?
                        All cards will be excluded from this course.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonStyledComponent
                        width={"100px"}
                        styleClose
                        onClick={handleClose}>Delete</ButtonStyledComponent>
                    <ButtonStyledComponent
                        width={"100px"}
                        onClick={() => handleClickDeletePack(_id, user_id)}
                            autoFocus>
                        Agree
                    </ButtonStyledComponent>
                </DialogActions>
            </Dialog>
        </Wrap>
    );
}
const Wrap = styled.div`
`
