import React from "react";

import Tabs from "@custom-elements/tabs/Tabs";

import Timer from "@custom-sections/timers/Timers";
import UploadAssets from '@custom-sections/upload-assets/UploadAssets'
import { connect } from 'react-redux'
import {Reducers} from '@shared/interfaces/reducers.interfaces'

import './content-tools.scss'

const Tools = (props: any) => {

  return (
    <>
      <div className="content-tools">
        <Tabs>

          <div label="Assets" >
            <UploadAssets />
          </div>

          {
            (props?.videosUpload.length > 0)?( 
              <div label="Timers">
                <Timer />
              </div>
            ): <div label="" />
          }
          
        </Tabs>
      </div>
    </>
  );
};

const mapStateToProps = (reducers:Reducers) => {
  return reducers.assetsReducer
}

export default connect(mapStateToProps)(Tools);
