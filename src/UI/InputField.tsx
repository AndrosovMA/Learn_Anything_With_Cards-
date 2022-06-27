import React from 'react';
import styled from "styled-components";


interface InputType {
    value?: string
    onChange?: (e:any) => void
    className?: string
    type?: string
    placeholder?: string
    label?: string
    isVisible?: boolean

}

const InputField = ({value, onChange, className, type, placeholder, label, isVisible, ...props}: InputType) => {
        return (
            <>
                <Wrap>
                    {label && <label htmlFor="input-field">{label}</label>}
                    <input
                        type={isVisible ? "password" :"text"}
                        value={value}
                        className="form__group__password"
                        placeholder={placeholder}
                        onChange={onChange}
                        {...props}
                    />
                </Wrap>
            </>
        )
    }
;

export default InputField;

const Wrap = styled.div`
  .form__group__password {
    font-family: 'Poppins', sans-serif;
    width: 347px;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    border-top: #171718;
    border-left: none;
    border-right: none;
    border-bottom-color: #dfdfdf;
    background: #F9F9FE;
  }
`