import React from "react";
import TextInput from "@components/TextInput";

import Logo from "../../assets/img/logo.svg";

import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="column-center-center">
        <div className="row-center-between">
          <div className="login">
            <div className="login__title">
              <img src={Logo} alt="Logo" />
              <h2>Welcome Trainer, Please login first to enter the editing rooms</h2>
            </div>
            <div className="login__form">
              <TextInput  label="Email"/>
            </div>
          </div>
          <div>
            <p>righ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
