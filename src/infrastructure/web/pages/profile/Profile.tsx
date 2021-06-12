import React from "react";

import Layout from "../../components/Layout";
import HeaderMini from "../../components/HeaderMini";
import UploadFile from "../../components/UploadFile";

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
              label="Upload picture"
              titleInfo="Add your profile photo"
              detailsInfo="Add your photo for Trainer Account"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
