import React from 'react';
import Video from '@custom-elements/video/Video';
import './content-video.scss';
import { connect } from 'react-redux';
import { ProgressVideo } from '@shared/interfaces/video.interface';

interface Props {
  StudioReducer: any;
}

const ContentVideo = (props: Props) => {
  const urlFile = !props.StudioReducer.video ? '' : URL.createObjectURL(props.StudioReducer.video);

  const handleProgressVideo = (time: ProgressVideo) => {
    console.log('??>time', time);
  };

  return (
    <>
      <div className="content-video">
        <div className="content-video__content">
          <div className="content-video__header">
            <div className="timer">0</div>
          </div>
          <div className="content-video__body">
            {!props.StudioReducer.video ? (
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

const mapStateToProps = (reducers: any) => {
  return { StudioReducer: reducers.StudioReducer };
};

export default connect(mapStateToProps)(ContentVideo);
