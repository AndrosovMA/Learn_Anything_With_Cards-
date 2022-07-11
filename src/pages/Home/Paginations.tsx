import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "styled-components";

export default function Paginations() {
    return (
        <Wrap>
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded"/>
            </Stack>
        </Wrap>
    );
}

const Wrap = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: end;
    
`
