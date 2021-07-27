import React from 'react';

import { Link } from 'react-router-dom';

import HeaderMini from '@custom-sections/header-mini/HeaderMini';
import ImageRigth from '@assets/img/bg_login.png';
import Layout from '@custom-sections/layout/Layout';
import Button from '@custom-elements/button/Button';
import TextInput from '@custom-elements/textinput/TextInput';

import './login.scss';

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
            <Button
              mode="contained"
              className="mt-12"
              label="Login"
              onClick={() => null}
              type="primary"
            />
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
