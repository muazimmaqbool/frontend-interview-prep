import React, { useState } from "react";

//Question: Click a title to expand/collapse.
const G_Accordion = () => {
  const [open, setopen] = useState(null);
  const data = [
    { id: 1, title: "React", body: "Library" },
    { id: 2, title: "Vue", body: "Framework" },
  ];

  return (
    <div>
      <h2>Accordion:</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h3
            onClick={() => {
              setopen(open === item.id ? null : item.id);
            }}
          >
            {item.title}
          </h3>
          {open === item.id && <p>{item.body}</p>}
        </div>
      ))}
    </div>
  );
};

export default G_Accordion;
