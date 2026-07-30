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
    //stores the current number of seconds
  const [seconds, setseconds] = useState(10);
  //tracks whether the timer is running or not
  const [running, setrunning] = useState(false);

  useEffect(() => {
    if (!running || seconds <= 0) return;
    //runs after every 1 second
    const timer = setTimeout(() => {
      setseconds((prev) => prev - 1);
    }, 1000);
    // Cleanup: Remove the previous timeout before creating a new one.
    // Prevents multiple timers from running simultaneously.
    return () => clearTimeout(timer);
  }, [running, seconds]);
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

      <h1>
        Time Remaining:{" "}
        <span style={{ color: seconds <= 3 ? "#ef4444" : "#111" }}>
          {seconds}
        </span>
      </h1>
    </div>
  );
};
/*
->Why setTimeout instead of setInterval?
    A lot of developers use setInterval, but setTimeout is often safer in React

    ->With setInterval:
        setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        Problems:
            Easier to accidentally create multiple intervals.
            Must remember to clear the interval.
            Can sometimes work with stale values if not written carefully.

    ->With recursive setTimeout (your approach):
        setTimeout(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        Benefits:
            Only one timer exists at a time.
            Every render creates a fresh timeout.
            Easier cleanup using clearTimeout.
            Fits naturally with React's render cycle.

    ->Interview Answer:
        I used setTimeout inside useEffect instead of setInterval. Each time the state updates, React re-renders and schedules the next timeout. 
        This ensures only one timer exists at a time, avoids multiple interval issues, and makes cleanup simpler using clearTimeout.
*/


export default N_Countdown_Timer;
