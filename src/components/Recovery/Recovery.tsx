import styled from "styled-components";
import CheckEmail from "../../styles/img/Email_Check.png"
import {Link} from "react-router-dom";


export const SendingSuccessfully = () => {

    return <>
        <Wrap>
            <div className="form__wrapper">
                <div className="form__text">
                    <span className="contents">It-incubator</span>
                </div>
                <div className="form__control">
                    <Form>
                        <img src={CheckEmail} alt="email"/>
                        <span className="email">Check Email</span>
                        <span className="description">We’ve sent an Email with instructions to example@mail.com</span>
                        <button type="submit" className="form__control__btnCancel">
                            <Link to="/login">Cancel</Link>
                        </button>
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
  

`;

const Form = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%
;
  .email {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    text-align: right;
    color: #2D2E46;
    margin-top: 24px;
  }

  .description {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2D2E46;
    opacity: 0.7;
    margin-top: 21px;
  }

  .form__control__btnCancel {
    background: #D7D8EF;
    border-radius: 30px;
    width: 124px;
    height: 36px;
    cursor: pointer;
    border: none;
    margin-top: 80px;

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

`


