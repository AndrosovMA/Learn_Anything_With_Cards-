import styled from "styled-components";

interface BtnPropsWeight {
    width?: "100px" |"168px" | "200px" | "250px"
    border?: "10px" |"30px"
}

interface BtnPropsBackground {
    styleClose?: boolean
}

export const ButtonStyledComponent = styled.button<BtnPropsBackground & BtnPropsWeight>`
  color: ${({styleClose}) => styleClose ? '#21268F' : '#ECECF9'};
  background: ${({styleClose}) => styleClose ? '#D7D8EF' : '#21268F'};
  border-radius: ${({ border = "10px" }) => border};
  /*********/
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  opacity: 0.9;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  width: ${({ width = "168px" }) => width};
  height: 36px;
  text-decoration: none;
  outline: none;
  border: 0;
  cursor: pointer;
  margin-left: 20px;

  /******************/
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
  rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  :hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(74, 174, 169, 0.8);
  }

`
