import React from "react";

import Tabs from "../../../components/Tabs";

const Tools = (props:any) => {
  return (
    <>
      <div className="content-tools">
        <Tabs>
          <div label="Timer">
            See ya later, <em>Timer</em>!
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
