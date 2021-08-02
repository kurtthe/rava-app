import React from 'react';
import ReactPlayer from 'react-player';
import {ProgressVideo, Props} from '@shared/interfaces/video.interface'
import {durationVideo} from '@core/module/store/studio/actions'
import { connect } from 'react-redux'

import './video.scss';

const Video = (props: Props) => {

  const handleProgress = (seconds:ProgressVideo) => {
    props.OnProgress(seconds);
  };

  const handleDuration = (seconds:number)=>{
    props.durationVideo(seconds)
  }

  return (
    <ReactPlayer
      url={props.src}
      width="100%"
      height="100%"
      controls={true}
      onProgress={handleProgress}
      onDuration={handleDuration}
    />
  );
};

const mapDispatchToProps = (dispatch:any) => ({
  durationVideo: (payload:number) => dispatch(durationVideo(payload)),
})

export default connect(null,mapDispatchToProps)(Video);
