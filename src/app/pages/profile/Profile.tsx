import React from "react";

import Layout from "@custom-sections/layout/Layout";
import HeaderMini from "@custom-sections/header-mini/HeaderMini";
import UploadFile from "@custom-elements/upload-file/UploadFile";
import TextInput from "@custom-elements/textinput/TextInput";
import Button from "@custom-elements/button/Button";

import ImageRigth from "@assets/img/bg_signup.png";
import {AcceptingFiles} from '@shared/enums/accepting-files.enum'

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
              permit={AcceptingFiles.Images}
            />

            <UploadFile
              type="cover"
              label="Upload picture"
              titleInfo="Add your cover photo"
              detailsInfo="Add cover photo for Trainer Account (min. 2mb)"
              permit={AcceptingFiles.Images}
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
