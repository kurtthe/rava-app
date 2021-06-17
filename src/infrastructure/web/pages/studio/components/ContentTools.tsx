import React from "react";

import Tabs from "../../../components/Tabs";

import Timer from './Timer';


const Tools = (props:any) => {
  return (
    <>
      <div className="content-tools">
        <Tabs>
          <div label="Timer">
            <Timer />
          </div>
          <div label="Audio">
            See ya later, <em>Audio</em>!
          </div>
          <div label="Export">
            See ya later, <em>Export</em>!
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Tools;
