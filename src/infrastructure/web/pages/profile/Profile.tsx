import React from "react";

import Layout from "../../components/Layout";
import HeaderMini from "../../components/HeaderMini";
import UploadFile from "../../components/UploadFile";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import ImageRigth from "../../assets/img/bg_signup.png";

import "./profile.scss";

interface Props {}

const Profile = (props: Props) => {
  return (
    <>
      <Layout imageRigth={ImageRigth}>
        <div className="profile">
          <HeaderMini description="Hey Mate, Welcome! Please complete your profile picture to continue to login" />
          <div className="profile__content">
            <UploadFile
              type="preview"
              label="Upload picture"
              titleInfo="Add your profile photo"
              detailsInfo="Add your photo for Trainer Account"
            />

            <UploadFile
              type="cover"
              label="Upload picture"
              titleInfo="Add your cover photo"
              detailsInfo="Add cover photo for Trainer Account (min. 2mb)"
            />

            <TextInput
              label="Bio"
              onChange={() => null}
              value=""
              placeholder="Enter your bio"
              typeInput="multiline"
            />

            <Button mode="contained" className="mt-2" label="Complete" onClick={() => null} type="primary" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
