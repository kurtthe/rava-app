import React from "react";

import Header from "@custom-sections/Header";

import ContentVideo from "@custom-sections/content-video/ContentVideo";
import Tools from "@custom-sections/content-tools/ContentTools";

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
      </div>
    </>
  );
};

export default Studio;
