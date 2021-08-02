import React from 'react';
import ReactPlayer from 'react-player';
import {ProgressVideo, Props} from '@shared/interfaces/video.interface'

import './video.scss';

const Video = (props: Props) => {

  const handleProgress = (seconds:ProgressVideo) => {
    props.OnProgress(seconds);
  };

  return (
    <ReactPlayer
      url={props.src}
      width="100%"
      height="100%"
      controls={true}
      onProgress={handleProgress}
    />
  );
};

export default Video;
