import React from "react";

import Tabs from "@custom-elements/tabs/Tabs";

import Timer from "@custom-sections/timers/Timers";
import UploadAssets from '@custom-sections/upload-assets/UploadAssets'

import './content-tools.scss'

const Tools = (props: any) => {
  return (
    <>
      <div className="content-tools">
        <Tabs>
          <div label="Timers">
            <Timer />
          </div>

          <div label="Assets">
            <UploadAssets />
          </div>
          
        </Tabs>
      </div>
    </>
  );
};

export default Tools;
