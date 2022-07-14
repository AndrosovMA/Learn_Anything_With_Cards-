import React, {KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from "styled-components";
import {ChangeEvent} from "react";
import {ButtonStyledComponent} from "./ButtonStyledComponent";





export default function FormDialog({addItem}: {addItem: (tittle: string) => void}) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [error, setError] = useState<string | null>(null)

    const handleClickOpen = () => {
        if (error !== null) {
            setError(null)
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickSave = () => {
        if (title.trim() !== "") {
            addItem(title.trim())
            setTitle("")
            setOpen(false)
        } else {
            setError("Title is required")
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleClickSave()
            setOpen(false)
        }
    }

    return (
        <div>
            <ButtonStyledComponent
                width={"200px"}
                onClick={handleClickOpen}
                className="packList__headerBlock__btn">Add new Pack
            </ButtonStyledComponent>
            <Dialog open={open} onClose={handleClose}>
                <Wrap>
                <DialogTitle>Add New Pack</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Write a package of names - this name can also be changed
                    </DialogContentText>
                    <TextField
                        autoFocus
                        value={title}
                        onChange={handleChange}
                        onKeyPress={onEnterPress}
                        margin="dense"
                        id="name"
                        label="Pack Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={!!error}
                    />
                    {error && <span style={{color: "red"}}>{error}</span>}
                </DialogContent>
                <DialogActions>
                    <ButtonStyledComponent
                        styleClose
                        width={"100px"}
                        onClick={handleClose}>Cancel</ButtonStyledComponent>
                    <ButtonStyledComponent
                        width={"100px"}
                        onClick={handleClickSave}>Save</ButtonStyledComponent>
                </DialogActions>
                </Wrap>
            </Dialog>
        </div>
    );
}

const Wrap = styled.div`
padding: 20px;
`

