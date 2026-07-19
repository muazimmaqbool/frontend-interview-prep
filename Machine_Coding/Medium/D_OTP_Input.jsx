import React, { useRef, useState } from "react";

/*
->Question:
    Create six OTP boxes.
    Requirements:
        1. Auto move to the next input after typing.
        2. Backspace should move to the previous input.
        3. Only numbers should be allowed.
*/
const D_OTP_Input = () => {
  //Array(6).fill(""): creats array of size 6 with each item having value of "", i.e ["", "", "", "", "", ""]
  const [otp, setotp] = useState(Array(6).fill(""));
  // console.log("otp:",otp)

  // useRef is used to store references to all input elements.
  // refs.current will look like:
  // [input1, input2, input3, input4, input5, input6]
  // It allows us to programmatically focus any input.
  const refs = useRef([]);

  // Runs whenever a user types in an input box.
  const handleChange = (e, index) => {
    //getting value entered by the user
    const value = e.target.value;

    // /^\d?$/
    // ^   -> Start of string
    // \d  -> A digit (0-9)
    // ?   -> Zero or one digit
    // $   -> End of string
    //
    // Allows:
    // ""
    // "5"
    //
    // Rejects:
    // "ab"
    // "12"
    // "@"
    if (!/^\d?$/.test(value)) return;

    // Create a copy of the OTP array.
    // Never mutate state directly.
    const copy = [...otp];
    // Update only the current input's value.
    copy[index] = value;

    // Update state.
    setotp(copy);

    // If user entered a digit and current input is not the last one,
    // automatically move focus to the next input.
    if (value && index < 5) refs.current[index + 1].focus();
  };
  return (
    <div>
      <h2>OTP Input</h2>
      {/* Loop through all 6 OTP values and create 6 input boxes */}
      {otp.map((value, index) => (
        <input
          key={index}
          // Store each input element inside refs.current.
          // Example:
          // refs.current[0] -> first input
          // refs.current[1] -> second input
          ref={(el) => (refs.current[index] = el)}
          // Controlled input.
          // Value comes directly from React state.
          value={value}
          // Only one character can be entered.
          maxLength={1}
          // Whenever user types,
          // pass both the event and input index.
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default D_OTP_Input;
