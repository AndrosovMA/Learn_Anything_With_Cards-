import {useFormik} from "formik";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ButtonField} from "../../components/Button";


export const ForgotPassword = () => {
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
                    <span className="sign">Forgot your password?</span>
                </div>
                <div className="form__control">
                    <form onSubmit={formik.handleSubmit}>
                        <Form>
                            <span className="form__control__span">Email</span>
                            <input className="form__group__email"
                                   {...formik.getFieldProps('email')}
                                   type="email"
                            />
                            <span className='form__group__description'>Enter your email address and we will send you further instructions </span>
                            <ButtonField>
                                <Link to="/recovery">Send Instructions</Link>
                            </ButtonField>
                            <span className="form__group__password">Did you remember your password?</span>
                            <Link className="form__group__login" to="/login">Try logging in</Link>
                        </Form>
                    </form>
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
    max-width: 413px;
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
  width: 100%;


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
    width: 80%;
    margin-top: 56px;

  }


  .form__group__description {
    width: 80%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2D2E46;
    opacity: 0.5;
    margin-top: 30px;
  }

  .form__group__password {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2D2E46;
    opacity: 0.5;
    margin-top: 30px;
  }

  .form__group__login {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #21268F;
    margin-top: 11px;
    text-decoration: none;
  }

`


