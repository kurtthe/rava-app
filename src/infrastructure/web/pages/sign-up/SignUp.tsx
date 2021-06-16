import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import HeaderMini from "../../components/HeaderMini";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import ImageRigth from "../../assets/img/bg_signup.png";

import "./sign-up.scss";

interface Props {}

const SignUp = (props: Props) => {
  return (
    <>
      <Layout imageRigth={ImageRigth}>
        <div className="sign-up">
          <HeaderMini description="Welcome Trainer, You must register first to enter the editing rooms." />

          <div className="sign-up__content">
            <TextInput
              label="Your name"
              onChange={() => null}
              typeInput="text"
              value=""
              icon="smile-o"
              placeholder="Enter your name"
            />

            <TextInput
              label="Email"
              onChange={() => null}
              typeInput="text"
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
              helperText="Your password must be 6-12 characters"
            />
            <Link to="/complete-profile" className="sign-up__link">
              <Button mode="contained" className="mt-12" label="Create account" onClick={() => null} type="primary" />
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
