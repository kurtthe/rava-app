import React from "react";

import UploadFile from "@custom-elements/UploadFile";

import LogoCamera from "@assets/img/camera.png";

const Timer = () => {
  return (
    <>
      <div className="timer">
        <img src={LogoCamera} alt="" width="73px" height="73px" />
        <p>Add footage to continue editing</p>
        <UploadFile label="Add Footage" type="basic" />
      </div>
    </>
  );
};

export default Timer;
