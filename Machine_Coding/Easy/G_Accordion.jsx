import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Question: Click a title to expand/collapse.
const G_Accordion = () => {
  const [open, setOpen] = useState(null);

  const data = [
    { id: 1, title: "React", body: "Library" },
    { id: 2, title: "Vue", body: "Framework" },
  ];

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Accordion</h2>

      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "10px",
            overflow: "hidden",
          }}
        >
          <div
            onClick={() => setOpen(open === item.id ? null : item.id)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              background: "#f5f5f5",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <span>{item.title}</span>
            <span>{open === item.id ? <IoIosArrowUp/>: <IoIosArrowDown/>}</span>
          </div>

          {open === item.id && (
            <div
              style={{
                padding: "15px",
                background: "#fff",
                borderTop: "1px solid #ddd",
              }}
            >
              {item.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default G_Accordion;