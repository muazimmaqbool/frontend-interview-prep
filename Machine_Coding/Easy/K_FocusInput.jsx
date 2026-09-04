import React, { useRef } from "react";
/*
Create a functional component that:
    . Renders a text input and a button.
    . When the button is clicked, the input should automatically receive focus.
    . Uses the useRef hook to reference the input element directly and call . focus() on it.

Requirements:
    1. Use the useRef hook to get a reference to the input element.
    2. The input must have placeholder "Type here'".
    3. The button must be labelled "Focus Input".

Example Behavior:
    . On page load, the input is not focused.
    . When the user clicks the "Focus Input" button, the text cursor appears inside the input field, ready for typing.
*/
const K_FocusInput = () => {
  // useRef creates a reference that can point to a DOM element.
  // Initially, inputRef.current is null because the input is not mounted yet.
  const inputRef = useRef();
  // console.log(inputRef)
  // After rendering, inputRef.current will contain the actual <input> DOM element.

  const handleClick = () => {
    // Check if the input element exists.
    // inputRef.current refers to the actual DOM element.
    if (inputRef.current) {
      // focus() is a built-in DOM method.
      // It places the cursor/focus inside the input field.
      inputRef.current.focus();
    }
  };

  //extra remove focus from input.
  const removeFocus = () => {
    if (inputRef.current) {
      inputRef.current.blur();
      //or
      // inputRef.current=null; // this is not professional way to remove focus from input. It will remove the reference to the input element and it will not be able to focus again.
    }
  };
  return (
    <div>
      <h2>Focus On Input</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* 
          Attach the ref to the input.
          React will automatically assign the input DOM element
          to inputRef.current.
        */}
        <input ref={inputRef} type="text" placeholder="Type here..." />
        <button onClick={handleClick}>Focus Input</button>
        {/* extra */}
        <button onClick={removeFocus}>Unfocus Input</button>
      </div>
    </div>
  );
};

export default K_FocusInput;
