import React from 'react';
import Video from '@custom-elements/video/Video';
import './content-video.scss';
import { connect } from 'react-redux';
import { ProgressVideo } from '@shared/interfaces/video.interface';
import {Reducers} from '@shared/interfaces/reducers.interfaces'

interface Props {
  studioReducer: any;
  timerReducer: any
}

const ContentVideo = (props: Props) => {
  const urlFile = !props.studioReducer.video ? '' : URL.createObjectURL(props.studioReducer.video);

  const handleProgressVideo = (time: ProgressVideo) => {
    console.log('??>time', time);
  };

  return (
    <>
      <div className="content-video">
        <div className="content-video__content">
          <div className="content-video__header">
            {
              (props.timerReducer.timers.length > 0) && <div className="timer">0</div>
            }
          </div>
          <div className="content-video__body">
            {!props.studioReducer.video ? (
              <p>here video player</p>
            ) : (
              <Video src={urlFile} OnProgress={(time) => handleProgressVideo(time)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (reducers: Reducers) => {
  return { 
    studioReducer: reducers.studioReducer,
    timerReducer: reducers.timerReducer 
  };
};

export default connect(mapStateToProps)(ContentVideo);
