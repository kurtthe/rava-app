import React from "react";

import Header from "@custom-sections/Header";

import ContentVideo from "@custom-sections/ContentVideo";
import Tools from "@custom-sections/ContentTools";
import ContentTimeline from "@custom-sections/ContentTimeline";

import "./studio.scss";

const Studio = () => {
  return (
    <>
      <Header />
      
      <div className="studio">
        <div className="studio__content">
          <ContentVideo />
          <Tools />
        </div>
        <div className="studio__timeline">
          <ContentTimeline />
        </div>
      </div>
    </>
  );
};

export default Studio;
