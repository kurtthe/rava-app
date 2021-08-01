import React, { Component }from 'react';

import UploadFiles from '@custom-elements/upload-file/UploadFile';
import {AcceptingFiles} from '@shared/enums/accepting-files.enum'
import './upload-assets.scss';

import {Props, State} from '@shared/interfaces/upload-assets.interface'
import AssetUpload from '@custom-elements/asset-upload/AssetUpload'

import { connect } from 'react-redux'
import { uploadVideo } from '@core/module/store/assets/actions'
import {ShotStackService} from '@core/services/shotstack-service'
import {GeneralRequest} from '@core/services/general-request.service'
import {endPoints} from '@shared/dictionaries/end-points/end-points'

class UploadAssets extends Component<Props, State> {
  private shotStackService:ShotStackService
  private generalRequest:GeneralRequest

  constructor(props:Props){
    super(props);

    this.state={
      videos: props.videosUpload
    }

    this.shotStackService = new ShotStackService()
    this.generalRequest = new GeneralRequest()
  }
  
  private handleUploadFile = async (Video:File)=>{
    const arry = this.state.videos;
    arry.push(Video)

    const newVideo = await this.props.uploadVideo(arry);
    this.setState({
      videos: newVideo
    })

    const dataShotStack = this.shotStackService.addVideos(arry);
    this.petitionShotStack(dataShotStack)
  }

  private petitionShotStack(data:any){
    this.generalRequest.post(endPoints.renderShotstack, data).subscribe((response) => {
      console.log("response=>",response)
    })
  }

  putContent=()=>{

    if(this.state.videos.length > 0){
      return this.state.videos.map((video, index)=>(
        <AssetUpload key={index} typeAsset={AcceptingFiles.Videos} file={video} />
      ))
    }
    return <p>Nothing Video upload yet.</p>
  }

  render(){
    return (
      <div className="upload-assets">

        <div className="upload-assets__content">
          <div className="upload-assets__content-item">
          {this.putContent()}
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
  return reducers.AssetsReducer
}

const mapDispatchToProps = (dispatch:any) => ({
  uploadVideo: (payload:any) => dispatch(uploadVideo(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadAssets)
