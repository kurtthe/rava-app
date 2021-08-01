import React, {useState} from "react";
import Button from '@custom-elements/button/Button'

import Timer from '@custom-elements/timer-item/TimerItem'
import Modal from '@custom-elements/modal/Modal'
import CreateTimer from '@custom-sections/forms/create-timer/CreateTimer'

import { connect } from 'react-redux'

import './timers.scss'

const Timers = (props:any) => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal=()=>{
    setOpenModal(true);
  }

  console.log("==<props.timers",props.timers)
  
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

const mapStateToProps = (reducers:any) => {
  return reducers.TimerReducer
}

export default connect(mapStateToProps)(Timers);

