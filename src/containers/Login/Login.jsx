import { useState } from "react";
import { styled } from "styled-components";
import loginImg from "assets/loginAssets/LoginImg.svg";
import ggIcon from "assets/loginAssets/Google.svg";
import gitIcon from "assets/loginAssets/Github.svg";
import fbIcon from "assets/loginAssets/Facebook.svg";
import arrowIcon from "assets/loginAssets/loginArrow.svg";
import { Logo } from "components/Logo/Logo";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";
const LoginContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1080px;
  min-height: 100%;
  min-width: 100%;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 131, 176, 0.366) 0%,
    rgba(140, 86, 255, 0.378) 66.67%
  );
  input {
    text-indent: 10px;
  }
  body {
    min-height: 100%;
    min-width: 100%;
  }
  .loginPage {
    position: absolute;
    width: 75%;
    height: 849px;
    background: linear-gradient(90deg, #ffffff 0%, #bbaaff 66.67%);
    border-radius: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .loginPageColor {
    position: absolute;
    width: 32%;
    height: 849px;
    margin-left: 24cm;
    z-index: 2;
    background: rgb(192, 219, 234);
    border-radius: 40px;
  }
  .loginPage-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    z-index: 10;
    width: 36%;
  }
  .loginPage-right {
    z-index: 10;
    display: flex;
    align-items: flex-end;
    width: 50%;
    height: 100%;
    justify-content: center;
  }
  .username,
  .pass {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    width: 100%;
    padding: 10px 0px;
  }
  .password-field,
  .password-field input {
    width: 100%;
  }
  .username-text,
  .pass-text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #000000;
  }
  .pass-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  .forgotpass {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;

    text-align: right;

    color: #000000;

    opacity: 0.5;
    cursor: pointer;
  }
  #username,
  #Pass {
    height: 46px;
    background: #c0dbea;
    border-radius: 4px;
    border: solid 0px;
    margin-top: 7px;
  }
  h2,
  .logo {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 84px;
    /* identical to box height */

    color: #000000;
  }
  p {
    text-align: center;
  }
  img {
    z-index: 999;
    max-width: 100%;
    height: auto;
  }
  .input-group {
    display: flex;
    width: 150px;
    height: 46px;
    background: #d885a3;
    border-radius: 23px;
    border: solid 0px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .login-methods {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .login-methods-button {
    width: 125px;
    height: 50px;
    border: 1px solid #6096b4;
    border-radius: 40px;
  }
  .signup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    cursor: pointer;
  }
  .continueW,
  .noAccount,
  .signUp {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
  .continueW {
    color: #6096b4;
  }
  .noAccount {
    color: #000000;

    opacity: 0.5;
  }
  .signUp {
    color: #d885a3;
  }
  .field-icon {
    float: right;
    margin-left: -25px;
    margin-top: -25px;
    position: relative;
    cursor: pointer;
    z-index: 99;
  }
  input[type="button"] {
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    .loginPageColor {
      display: none;
    }
    .loginPage-right {
      display: none;
    }
    .loginPage-left {
      width: 65%;
    }
  }
`;

async function checkValid({username, password}) {
  return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: {username},
      password: {password},
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        // Thanh cong
        // luu vao local storage
        localStorage.setItem("Username", res.username);
        localStorage.setItem("Email", res.email);
        localStorage.setItem("LastName", res.lastName);
        localStorage.setItem("FirstName", res.firstName);
        localStorage.setItem("imgAvata", res.image);
        // chuyen trang
      } else {
        // Khong thanh cong
        alert("Login Invalid");
      }
      console.log(res);
    });
}

export const Login = ({namevalue, passvalue}) => {
  const [Username, setUsername] = useState(namevalue);
  const [Password, setPassword] = useState(passvalue);
  return (
    <LoginContainer>
      <div className="loginPage">
        <div className="loginPage-left">
          <Logo width="100%" margin="0px 0px"></Logo>
          <h2>Log In</h2>
          <div className="username">
            <label for="username" className="username-text">
              Username
            </label>
            <input
            className="username"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onInput={e=>{setUsername()}}
            />
          </div>
          <div className="pass">
            <div className="pass-text">
              <label for="Password" className="pass-text">
                Password
              </label>
              <label for="ForgotPass" className="forgotpass">
                Forgot Password ?
              </label>
            </div>
            <div className="password-field">
              <input
              className="Pass"
                type="password"
                id="Pass"
                name="Pass"
                placeholder="*********"
                onInput={e => {setPassword()}}
              />
              <span
                toggle="#password-field"
                className="fa fa-fw fa-eye field-icon toggle-password"
              ></span>
            </div>
          </div>
          <div className="input-group" onClick={console.log(Username, Password)} >
            <Button bgColor="#d885a3" textColor="white">
              LOGIN IN <img src={arrowIcon} alt="arrowIcon"></img>
            </Button>
          </div>

          <p className="continueW">or continue with</p>
          <div className="login-methods">
            <Button bgColor="transparent" boderColor="#6096b4">
              <img src={ggIcon} alt="ggIcon"></img>
            </Button>
            <Button bgColor="transparent" boderColor="#6096b4">
              <img src={gitIcon} alt="ggIcon"></img>
            </Button>
            <Button bgColor="transparent" boderColor="#6096b4">
              <img src={fbIcon} alt="ggIcon"></img>
            </Button>
          </div>
          <div className="signup">
            <p className="noAccount">Don’t have an account yet?</p>
            <p className="signUp">Sign up for free</p>
          </div>
        </div>

        <div className="loginPage-right">
          <img src={loginImg} alt="" />
        </div>
      </div>
    </LoginContainer>
  );
};
