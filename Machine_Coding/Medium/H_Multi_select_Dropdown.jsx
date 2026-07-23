import React, { useState } from "react";

//Question: Allow selecting multiple options.

const options = ["Javascript", "Python", "Java", "React", "Angular", "Vue"];
const H_Multi_select_Dropdown = () => {
  const [selected, setselected] = useState([]);
  const handleClick = (item) => {
    setselected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item],
    );
  };
  return (
    <div>
      <h2>Multi-select Dropdown</h2>
      <h3>Options to select:</h3>
      {options.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => handleClick(item)}
          />
          {item}
        </label>
      ))}
      <h3>Selected options:</h3>
      <pre>{JSON.stringify(selected)}</pre>
      {/*
      ->o/p when JSON.stringify not used: JavascriptPythonJava i.e <pre>{selected}</pre>
      
      ->o/p when JSON.stringify is used: ["Javascript","Python","Java"]
      */}
    </div>
  );
};

export default H_Multi_select_Dropdown;
