import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ButtonField} from "../../components/Button";


const NotFound = () => {

    return (
        <>
            <Wrap>
                    <div className="numberError">
                        <h1 className="error" data-text="404">404</h1>
                    </div>
                    <h2 className="notFound">Страница не найдена</h2>
                    <ButtonField>
                        <Link to="/">Back to Home</Link>
                    </ButtonField>
            </Wrap>
        </>
    );
}

export default NotFound;

const Wrap = styled.div`

  .return {
    position: absolute;
    text-decoration: none;
    color: #000;
    font-size: 25px;
    font-weight: bold;
    top: 19%;
    left: 14%;
    padding: 20px 40px;
    border: 2px solid #000;
    box-shadow: 10px 10px 0 #ee1b52;
    transition: .1s;
  }
  
  button {
    margin-left: 50px;
  }

  .return:hover {
    box-shadow: -10px -10px 0 #69c9d0;
  }

  .numberError {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .error {
    color: #000;
    margin: 0;
    font-size: 350px;
    letter-spacing: 10px;

    @media (max-width: 768px) {
      //width: calc(100vw - 100px);
      font-size: 280px;
    }

    @media (max-width: 378px) {
      //width: calc(100vw - 100px);
      font-size: 200px;
    }
  }

  .error::before, .error::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }

  .error::before {
    color: #ee1b52;
    animation: glitch 1s infinite;
  }

  .error::after {
    color: #69c9d0;
    animation: glitch 2s infinite;
  }

  .notFound {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    padding: 0 30px;
    border-left: 20px solid #ee1b52;
    border-right: 20px solid #69c9d0;
    color: white;
  }

  @keyframes glitch {
    0% {
      top: -5px;
      left: -3px;
    }
    25% {
      top: 0;
      left: -3px;
    }
    50% {
      top: 5px;
      left: 3px;
    }
    75% {
      top: 0;
      left: 5px;
    }
    100% {
      top: -5px;
      left: -3px;
    }
  }
`