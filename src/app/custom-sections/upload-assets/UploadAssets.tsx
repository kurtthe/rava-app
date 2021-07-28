import React, { Component }from 'react';

import UploadFiles from '@custom-elements/upload-file/UploadFile';
import {AcceptingFiles} from '@shared/enums/accepting-files.enum'
import './upload-assets.scss';

import {Props, State} from '@shared/interfaces/upload-assets.interface'
import AssetUpload from '@custom-elements/asset-upload/AssetUpload'

import { connect } from 'react-redux'
import {uploadVideo} from '@core/module/store/studio/actions'
class UploadAssets extends Component<Props, State> {

  constructor(props:Props){
    super(props);
  }
  
  private handleUploadFile = (Video:File):void=>{
    this.props.uploadVideo(Video)
  }

  render(){
    return (
      <div className="upload-assets">
  
        <div className="upload-assets__content">
          <div className="upload-assets__content-item">
            {
              (!this.props.video)? <p>Nothing upload yet.</p>:(
                <AssetUpload typeAsset={AcceptingFiles.Videos} file={this.props.video} />
              )
            }
          </div>
        </div>
  
        <div className="upload-assets__footer">
          <div className="upload-assets-item">
            <UploadFiles type="basic" label="Upload Video" onChangeFile={(videoUrl) => this.handleUploadFile(videoUrl)} permit={AcceptingFiles.Videos} />
          </div>
        </div>
      </div>
    );
  }
  
};

const mapStateToProps = (reducers:any) => {
  return reducers.StudioReducer
}

const mapDispatchToProps = (dispatch:any) => ({
  uploadVideo: (payload:any) => dispatch(uploadVideo(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadAssets)
