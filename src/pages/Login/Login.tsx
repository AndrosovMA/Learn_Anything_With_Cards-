import {
    Button, Checkbox, FormControl, FormControlLabel,
    FormGroup, FormLabel, Grid, TextField
} from "@mui/material"
import {useFormik} from "formik";
import {AiFillEye} from "react-icons/ai";
import styled from "styled-components";


export const Login = () => {
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
                        <input
                            className="form__group__password"
                            {...formik.getFieldProps('password')}
                            type="password"
                        />
                        <div className="form__control__icon">
                            <AiFillEye/>
                        </div>
                        <FormControlLabel
                            label={'Remember me'}
                            control={
                                <Checkbox
                                    name='rememberMe'
                                    onChange={formik.handleChange}
                                    checked={formik.values.rememberMe}
                                />}
                        />
                        <Button
                            type={'submit'}
                            variant={'contained'}
                            color={'primary'}>
                            Login
                        </Button>
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
    margin-top: 8%;

  }

  .form__control {
    display: flex;
    align-items: center;
    margin-top: 20%;
    justify-content: center;
  }

  .form__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
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
    border: none;
    /***********/
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #2D2E46

  }

  .form__group__password {
    width: 347px;
    outline: none;
    border: none;
    /*************/
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #2D2E46;

  }

  input[type="password"] {
    font-family: "fontello", sans-serif;
    font-style: normal;
    font-weight: normal;
    speak: none;

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-security: circle;
    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */

    /* add spacing to better separate each image */
    letter-spacing: 2px;
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

`

