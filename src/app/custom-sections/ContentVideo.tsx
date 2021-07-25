import React from "react";

import DropZone from "../custom-elements/DropZone";

const ContentVideo = (props) => {
  return (
    <>
      <div className="content-video">
        <div className="content-video-center">
          <DropZone />
        </div>
      </div>
    </>
  );
};

export default ContentVideo;
