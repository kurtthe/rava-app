import React from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import Logo from "../../assets/img/logo.png";
import ImageRigth from "../../assets/img/bg_login.png";

import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="column-center-center overflow-none">
        <div className="row-center-between full-screen">
          <div className="login">
            <div className="login__title">
              <img src={Logo} alt="Logo" />
              <h2>Welcome Trainer, Please login first to enter the editing rooms</h2>
            </div>
            <div className="login__form">
              <TextInput label="Email" onChange={() => null} value="" icon="user-o" />
              <TextInput label="Password" onChange={() => null} typeInput="password" value="" icon="lock"  />
              <Button label="Login" onClick={() => null} type="primary" />
            </div>
          </div>
          <div className="image_preview">
            <img src={ImageRigth} alt="Image bg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
