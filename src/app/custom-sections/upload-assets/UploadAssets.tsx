import React from 'react';

import UploadFiles from '@custom-elements/upload-file/UploadFile';
import {AcceptingFiles} from '@shared/enums/accepting-files.enum'
import './upload-assets.scss';

const UploadAssets = () => {
  return (
    <div className="upload-assets">

      <div className="upload-assets__content">
        <h2>content upload</h2>
      </div>

      <div className="upload-assets__footer">
        <div className="upload-assets-item">
          <UploadFiles type="basic" label="Upload Video" onChangeFile={() => null} permit={AcceptingFiles.Videos} />
        </div>
      </div>
    </div>
  );
};

export default UploadAssets;
