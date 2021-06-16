import React from "react";

import Header from "../../components/Header";

import ContentVideo from "../../components/ContentVideo";
import Tools from "../../components/ContentTools";
import ContentTimeline from "../../components/ContentTimeline";

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
