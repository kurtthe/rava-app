import React from 'react';

import UploadFiles from '@custom-elements/upload-file/UploadFile';

import './upload-assets.scss'

const UploadAssets = () => {
  return (
    <div className="upload-assets">
      <div className="upload-assets-item">
        <UploadFiles type="basic" label="Upload Video" onChangeFile={() => null} />
      </div>
      <div className="upload-assets-item">
        <UploadFiles type="basic" label="Upload Music" onChangeFile={() => null} />
      </div>
    </div>
  );
};

export default UploadAssets;
