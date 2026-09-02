import React, { useState } from "react";

/*
->Things to do:
    . Displays a live character count (A / B). Ex. 5/25 where 5 is character count and 25 is max length
    . Allow the user to set a custom character limit using a number input field (maxLength)
    . Display a warning message when the user reaches 90% of the limit. The error message must be "Limit exceeded by x characters", where x is the number of characters exceeded."
    . Display an error message when the user exceeds the character limit. The error message must be "You are close to the limit!"

->Features to be Done:
    . The default max character length: 50
    . Display the character count in the format: currentLength / maxLength.
    . Warning must be shown at: 90% of the limit (e.g., 45 of 50).

->Testing Instructions:
    Please use the following data-testid attributes in your React component to help us run automated tests:
    . textarea -> for the text area input.
    . maxlength -> for the input where user enters maximum allowed length.
    . char-info -> for the character count display (A/ B).
    . warning-text -> for the warning message shown near the limit.
    . error-text -> for the error message shown after exceeding the limit.
*/
const S_CharCount = () => {
  const [text, setText] = useState("");
  const [maxLength, setMaxLength] = useState(50);

  const charCount = text.length;
  const warningLimit = Math.floor(maxLength * 0.9);
  const overLimit = charCount > maxLength;
  const warning = charCount >= warningLimit;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: "15px" }}>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div style={{ margin: "15px 0" }}>
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              data-testid="maxlength"
              onChange={(e) => setMaxLength(e.target.value)}
            />
          </label>
        </div>
        <textarea
          style={{ width: "250px", height: "100px" }}
          placeholder="Start Typing"
          data-testid="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div data-testid="char-info">
          {charCount} / {maxLength}
        </div>

        <div>
          {/* Show Warning if it reaches to 90 */}
          {warning && !overLimit && (
            <p style={{ color: "orange" }} data-testid="warning-text">
              You are close to the limit!
            </p>
          )}

          {/* Show  Overlimit message if limit is exceeded*/}
          {overLimit && (
            <p style={{ color: "red" }} data-testid="error-text">
              {`Limit exceeded by ${charCount - maxLength} characters`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default S_CharCount;
