import React, {useState} from 'react';
import { connect } from 'react-redux'
import {createTimer} from '@core/module/store/timers/actions'

import './create-timer.scss'

const createTimerForm = (props:any) => {

  const [minuteInit, setMinuteInit] =useState('')
  const [timerDuration, setTimerDuration] =useState('')
  const [repeats, setRepeats] =useState('')
  
  const handleCreate= ()=>{
    const dataSend = {
      initMinutes:minuteInit,
      duration:timerDuration,
      repeats
    }
    
    props.createTimer(dataSend)
  }
  
  return (
    <div className="create-timer">
        <div className="create-timer__row">
          <label>Minute init</label>
          <input type="text" className="input-sml" onChange={(event)=> setMinuteInit(event.target.value)} />
          <label>Duration</label>
          <input type="text" className="input-sml" onChange={(event)=> setTimerDuration(event.target.value)} />
        </div>

        <div className="create-timer__row">
          <h2>Repeats</h2>
          <input type="text" className="input-md" onChange={(event)=> setRepeats(event.target.value)}/>
        </div>
        <div className="create-timer__row">
          <button onClick={()=>handleCreate()}>
            Create
          </button>
        </div>
    </div>
  );
};

const mapStateToProps = (reducers:any) => {
  return reducers.StudioReducer
}

const mapDispatchToProps = (dispatch:any) => ({
  createTimer: (payload:any) => dispatch(createTimer(payload)),
})


export default connect(mapStateToProps,mapDispatchToProps)(createTimerForm);
