import React from "react";

import Logo from "../assets/img/logo.png";

interface Props {
  description: string;
}

const HeaderMini = (props: Props) => {
  return (
    <>
      <div className="mt-2 mb-6">
        <img src={Logo} alt="Logo" />
        <h2>{props.description || "This a description"}</h2>
      </div>
    </>
  );
};

export default HeaderMini;
