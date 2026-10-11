import React, { useLayoutEffect, useRef, useState } from "react";

//useLayoutEffect is a React Hook that runs synchronously right after React has updated the DOM, but before the browser paints the screen

/*
->Use the useLayoutEffect hook to measure the width of a DOM element and dynamically update its styling based on its width.

Requirements:
    1. Create a box with some text inside it.
    2. Use useRef to access the box DOM element.
    3. Use useLayoutEffect to measure its width using getBoundingClientRect().
    4. Display the measured width below the box.
    5. Change the box's background color based on its width:
    - Less than 300px → Red
    - 300px–500px → Orange
    - Greater than 500px → Green
    6. Add buttons to increase and decrease the box width.
    7. Ensure measurements are updated before the browser paints.
*/
const R_Implement_useLayoutEffect = () => {
  const [width, setwidth] = useState(300);
  const [measuredWidth, setMeasuredWidth] = useState(0);

  const boxRef = useRef(null);

  // Runs after React updates the DOM but before browser paint
  useLayoutEffect(() => {
    //get box div
    if (!boxRef.current) return;

    // Get the actual width of the box
    const { width } = boxRef.current.getBoundingClientRect();

    setMeasuredWidth(width);
  }, [width]);

  const getBoxBgColor = () => {
    if (measuredWidth < 300) return "red";
    if (measuredWidth <= 500) return "orange";
    return "green";
  };

  return (
    <div>
      <h2>useLayoutEffect</h2>

      {/* box */}
      <div
        ref={boxRef}
        style={{
          width: `${width}px`,
          padding: "20px",
          boxSizing: "border-box",
          backgroundColor: getBoxBgColor(),
        }}
      >
        Resize Me
      </div>
      <p>Measured Width: {measuredWidth}px</p>
      <button onClick={() => setwidth((prev) => Math.max(100, prev - 100))}>Decrease</button>
      <button onClick={() => setwidth((prev) => prev + 100)}>Increase</button>
    </div>
  );
};
/*
->Interview Follow-up Questions:
  1. What is the difference between useEffect and useLayoutEffect?
  useEffect generally runs after the browser paints, while useLayoutEffect runs synchronously after DOM updates but before the browser paints.

  2. Why is useLayoutEffect useful for DOM measurements?
  It allows us to measure DOM elements and update the UI before the browser paints, preventing layout flickering.

  3. When can useLayoutEffect negatively affect performance?
  Because it blocks browser painting until it finishes. Heavy calculations or unnecessary state updates inside useLayoutEffect can delay rendering and make the UI feel slow.

  Interview tip: 
    Prefer useEffect for most side effects. Use useLayoutEffect only when you need synchronous DOM measurements or visual adjustments before paint.
*/

export default R_Implement_useLayoutEffect;
