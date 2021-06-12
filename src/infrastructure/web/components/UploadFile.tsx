import React, { useState } from "react";

import ProfileImage from "../assets/img/profile.png";
import "../assets/styles/upload-file.scss";

import { AntDesign } from "react-web-vector-icons";

interface Props {
  label: string;
  titleInfo?: string;
  detailsInfo?: string;
}

const UploadFile = (props: Props) => {
  const [imageUpload, setImageUpload] = useState("");

  return (
    <>
      <div className="upload">
        <div className="upload__image">
          <img
            src={imageUpload != "" ? imageUpload : ProfileImage}
            alt="Image Profile"
            width="116px"
            height="116px"
          />
        </div>
        <div className="upload__content">
          {!props.titleInfo ? null : <p className="upload__title">{props.titleInfo}</p>}
          {!props.detailsInfo ? null : <p className="upload__details">{props.detailsInfo}</p>}
          <input id="inputFile" type="file" />
          <label htmlFor="inputFile" className="upload__btn">
            <AntDesign name="plus" color="#1F2044" size={20} />
            {props.label}
          </label>
        </div>
      </div>
    </>
  );
};

export default UploadFile;
