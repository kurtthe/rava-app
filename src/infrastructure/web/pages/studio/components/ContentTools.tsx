import React from "react";

import Tabs from "../../../components/Tabs";

import Timer from "./Timer";
import Export from "./Export";

const Tools = (props: any) => {
  return (
    <>
      <div className="content-tools">
        <Tabs>
          <div label="Export">
            <Export />
          </div>
          <div label="Timer">
            <Timer />
          </div>
          <div label="Audio">
            See ya later, <em>Audio</em>!
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Tools;
