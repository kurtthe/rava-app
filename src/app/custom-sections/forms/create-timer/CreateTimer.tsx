import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTimer } from '@core/module/store/timers/actions';

import { Timer } from '@shared/interfaces/timers.interface';
import { Reducers } from '@shared/interfaces/reducers.interfaces';

import { TransformDurationVideoService } from '@core/services/transform-duration-video.service';

import './create-timer.scss';

const transformDurationVideoService = new TransformDurationVideoService();

const createTimerForm = (props: any) => {
  const [minuteInit, setMinuteInit] = useState('');
  const [timerDuration, setTimerDuration] = useState('');
  const [repeats, setRepeats] = useState('');

  const handleCreate = () => {
    const dataSend: Timer = {
      minutoInit: minuteInit,
      duration: timerDuration,
      repeat: repeats,
      end: false,
    };
    props.createTimer(dataSend);
  };

  return (
    <div className="create-timer">
      <div className="create-timer__row">
        <div className="create-timer__input">
          <label>Time init in {`${transformDurationVideoService.getLabelTime(props.duration).toLocaleLowerCase()}`}</label>
          <input
            type="text"
            className="input-sml"
            onChange={(event) => setMinuteInit(event.target.value)}
          />
          <span>{`Duration ${transformDurationVideoService.secondsToMinutes(props.duration)}`}</span>
        </div>
        <div className="create-timer__input">
          <label>Duration in seconds</label>
          <input
            type="text"
            className="input-sml"
            onChange={(event) => setTimerDuration(event.target.value)}
          />
        </div>
      </div>

      <div className="create-timer__row">
        <h2>Repeats</h2>
        <input
          type="text"
          className="input-md"
          onChange={(event) => setRepeats(event.target.value)}
        />
      </div>
      <div className="create-timer__row">
        <button onClick={() => handleCreate()}>Create</button>
      </div>
    </div>
  );
};

const mapStateToProps = (reducers: Reducers) => {
  return reducers.studioReducer;
};

const mapDispatchToProps = (dispatch: any) => ({
  createTimer: (payload: Timer) => dispatch(createTimer(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(createTimerForm);
