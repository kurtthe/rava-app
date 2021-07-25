import React from "react";

import Tabs from "@custom-elements/Tabs";

import Timer from "./Timer";

const Tools = (props: any) => {
  return (
    <>
      <div className="content-tools">
        <Tabs>
          <div label="Assets">
            <h2>this section upload videos jajajaj</h2>
          </div>

          <div label="Timers">
            <Timer />
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Tools;
