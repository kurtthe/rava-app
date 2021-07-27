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
          <div label="Assets">
            <h2>this section upload videos jajajaj</h2>
            <UploadAssets />
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
