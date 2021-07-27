import React from "react";

import './tab.scss';
interface Props {
  activeTab: string;
  label: string;
  onClick: (label:string) => void;
}

const Tab = (props: Props) => {
  const handleOnClick = () => {
    props.onClick(props.label);
  };

  let className = "tab-list-item";

  if (props.activeTab === props.label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={handleOnClick}>
      {props.label}
    </li>
  );
};

export default Tab;
