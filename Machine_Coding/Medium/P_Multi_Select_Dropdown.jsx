import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const options = ["React", "JavaScript", "TypeScript", "Node.js", "MongoDB"];
const P_Multi_Select_Dropdown = () => {
  const [selected, setselected] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  const handleSelect = (option) => {
    setselected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };
  return (
    <div style={{ width: "400px", margin: "40px auto", position: "relative" }}>
      <h2>Multi Select Dropdown</h2>
      {/* dropdown header */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "6px",
          cursor: "pointer",
          background: "#fff",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between"
        }}
        onClick={() => setisOpen((prev) => !prev)}
      >
        {selected.length ? selected.join(", ") : "Select Technology"}
        {isOpen?<FaChevronUp/>:<FaChevronDown/>}
      </div>
      {/* dropdown options */}
      {isOpen && (
        <div
          style={{
            border: "1px solid #ccc",
            marginTop: "5px",
            borderRadius: "6px",
            background: "#fff",
          }}
        >
          {options.map((option) => (
            <label
              key={option}
              style={{
                display: "block",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleSelect(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
      {/* selected Values */}
      <div style={{ marginTop: "20px" }}>
        {selected.length ? selected.join(", ") : "None"}
      </div>
    </div>
  );
};

export default P_Multi_Select_Dropdown;
