import React from "react";

import "../assets/styles/layout.scss";

interface Props {
  imageRigth: string;
  children: any;
}

const Layout = (props: Props) => {
  return (
    <>
      <div className="column-center-center overflow-none">
        <div className="row-center-between full-screen">
          {props.children}
          <div className="image_preview">
            <img src={props.imageRigth} alt="Image bg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
