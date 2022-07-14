import {useState} from "react";
import {useFormik} from "formik";
import {Link, Navigate} from "react-router-dom";
import * as Yup from 'yup';

import styled from "styled-components";
import openShow from "../../styles/assets/img/openShow.svg"
import closeShow from "../../styles/assets/img/closeShow.svg"
import {useAppDispatch, useAppSelector} from "../../store/store";
import {register} from "../../store/reducers/register-reducer";
import { ButtonStyledComponent } from "../../components/ButtonStyledComponent";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Register = () => {

    const [isVisibleOne, setIsVisibleOne] = useState<boolean>(true)
    const [isVisibleTwo, setIsVisibleTwo] = useState<boolean>(true)

    const dispatch = useAppDispatch()
    const regData = useAppSelector(state => state.registerReducer.isRegisteredIn)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Field required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        validationSchema: Yup.object().shape({
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

        }),
        onSubmit: data => {
            dispatch(register(data));
            formik.resetForm();
        },
    })

    const isAddDisabled = !formik.values.email.length && !formik.values.password.length ? true : undefined
    const classForAddButton = !formik.values.email || !formik.values.password ? "form__control__btn__disabled" : "form__control__btn"

    const toggleShowOne = () => {
        setIsVisibleOne(!isVisibleOne)
    }
    const toggleShowTwo = () => {
        setIsVisibleTwo(!isVisibleTwo)
    }


    const handleSubmit = () => {
        const {password, passwordConfirm} = formik.values
        if (password !== passwordConfirm) {
            return (
                alert("Пароли не совпадают")
            )
        } else {
            console.log("Passwords match!!!");
        }
    }

    //при удачной регистрации!!!
    if (regData) {
        return <Navigate to="/login"/>;
    }


    return <>
        <Wrap>
            <div className="form__wrapper">
                <div className="form__text">
                    <span className="contents">It-incubator</span>
                    <span className="sign">Sign Up</span>
                </div>
                <div className="form__control">
                    <form onSubmit={formik.handleSubmit}>
                        <Form>
                            <span className="form__control__span">Email</span>
                            <input className="form__group__email"
                                   type="email"
                                   {...formik.getFieldProps("email")}

                            />

                            {formik.touched.email && formik.errors.email ? (
                                <span className="form__group__email_error">{formik.errors.email}</span>
                            ) : null}

                            <span className="form__control__span">Password</span>
                            <input className="form__group__password"
                                   type={isVisibleOne ? "password" : "text"}
                                   {...formik.getFieldProps("password")}

                            />

                            {formik.touched.password && formik.errors.password ? (
                                <span className="form__group__password_error">{formik.errors.password}</span>
                            ) : null}

                            <span className="form__control__span">Confirm password</span>
                            <input className="form__group__password"
                                   type={isVisibleTwo ? "password" : "text"}
                                   {...formik.getFieldProps("passwordConfirm")}
                            />

                            {formik.touched.password && formik.errors.password ? (
                                <span className="form__group__password_error">{formik.errors.password}</span>
                            ) : null}

                            <div className="form__control__icon">
                                <img className="form__control__img"
                                     onClick={toggleShowOne}
                                     src={!isVisibleOne ? openShow : closeShow}
                                     alt="open"/>
                            </div>

                            <div className="form__control__iconTwo">
                                <img className="form__control__img"
                                     onClick={toggleShowTwo}
                                     src={!isVisibleTwo ? openShow : closeShow}
                                     alt="close"/>

                            </div>
                            <div className="form__control__btnWrap">
                                <ButtonStyledComponent
                                    styleClose
                                    type="submit"
                                    width={"100px"}
                                    className="form__control__btnCancel">
                                    <Link to="/login">Cancel</Link>
                                </ButtonStyledComponent>
                                <ButtonStyledComponent
                                    onClick={handleSubmit}
                                    type="submit"
                                    disabled={isAddDisabled}
                                    className={classForAddButton}>Register
                                </ButtonStyledComponent>
                            </div>
                        </Form>
                    </form>
                </div>
            </div>
        </Wrap>
    </>
}


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
    background: #f3eeff;
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
    background: #f3eeff;
  }

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
    background: #f3eeff;
  }

  .form__group__password_error {
    text-align: inherit;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #d53030;
    opacity: 0.5;
    display: inline-block;
    width: 100%;
  }

  .form__group__email_error {
    text-align: inherit;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #d53030;
    opacity: 0.5;
    display: inline-block;
    width: 100%;
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

  .form__control__iconTwo {
    position: absolute;
    top: 162px;
    left: 320px;
  }

  .form__control__img {
    width: 24px;
    height: 24px;
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


  .form__control__rememberPassword {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: cornflowerblue;
    text-decoration: none;
  }

  .form__control__btnWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 93px;
  }

  .form__control__btnCancel {
    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #21268F;
      opacity: 0.8;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
      text-decoration: none;
    }

  }

  .form__control__btn {
    background: #21268F;
    box-shadow: 0 4px 18px rgba(33, 38, 143, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    width: 187px;
    height: 36px;
    /*************/
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ECECF9;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
  }

  .form__control__btn__disabled {
    background: #21268F;
    box-shadow: 0 4px 18px rgba(33, 38, 143, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    width: 187px;
    height: 36px;
    /*************/
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ECECF9;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    opacity: 50%;
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

