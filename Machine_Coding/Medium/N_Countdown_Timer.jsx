import React, { useEffect, useState } from "react";

/*
->Question: Create a countdown timer.
            Requirements:
                    User enters seconds
                    Start button
                    Stop button
                    Reset button
                    Timer reaches 0 automatically
*/
const N_Countdown_Timer = () => {
  const [seconds, setseconds] = useState(10);
  const [running, setrunning] = useState(false);

  useEffect(() => {
    if(!running || seconds<=0) return;
    const timer=setTimeout(()=>{
        setseconds((prev)=>prev-1)
    },1000)
    return ()=>clearTimeout(timer)
  }, [running,seconds]);
  return (
    <div>
      <h2>Countdown_Timer</h2>
      <label>
        Seconds:
        <input
          type="number"
          value={seconds}
          onChange={(e) => setseconds(e.target.value)}
        />
      </label>
      <button onClick={() => setrunning(true)}>Start</button>

      <button onClick={() => setrunning(false)}>Stop</button>
      <button
        onClick={() => {
          setrunning(false);
          setseconds(10);
        }}
      >
        Reset
      </button>

      <h1>Time Remaining: {seconds}</h1>
    </div>
  );
};

export default N_Countdown_Timer;
