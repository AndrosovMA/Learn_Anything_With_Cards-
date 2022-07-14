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
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonStyledComponent
                        width={"100px"}
                        styleClose
                        onClick={handleClose}>Disagree</ButtonStyledComponent>
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
