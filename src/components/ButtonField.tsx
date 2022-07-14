import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "../styles/ButtonField.module.scss"
import styled from "styled-components";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    size?: string
    className?: string
    type?: string
    styleCancel?: boolean
}

export const ButtonField: React.FC<SuperButtonPropsType> = ({
                                                                size,
                                                                styleCancel,
                                                                className, ...props
                                                            }
) => {

    const finalClassName = `${styleCancel ? s.cancel : s.default} ${className}`

    return (
        <>
            <Wrap>
                <button
                    className={finalClassName}
                    {...props}
                />
            </Wrap>
        </>
    )
}
const Wrap = styled.div`
  .form__control__btn {
    width: 266px;
    height: 36px;
    //background: #21268F;
    background: ${props => props.color};
    box-shadow: 0 4px 18px rgba(33, 38, 143, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    border: none;
    margin-top: 70px;
    /************/
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ECECF9;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    //Если есть
    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #ECECF9;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      text-decoration: none;
    }`
