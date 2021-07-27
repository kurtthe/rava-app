import React, { useState } from "react";

import Tab from "./tab/Tab";


const Tabs = (props: any) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tabs">
        <ul className="tab-list">
          {props.children.map((child: any) => {
            const { label } = child.props;
            return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
          })}
        </ul>
        <div className="tab_content">
          {props.children.map((child: any) => {
            if (child.props.label !== activeTab) return null;
            return child.props.children;
          })}
        </div>
      </div>
    </>
  );
};

export default Tabs;
