import React, { useState } from "react";

//Question: Increase progress by 10%.
const I_Progress_Bar = () => {
  const [progress, setprogress] = useState(0);

  //   This increases the progress every second and automatically stops at 100%.
  const autoIncrease = () => {
    const interval = setInterval(() => {
      setprogress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);
  };
  return (
    <div>
      <h2>Progress Bar</h2>

      <div
        style={{ width: "300px", border: "1px solid", marginBottom: "20px" }}
      >
        <div
          style={{ height: 20, background: "green", width: `${progress}%` }}
        />
      </div>
      <p>{progress}%</p>
      
      <button
        onClick={() => setprogress((p) => Math.min(p + 10, 100))}
        disabled={progress === 100}
      >
        Increase
      </button>

      {/* Extra: */}
      <button
        onClick={() => setprogress((p) => Math.max(p - 10, 0))}
        disabled={progress === 0}
      >
        Decrease
      </button>
      <button disabled={progress === 100} onClick={autoIncrease}>
        Auto Increase
      </button>
    </div>
  );
};
/*
->Explanation of: onClick={() => setprogress((p) => Math.min(p + 10, 100))}

        p is the previous/current value of progress
        Math.min() returns the smaller of the two numbers.
           
        Example: Math.min(40, 100); // 40
                    Math.min(90 + 10, 100); // 100
                    Math.min(100 + 10, 100); // 100

        Flow:
                Click Button
                    ↓
                setProgress(previousValue => ...)
                    ↓
                Take current progress (p)
                    ↓
                Add 10
                    ↓
                If > 100, return 100
                    ↓
                Update state
                    ↓
                Component re-renders
                    ↓
                Progress bar width changes
*/

export default I_Progress_Bar;
