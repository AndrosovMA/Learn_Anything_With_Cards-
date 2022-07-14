import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../store/store";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState} from "react";
import {getNumberPacsPageTC} from "../../store/reducers/cards-packs-reducer";


export default function Paginations() {
    const dispatch = useAppDispatch()

    const pageCount = useAppSelector(state => state.cardsPacksReducer.query_params.pageCount)
    const pageCountStringValue = String(pageCount);

    const [countPacksOnPage, setCountPacksOnPage] = useState(pageCountStringValue);

    const handleChange = (event: SelectChangeEvent) => {
        setCountPacksOnPage(event.target.value as string);
        const pageCount = Number(event.target.value);
        dispatch(getNumberPacsPageTC(pageCount));
    };

    const changeNumberPage = (event: React.ChangeEvent<unknown>, numberPage: number) => {
        dispatch(getNumberPacsPageTC(+countPacksOnPage,numberPage));
    }

    return (
        <>
            <Wrap>
                <FormControl sx={{m: 1, minWidth: 120}} size="small">
                    <InputLabel id="count-packs">Packs on page:</InputLabel>
                    <Select
                        labelId="count-packs"
                        id="count-packs"
                        value={countPacksOnPage}
                        label="Packs"
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>

                <Stack spacing={2}>
                    <Pagination
                        count={10}
                        onChange={changeNumberPage}
                        variant="outlined"
                        shape="rounded"/>
                </Stack>
            </Wrap>

        </>
    );
}

const Wrap = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: end;

`
