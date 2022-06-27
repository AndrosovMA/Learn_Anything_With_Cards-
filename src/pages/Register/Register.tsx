import {useFormik} from "formik";
import {AiFillEye} from "react-icons/ai";
import {Link} from "react-router-dom";
import styled from "styled-components";
import InputField from "../../components/InputField";
import {ChangeEvent, useState} from "react";


export const Register = () => {

    const [valuePasswordOne, setValuePassRegOne] = useState("")
    const [valuePasswordTwo, setValuePassRegTwo] = useState("")

    const [isVisibleOne, setIsVisibleOne] = useState<boolean>(true)
    const [isVisibleTwo, setIsVisibleTwo] = useState<boolean>(true)

    const handlePasswordChangeOne = (e: ChangeEvent<HTMLInputElement>) => {
        setValuePassRegOne(e.currentTarget.value)
    }
    const handlePasswordChangeTwo = (e: ChangeEvent<HTMLInputElement>) => {
        setValuePassRegTwo(e.currentTarget.value)
    }

    const toggleShowOne = () => {
        valuePasswordOne ?
            setIsVisibleOne(!isVisibleOne)
            : setIsVisibleOne(isVisibleOne)

    }
    const toggleShowTwo = () => {
        valuePasswordTwo ?
            setIsVisibleTwo(!isVisibleTwo)
            : setIsVisibleTwo(isVisibleTwo)
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
                    <span className="sign">Sign Up</span>
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
                            value={valuePasswordOne}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handlePasswordChangeOne(e)}
                            isVisible={isVisibleOne}
                        />
                        <span className="form__control__span">Confirm password</span>
                        <InputField
                            value={valuePasswordTwo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handlePasswordChangeTwo(e)}
                            isVisible={isVisibleTwo}
                        />
                        <div className="form__control__icon">
                            <AiFillEye
                                onClick={toggleShowOne}
                                style={{cursor: "pointer"}}/>
                        </div>
                        <div className="form__control__iconTwo">
                            <AiFillEye
                                onClick={toggleShowTwo}
                                style={{cursor: "pointer"}}/>
                        </div>
                        <div className="form__control__btnWrap">
                            <button type="submit" className="form__control__btnCancel">
                                <Link to="/login">Cancel</Link>
                            </button>
                            <button type="submit" className="form__control__btn">Register</button>
                        </div>
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

  .form__control__iconTwo {
    position: absolute;
    top: 162px;
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

  .form__control__btnWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 93px;
  }

  .form__control__btnCancel {
    background: #D7D8EF;
    border-radius: 30px;
    width: 124px;
    height: 36px;
    cursor: pointer;
    border: none;

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

