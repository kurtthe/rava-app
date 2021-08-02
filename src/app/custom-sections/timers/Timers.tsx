import React, {useState} from "react";
import Button from '@custom-elements/button/Button'

import Timer from '@custom-elements/timer-item/TimerItem'
import Modal from '@custom-elements/modal/Modal'
import CreateTimer from '@custom-sections/forms/create-timer/CreateTimer'

import { connect } from 'react-redux'
import {Reducers} from '@shared/interfaces/reducers.interfaces'

import './timers.scss'

const Timers = (props:any) => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal=()=>{
    setOpenModal(true);
  }

  return (
    <>
      <div className="timers">
        <div className="timers__content">
          { (props.timers.length === 0)? <p>Nothing timers yer.</p> :

          props.timers.map((item:any, index:number)=> (
            <Timer 
              key={index}
              durations={item.duration} 
              minutosInit={item.initMinutes} 
              repeat={item.repeats} 
            />
          ))
        }
        </div>
        <div className="timers__footer">
          <Button label="Create timer" type="primary" onClick={() => handleOpenModal()} mode="rounded" />
        </div>
      </div>
      <Modal open={openModal} closeModal={()=>setOpenModal(false)} >
        <CreateTimer />
      </Modal>
    </>
  );
};

const mapStateToProps = (reducers:Reducers) => {
  return reducers.timerReducer
}

export default connect(mapStateToProps)(Timers);

