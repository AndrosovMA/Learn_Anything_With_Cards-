import {Checkbox, FormControlLabel,} from "@mui/material"
import {useFormik} from "formik";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ButtonField} from "../../components/Button";
import {useState} from "react";
import openShow from "../../styles/assets/img/openShow.svg";
import closeShow from "../../styles/assets/img/closeShow.svg";
import {loginTC} from "../../store/reducers/login-reducer";
import {DispatchType} from "../../store/store";
import {useDispatch} from "react-redux";


export const Login = () => {
    const dispatch: DispatchType = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            const thunk = loginTC({email: values.email, password: values.password, rememberMe: values.rememberMe})
            dispatch(thunk);
            alert(JSON.stringify(values));
        },
    })

    // const [valuePass, setValuePass] = useState("")
    const [isVisible, setIsVisible] = useState<boolean>(true)
    //
    // const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setValuePass(e.currentTarget.value)
    // }
    //
    const toggleShow = () => {
        console.log(formik.values.email)
        setIsVisible(!isVisible);
    }



    return <>

        <Wrap>
            <div className="form__wrapper">
                <div className="form__text">
                    <span className="contents">It-incubator</span>
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

                                   type={isVisible ? "password" :"text"}
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
                                <Link className="form__control__rememberPassword" to="/password">Forgot Password</Link>
                            </div>
                            <ButtonField>Login</ButtonField>
                            <span className="form__control__rememberAccount">Don’t have an account?</span>
                            <Link className="form__control__signUp" to="/register">Sign Up</Link>
                        </Form>
                    </form>
                </div>
            </div>
        </Wrap>
    </>
}

// types


//styled
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

