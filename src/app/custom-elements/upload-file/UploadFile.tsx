import React, { useState, useRef } from "react";

import ProfileImage from "@assets/img/profile.png";
import ProfileCover from "@assets/img/profile-cover.png";

import { AntDesign } from "react-web-vector-icons";

import {AcceptingFiles} from '@shared/enums/accepting-files.enum';

import './upload-file.scss';
interface Props {
  type: 'basic' | 'cover' | 'preview';
  label: string;
  permit: AcceptingFiles;
  titleInfo?: string;
  detailsInfo?: string;
  onChangeFile?: (file:File) => void;
}

const UploadFile = (props: Props) => {
  const hiddenFileInput = useRef(null);
  const [imageUpload, setImageUpload] = useState("");

  console.log("==>AcceptingFiles.Images",AcceptingFiles.Images)
  
  const handleClick = () => {
    if (null !== hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChangeFile = (event: any) => {
    const urlImage = URL.createObjectURL(event.target.files[0]);
    setImageUpload(urlImage);

    props.onChangeFile && props.onChangeFile(event.target.files[0]);
  };

  const putContent = () => {
    if (props.type === "basic") {
      return (
        <>
          <input ref={hiddenFileInput} type="file" onChange={handleChangeFile} />

          <button onClick={handleClick} className={`upload-${props.type}__btn`}>
            <AntDesign name="plus" color="#1F2044" size={20} />
            {props.label}
          </button>
        </>
      );
    }

    if (props.type === "preview") {
      return (
        <>
          <div className={`upload-${props.type}__image`}>
            <img
              src={imageUpload != "" ? imageUpload : ProfileImage}
              alt="Image Profile"
              width="116px"
              height="116px"
            />
          </div>
          <div className={`upload-${props.type}__content`}>
            {!props.titleInfo ? null : (
              <p className={`upload-${props.type}__title`}>{props.titleInfo}</p>
            )}
            {!props.detailsInfo ? null : (
              <p className={`upload-${props.type}__details`}>{props.detailsInfo}</p>
            )}
            <input ref={hiddenFileInput} type="file" onChange={handleChangeFile} accept={props.permit} />
            <button onClick={handleClick} className={`upload-${props.type}__btn`}>
              <AntDesign name="plus" color="#1F2044" size={20} />
              {props.label}
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        {!props.titleInfo ? null : (
          <p className={`upload-${props.type}__title`}>{props.titleInfo}</p>
        )}

        <div className={`upload-${props.type}__image`}>
          <img
            src={imageUpload != "" ? imageUpload : ProfileCover}
            alt="Image Profile"
            width="436px"
            height="116px"
          />
        </div>

        {!props.detailsInfo ? null : (
          <p className={`upload-${props.type}__details`}>{props.detailsInfo}</p>
        )}

        <input ref={hiddenFileInput} type="file" onChange={handleChangeFile} accept={props.permit} />
        <button onClick={handleClick} className={`upload-${props.type}__btn`}>
          <AntDesign name="plus" color="#1F2044" size={20} />
          {props.label}
        </button>
      </>
    );
  };

  return (
    <>
      <div className={`upload-${props.type}`}>{putContent()}</div>
    </>
  );
};

export default UploadFile;
