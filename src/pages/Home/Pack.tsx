import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import {BsPencil, BsTrash} from "react-icons/bs";
import {GiBlackBook} from "react-icons/gi";


function Pack() {
    return (
        <Containers>
            <div className="nthChildOdd">
                <div>
                    <ul className={'packBox'}>
                        <li className={'packItem'}>
                            <NavLink to={'/'} className={'packName'}>
                                Svyatoslav
                            </NavLink>
                        </li>
                        <li className={'packItem'}>
                            <p style={{marginLeft: "32px"}}>24</p>
                        </li>
                        <li className={'packItem'}>
                            <p style={{marginLeft: "45px"}}>06/07/2022</p>
                        </li>
                        <li className={'packItem'}>
                            <p style={{marginLeft: "53px"}}>Author</p>
                        </li>
                        <li>
                            <div className="boxBtn">
                                <BsTrash className="btnUpdate"/>
                                <BsPencil className="learningIcons"/>
                                <GiBlackBook className="btnDelete"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Containers>
    );
}

export default Pack;

const Containers = styled.div`

  .nthChildOdd:nth-child(odd) {
    background: #F8F7FD;
  }

  .packBox {
    padding: 16px 110px 16px 24px;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }


  .packItem {
    flex: 1 1 25%;
    flex-grow: 0;
  }

  .packName {
    font-size: 13px;
    color: #000000;
    text-decoration: none;
  }

  .btnUpdate {
    height: 25px;
    width: 25px;
    position: absolute;
    cursor: pointer;
  }

  .learningIcons {
    height: 22px;
    width: 22px;
    position: absolute;
    margin-left: 29px;
    cursor: pointer;
  }

  .btnDelete {
    position: absolute;
    height: 25px;
    margin-left: 20px;
    width: 100px;
    cursor: pointer;
  }

  .boxBtn {
    display: flex;
    align-items: center;
    list-style-type: none;

  }

  li {
    outline: none;
    text-decoration: none;
    list-style-type: none
  }

`
