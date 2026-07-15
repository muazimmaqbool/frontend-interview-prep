import React, { useState } from "react";

//Question: Create tabs.

const tabs = {
  Home: "Home Content",
  About: "About Content",
  Contact: "Contact Content",
};
const H_Tabs = () => {
  const [activeTab, setactiveTab] = useState("");
  return (
    <div>
      <h2>Tabs in react.</h2>
      {Object.keys(tabs).map((tab, index) => (
        <button key={index} onClick={() => setactiveTab(tab)}>
          {tab}
        </button>
      ))}
      <h3>{tabs[activeTab]}</h3>
    </div>
  );
};

export default H_Tabs;
