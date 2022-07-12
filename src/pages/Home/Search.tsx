import React, {ChangeEvent, useEffect, useState} from 'react';
import UseAnimation from "react-useanimations";
import searchToX from "react-useanimations/lib/searchToX";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getCardsPacsTC, setSearchAC} from "../../store/reducers/cards-packs-reducer";


function Search() {
    const packName = useAppSelector(state => state.cardsPacksReducer.query_params.packName);

    const [value, setValue] = useState<string>(packName || '');

    const dispatch = useAppDispatch()

    const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        dispatch(setSearchAC(e.currentTarget.value));
    };

    useEffect(() => {
        //dispatch(getCardsPacsTC());
    }, [packName]);


    return (
        <Wrap>
            <div className="packList__headerBlock__inputWrap">
                <input
                    value={value}
                    onChange={onSearchHandler}
                    className="packList__headerBlock__Search"
                    type="text"
                    placeholder="Search..."/>
                <UseAnimation
                    size={32}
                    wrapperStyle={{
                        position: "absolute", top: "12px",
                        overflow: "inherit",
                        left: '-13px',
                        opacity: "60%"
                    }}
                    animation={searchToX}
                    fillColor="#21268F"
                />
            </div>
        </Wrap>
    );
}

export default Search;

const Wrap = styled.div`
  .packList__headerBlock__Search {
    background: #ECECF9;
    opacity: 0.5;
    border: 1px solid #635D80;
    border-radius: 6px;
    width: 461px;
    height: 36px;
    padding-left: 36px;
    text-decoration: none;
    /************/
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #2D2E46;

    @media only screen and (max-width: 920px) {
      width: 361px;
    }

    @media only screen and (max-width: 840px) {
      width: 261px;
    }


  }

  .packList__headerBlock__inputWrap {
    display: inline-block;
    position: relative;
  }

  svg {
    position: absolute;
    left: 1rem;
    width: 25px;
    height: 60px;
    opacity: 30%;
    top: -11px;
    bottom: 0;
  }


`
