import React, { useState } from "react";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("")
  
  return (
    <>
      <div className="tabs">
        <ul className="tab-list"></ul>
        <div className="tab_content"></div>
      </div>
    </>
  );
};

export default Tabs;
