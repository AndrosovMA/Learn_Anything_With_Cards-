import {Checkbox, FormControlLabel,} from "@mui/material"
import {useFormik} from "formik";
import {AiFillEye} from "react-icons/ai";
import styled from "styled-components";
import {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import InputField from "../../components/InputField";
import {ButtonField} from "../../components/Button";


export const Login = () => {

    const [valuePass, setValuePass] = useState("")
    const [isVisible, setIsVisible] = useState<boolean>(true)

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValuePass(e.currentTarget.value)
    }

    const toggleShow = () => {
        console.log(isVisible)
        setIsVisible(!isVisible);
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })

    return <>

        <Wrap>
            <div className="form__wrapper">
                <div className="form__text">
                    <span className="contents">It-incubator</span>
                    <span className="sign">Sign In</span>
                </div>
                <div className="form__control">
                    <Form>
                        <span className="form__control__span">Email</span>
                        <input className="form__group__email"
                               {...formik.getFieldProps('email')}
                               type="email"
                        />
                        <span className="form__control__span">Password</span>
                        <InputField
                            value={valuePass}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}
                            isVisible={isVisible}

                        />
                        <div className="form__control__icon">
                            <AiFillEye
                                onClick={toggleShow}
                                style={{cursor: "pointer"}}/>
                        </div>
                        <div className="form__control__password__wrap">
                            <FormControlLabel
                                className="form__control__password__label"
                                label={'Remember me'}
                                control={
                                    <Checkbox
                                        name='rememberMe'
                                        onChange={formik.handleChange}
                                        checked={formik.values.rememberMe}
                                    />}
                            />
                            <Link className="form__control__rememberPassword" to="/password">Forgot Password</Link>
                        </div>
                        <ButtonField>Login</ButtonField>
                        <span className="form__control__rememberAccount">Don’t have an account?</span>
                        <Link className="form__control__signUp" to="/register">Sign Up</Link>
                    </Form>
                </div>
            </div>
        </Wrap>
    </>
}

// types

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  .header {
    background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
    background: gray;
  }

  .form__wrapper {
    min-height: 600px;
    min-width: 413px;
    background: #F9F9FE;
    border-radius: 8px;
    margin-top: 5%;

  }

  .form__control {
    display: flex;
    align-items: center;
    margin-top: 38px;
    justify-content: center;
  }

  .form__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }

  .contents {
    text-align: center;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    color: #2D2E46;
  }

  .sign {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #2D2E46;
    margin-top: 32px;
  }

`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;


  .form__group__email {
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
    color: #2D2E46;
    background: #F9F9FE;
  }

  .form__control__span {

    text-align: inherit;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #24254A;
    opacity: 0.5;
    display: inline-block;
    width: 100%;

    :not(:first-child) {
      margin-top: 25px;
    }
  }

  .form__control__icon {
    position: absolute;
    top: 90px;
    left: 320px;
  }

  .form__control__password__wrap {
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 48px;
  }

  .form__control__password__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #b0bdd3;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  .form__control__rememberPassword {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: cornflowerblue;
    text-decoration: none;
  }
  

  .form__control__rememberAccount {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #2D2E46;
    opacity: 0.5;
    margin-top: 31px;
  }

  .form__control__signUp {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #21268F;
    text-decoration: none;
    margin-top: 11px;
  }

`

