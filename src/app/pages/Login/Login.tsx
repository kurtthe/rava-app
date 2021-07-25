import React from "react";

import Layout from "../../custom-sections/Layout";
import HeaderMini from "../../custom-sections/HeaderMini";

import TextInput from "../../custom-elements/TextInput";
import Button from "../../custom-elements/Button";

import { Link } from "react-router-dom";

import ImageRigth from "../../../assets/img/bg_login.png";

import "./login.scss";

const Login = () => {
  return (
    <>
      <Layout imageRigth={ImageRigth}>
        <div className="login">
          <HeaderMini description="Welcome Trainer, Please login first to enter the editing rooms." />

          <div className="login__form">
            <TextInput
              label="Email"
              onChange={() => null}
              value=""
              icon="user-o"
              placeholder="Enter your email"
            />
            <TextInput
              label="Password"
              onChange={() => null}
              typeInput="password"
              value=""
              icon="lock"
              placeholder="Enter your password"
            />
            <Link to="/forget-password" className="link t-a-right leading-0">
              Forgot Password?
            </Link>
            <Button mode="contained" className="mt-12" label="Login" onClick={() => null} type="primary" />
          </div>
          <div className="login__footer">
            <p className="t-a-center">
              Don't have an account?
              <Link to="/sign-up" className="link mx-2 color-primary">
                Register as a trainer here
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
