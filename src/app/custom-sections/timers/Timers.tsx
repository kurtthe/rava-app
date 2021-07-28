import React, {useState} from "react";
import Button from '@custom-elements/button/Button'

import Timer from '@custom-elements/timer-item/TimerItem'
import Modal from '@custom-elements/modal/Modal'
import './timers.scss'

const Timers = () => {

  const [openModal, setOpenModal] = useState(false)
  
  return (
    <>
      <div className="timers">
        <div className="timers__content">
          <p>Nothing timers yet.</p>
          <Timer />
        </div>
        <div className="timers__footer">
          <Button label="Create timer" type="primary" onClick={() => setOpenModal(true)} mode="rounded" />
        </div>
      </div>
      <Modal show={true} children={<p>Aqui va el formulario para crear el timer</p>} />
    </>
  );
};

export default Timers;
