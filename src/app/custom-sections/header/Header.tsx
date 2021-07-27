import React from "react";
import Logo from "@assets/img/logo.png";
import Profile from "@assets/img/profile.png";
import Button from "@custom-elements/button/Button";

import './header.scss'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header__logo">
            <img src={Logo} alt="Logo Rava" />
          </div>
          <div className="header__content__list">
            <ul>
              <li>Recent project</li>
              <li>Undo</li>
              <li>Redo</li>
              <li>Save</li>
              <li>Save as</li>
            </ul>
          </div>
        </div>
        <div className="header__profile">
          <Button mode="outline" label="Create new project" onClick={() => null} type="secondary" className="mx-2" />

          <img src={Profile} alt="Image Profile" width="40px" height="40px" />
        </div>
      </div>
    </>
  );
};

export default Header;
