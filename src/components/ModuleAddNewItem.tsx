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
            <ButtonCustom
                onClick={handleClickOpen}
                className="packList__headerBlock__btn">Add new Pack
            </ButtonCustom>
            <Dialog open={open} onClose={handleClose}>
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
                    <Button
                        variant='contained'
                        color="error"
                        onClick={handleClose}>Cancel</Button>
                    <Button
                        variant='contained'
                        color="success"
                        onClick={handleClickSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const ButtonCustom = styled.button`
  background: #21268F;
  box-shadow: 0 4px 18px rgba(33, 38, 143, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  /*********/
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ECECF9;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  min-width: 184px;
  height: 36px;
  text-decoration: none;
  outline: none;
  border: 0;
  cursor: pointer;
`

