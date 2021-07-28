import React from 'react';
import './timer-item.scss'

import Button from '@custom-elements/button/Button'

const TimerItem = (props) =>{

  return(
    <div className="timer">
      <div className="timer__info">
        <p>1:22</p>
        <p>60s</p>
        <p>x1</p>
        <Button label="Delete" onClick={() => null} mode="outline" type="primary" className="btn-delete" />
      </div>
    </div>
  )
}

export default TimerItem