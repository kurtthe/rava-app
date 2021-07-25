import React from "react";
import { useDropzone } from "react-dropzone";

import { FontAwesome } from "react-web-vector-icons";

const DropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="dropzone">
      <div {...getRootProps({ className: "dropzone" })}>
        <div className="dropzone__icon">
          <FontAwesome name="plus" color="white" size={30} />
        </div>
        <input {...getInputProps()} />
        <p>drag & drop footage or Open previous project to Editing the video</p>
      </div>
    </div>
  );
};

export default DropZone;
