import React from "react";

import Tabs from "../custom-elements/Tabs";

import Timer from "./Timer";
import Export from "./Export";

const Tools = (props: any) => {
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
            <Export />
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Tools;
