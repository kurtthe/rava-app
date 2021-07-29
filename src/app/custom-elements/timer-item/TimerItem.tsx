import React from 'react';
import './timer-item.scss'

import Button from '@custom-elements/button/Button'

interface Props {
  minutosInit:string;
  durations: string;
  repeat:string;
}

const TimerItem = (props: Props) =>{

  return(
    <div className="timer">
      <div className="timer__info">
        <p>{props.minutosInit}</p>
        <p>{`${props.durations}s`}</p>
        <p>{`x${props.repeat}`}</p>
        <Button label="Delete" onClick={() => null} mode="outline" type="primary" className="btn-delete" />
      </div>
    </div>
  )
}

export default TimerItem