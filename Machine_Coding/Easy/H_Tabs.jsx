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

      {/* Object.keys() returns an array of all object keys
          ["Home", "About", "Contact"] */}

      {Object.keys(tabs).map((tab, index) => (
        <button
          style={{
            padding: "10px 18px",
            margin: "5px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            backgroundColor: activeTab === tab ? "#007bff" : "#e0e0e0",
            color: activeTab === tab ? "#fff" : "#000",
            transition: "0.3s",
          }}
          key={index}
          onClick={() => setactiveTab(tab)}
        >
          {tab}
        </button>
      ))}
      <h3>{tabs[activeTab]}</h3>
    </div>
  );
};

export default H_Tabs;
