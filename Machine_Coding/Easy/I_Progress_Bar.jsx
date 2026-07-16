import React, { useState } from "react";

//Question: Increase progress by 10%.
const I_Progress_Bar = () => {
  const [progress, setprogress] = useState(0);
  return (
    <div>
      <h2>Progress Bar</h2>

      <div style={{ width: "300px", border: "1px solid",marginBottom:"20px" }}>
        <div
          style={{ height: 20, background: "green", width: `${progress}%` }}
        />
      </div>
      <button
        onClick={() => setprogress((p) => Math.min(p + 10, 100))}
        disabled={progress === 100}
      >
        Increase
      </button>

      
    </div>
  );
};

export default I_Progress_Bar;
