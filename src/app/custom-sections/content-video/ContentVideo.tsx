import React from "react";

import './content-video.scss'
import { connect } from 'react-redux'

interface Props {
  video:File
}

const ContentVideo = (props: Props) => {

  const urlFile = (!props.video)? '' : URL.createObjectURL(props.video);

  
  return (
    <>
      <div className="content-video">
        <div className="content-video__content">
          {(!props.video)?<p>here video player</p>:(
            <video width="100%" height="100%" controls>
            <source src={urlFile} />
          </video>
          )}
        </div>
      </div>
    </>
  );
};


const mapStateToProps = (reducers:any) => {
  return reducers.StudioReducer
}

export default connect(mapStateToProps)(ContentVideo)
