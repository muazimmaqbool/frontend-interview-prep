import React, { useState } from "react";

//Question: Create a modal that opens and closes.
const J_Modal = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <h2>Modal:</h2>
      <button onClick={() => setopen(true)}>Open Modal</button>

      {open && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)" }}
        >
          {/* inset: 0; is a shorthand property that sets top: 0;, right: 0;, bottom: 0;, and left: 0; all at once */}
          <div
            style={{
              backgroundColor: "#ffffff",
              margin: "100px auto",
              padding: 20,
              width: 500,
            }}
          >
            <h2>Hello</h2>

            <button onClick={() => setopen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default J_Modal;
