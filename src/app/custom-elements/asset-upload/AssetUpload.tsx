import React from 'react';
import { AcceptingFiles } from '@shared/enums/accepting-files.enum';

import './asset-upload.scss';

interface Props {
  typeAsset: AcceptingFiles;
  file: File;
}

const AssetUpload = (props: Props) => {
  const putContentPreview = () => {
    const urlFile = URL.createObjectURL(props.file);

    switch (props.typeAsset) {

      case AcceptingFiles.Images:
        return <img width="100%" src={urlFile} />;
        
      case AcceptingFiles.Videos:
        return (
          <video width="100%" controls>
            <source src={urlFile} />
          </video>
        );
        
      default:
        return(<p>no preview file</p>)
    }
  };

  return (
    <div className="asset">
      <div className="asset__preview">{putContentPreview()}</div>
      <div className="asset__info">
        <p>{props.file.name}</p>
        <p>{props.file.type}</p>
        <p>{props.file.size}</p>
      </div>
    </div>
  );
};

export default AssetUpload;
