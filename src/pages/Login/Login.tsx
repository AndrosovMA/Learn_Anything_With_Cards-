import {Avatar, Checkbox, FormControlLabel} from "@mui/material"
import {useFormik} from "formik";
import styled from "styled-components";
import {Link, Navigate} from "react-router-dom";
import {ButtonField} from "../../components/ButtonField";
import {useState} from "react";
import openShow from "../../styles/assets/img/openShow.svg";
import closeShow from "../../styles/assets/img/closeShow.svg";
import {loginTC} from "../../store/reducers/login-reducer";
import {AppStateType, DispatchType} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import logo from "../../styles/assets/icon/logo.svg"


export const Login = () => {
    const dispatch: DispatchType = useDispatch();
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.loginReducer.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            const thunk = loginTC({email: values.email, password: values.password, rememberMe: values.rememberMe})
            dispatch(thunk);
        },
    })

    const [isVisible, setIsVisible] = useState<boolean>(true)

    const toggleShow = () => {
        setIsVisible(!isVisible);
    }

    if (isLoggedIn) {
        return <Navigate to={"/home"}/>
    }

    return <>
        <Wrap>
            <BlockLeft>
                <div className="block__left__wrap">
                    <h1>Card training</h1>
                    <span>We will train you and support you every day until you personally find</span>
                    <div id="axis">
                        <img className="object rocket move-up"
                             src="https://minimal-assets-api.vercel.app/assets/images/home/rocket.png"
                             alt="rocket"/>
                    </div>
                </div>

            </BlockLeft>

            <BlockRight>

                <WrapForm>
                    <div className="form__wrapper">
                        <div className="form__text">
                            <img src={logo} alt="logo"/>
                            <span className="sign">Sign In</span>
                        </div>
                        <div className="form__control">
                            <form onSubmit={formik.handleSubmit}>
                                <Form>
                                    <span className="form__control__span">Email</span>
                                    <input className="form__group__email"
                                           name="email"
                                           value={formik.values.email}
                                           onChange={formik.handleChange}
                                           type="email"
                                    />
                                    <span className="form__control__span">Password</span>
                                    <input className="form__group__password"
                                           name="password"
                                           value={formik.values.password}
                                           onChange={formik.handleChange}

                                           type={isVisible ? "password" : "text"}
                                    />
                                    <div className="form__control__icon">

                                        <img className="form__control__img"
                                             onClick={toggleShow}
                                             src={!isVisible ? openShow : closeShow}
                                             alt="open"/>

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
                                        <Link className="form__control__rememberPassword" to="/forgot-password">Forgot
                                            Password</Link>
                                    </div>
                                    <ButtonField>Login</ButtonField>
                                    <span className="form__control__rememberAccount">Don’t have an account?</span>
                                    <Link className="form__control__signUp" to="/registration">Sign Up</Link>
                                </Form>
                            </form>
                        </div>
                    </div>
                </WrapForm>
            </BlockRight>

        </Wrap>
    </>
}


const Wrap = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  width: 80%;
  margin-left: 10%;
`
const BlockLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  position: relative;

  .block__left__wrap {
    -webkit-align-items: center;
    -ms-flex-align: center;
    height: 100%;
    text-align: center;
    margin-top: 11%;

  }

  h1 {
    font-family: 'Work Sans', sans-serif;
    margin-top: 5%;
    font-size: 70px;
    color: #ffffff;
    font-weight: 900;
  }

  span {
    font-size: 40px;
    letter-spacing: 1px;
    font-weight: 100;
    opacity: 0.7;
    /********/

    display: inline-block;
    max-width: 55rem;
  }
`

const BlockRight = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`


//styled
const WrapForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  .header {
    background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
    background: gray;
  }

  .form__wrapper {
    min-height: 600px;
    min-width: 513px;
    background: #f3eeff;
    border-radius: 8px;
    //margin-top: 5%;
    margin-top: 13%;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 16px 50px 24px rgba(0, 0, 0, 0.2);
    border-right: 4px solid #e8d9f7;
    animation: anim-form__wrapper 10s infinite;

    /***********/


  }

  @keyframes anim-form__wrapper {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    }
    25% {
      border-radius: 58% 42% 75% 35%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
      box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
    }
    75% {
      border-radius: 33% 67% 58% 55%/63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    }
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

  .form__control__img {
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

