import React from "react";
import Button from '@custom-elements/button/Button'

import './timers.scss'

const Timers = () => {
  return (
    <>
      <div className="timers">
        <div className="timers__content">
          <p>Nothing timers yet.</p>
        </div>
        <div className="timers__footer">
          <Button label="Create timer" type="primary" onClick={() => null} mode="rounded" />
        </div>
      </div>
    </>
  );
};

export default Timers;
