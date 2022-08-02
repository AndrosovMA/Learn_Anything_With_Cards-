import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../store/store";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState} from "react";
import {getCardsPacksTC} from "../../store/reducers/cards-packs-reducer";


export default function Paginations() {
    const dispatch = useAppDispatch()

    const pageCount = useAppSelector(state => state.cardsPacksReducer.query_params.pageCount)
    const pageCountStringValue = String(pageCount);

    const [countPacksOnPage, setCountPacksOnPage] = useState(pageCountStringValue);

    const handleChange = (event: SelectChangeEvent) => {
        setCountPacksOnPage(event.target.value as string);
        const pageCount = Number(event.target.value);
        dispatch(getCardsPacksTC(pageCount));
    };

    const changeNumberPage = (event: React.ChangeEvent<unknown>, numberPage: number) => {
        dispatch(getCardsPacksTC(+countPacksOnPage, numberPage));
    }

    return (
        <>
            <Wrap>
                <div className="wrap__showPack">
                    <span>Show Pack: </span>
                    <FormControl sx={{m: 1, minWidth: 120}} size="small">
                        <Select
                            value={countPacksOnPage}
                            onChange={handleChange}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Stack spacing={2}>
                    <Pagination
                        count={5500}
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
  align-items: center;

  .wrap__showPack {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  
  span {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.01071em;
    color: rgba(0, 0, 0, 0.87);
  }

`
