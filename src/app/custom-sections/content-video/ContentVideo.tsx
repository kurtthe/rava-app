import React, {useState} from 'react';
import Video from '@custom-elements/video/Video';
import './content-video.scss';
import { connect } from 'react-redux';
import { ProgressVideo } from '@shared/interfaces/video.interface';
import {Reducers} from '@shared/interfaces/reducers.interfaces'
import {StateStoreTimers} from '@shared/interfaces/timers.interface'

import Temporizador from '@custom-elements/temporizador/Temporizador'

interface Props {
  studioReducer: any;
  timerReducer: StateStoreTimers
}

const ContentVideo = (props: Props) => {
  const [timerDuration, setTimerDuration] = useState(0)
  const [finish, setFinish] = useState(false)
  const urlFile = !props.studioReducer.video ? '' : URL.createObjectURL(props.studioReducer.video);

  const handleProgressVideo = (time: ProgressVideo) => {
    if(timerDuration > 0 && time.playedSeconds >= timerDuration){
      initialTimer()
    }
  };

  const initialTimer = ()=>{
    setTimerDuration(prevTimer => prevTimer - 1)

    if(timerDuration < 1){
      setFinish(true)
    }
  }

  const putContentTimer = ()=>{
    if(props.timerReducer.timers.length > 0) { 
      if(timerDuration < 1 || !finish){
        setTimerDuration(parseInt(props.timerReducer.timers[0].duration))
      }

      return <Temporizador timerDuration={timerDuration} />
    }
    return null;
  }

  return (
    <>
      <div className="content-video">
          <div className="content-video__header">
            { putContentTimer() }
          </div>
          <div className="content-video__body">
            {!props.studioReducer.video ? (
              <p>here video player</p>
            ) : (
              <Video src={urlFile} OnProgress={(time) => handleProgressVideo(time)} />
            )}
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
