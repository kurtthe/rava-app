import React, { Component }from 'react';

import UploadFiles from '@custom-elements/upload-file/UploadFile';
import {AcceptingFiles} from '@shared/enums/accepting-files.enum'
import './upload-assets.scss';

import {Props, State} from '@shared/interfaces/upload-assets.interface'

import {GeneralRequest} from '@core/services/general-request.service'
import {endPoints} from '@shared/dictionaries/end-points/end-points'

class UploadAssets extends Component<Props, State> {

  constructor(
    private readonly generalRequest:GeneralRequest,
    props:Props
    ){
    super(props);

  }
  
  private handleUploadFile = ()=>{
    console.log("===>upload")
    this.generalRequest.post(endPoints.uploadFile, {})
  }

  render(){
    return (
      <div className="upload-assets">
  
        <div className="upload-assets__content">
          <h2>content upload</h2>
        </div>
  
        <div className="upload-assets__footer">
          <div className="upload-assets-item">
            <UploadFiles type="basic" label="Upload Video" onChangeFile={() => this.handleUploadFile()} permit={AcceptingFiles.Videos} />
          </div>
        </div>
      </div>
    );
  }
  
};

export default UploadAssets;
