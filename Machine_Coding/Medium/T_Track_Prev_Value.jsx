import React, { useRef, useState,useEffect } from "react";

/*
Question:
Create an input field that shows both the current value and the previous value.
Use useRef to store the last value so you can compare it with the next one.

Requirements:
1. Use a state variable for the current value.
2. Use useRef to keep track of the previous value.
3. Update the previous value whenever the input changes.
4. Show a working example with a small explanation.

Example:
- User types: A
  Current: A
  Previous: ""

- User types: AB
  Current: AB
  Previous: A

- User types: ABC
  Current: ABC
  Previous: AB
*/

const T_Track_Prev_Value = () => {
  const [text, setText] = useState("");
  const previousText = useRef("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Save previous value before updating the current one.
    previousText.current = text;
    setText(newValue);
  };
  //or
//    useEffect(() => {
//     console.log("called");
//     previousText.current = text;
//   }, [text]);

 /*
    Whenever text changes, the effect runs.
    It stores the current value of Text into previousText.current.
    But this assignment happens after the screen renders, so when the UI shows:
        text is the new value
        previousText.current still has the old value — perfect!
    
    Why useRef stores the previous value
    useRef returns the same object every render
    It doesn't reset on re-render
    It does not trigger re-render when updated
    */
  return (
    <div>
        <h2>Tracking Previous State Values</h2>
        <input value={text} onChange={handleChange}/>   
        <h4>Current value: {text}</h4>
        <h4>Previous Value: {previousText.current}</h4>
    </div>
  );
};

export default T_Track_Prev_Value;

/*
Lifecycle in this example:
| Step             | Value of `text` | Value of `previousText.current` |
| ---------------- | --------------- | ------------------------------- |
| initial load     | `""`            | `""`                            |
| user types "A"   | `"A"`           | `""`                            |
| user types "AB"  | `"AB"`          | `"A"`                           |
| user types "ABC" | `"ABC"`         | `"AB"`                          |
*/