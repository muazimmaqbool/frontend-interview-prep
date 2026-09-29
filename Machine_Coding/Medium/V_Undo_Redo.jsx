import React, { useState } from "react";
// Implement Undo/Redo in React:
/*
Build a simple text editor where:
    - Every change is stored in history.
    - Undo restores the previous value.
    - Redo restores an undone value.
    - Making a new change after Undo clears the redo history.
*/
const V_Undo_Redo = () => {
  const [history, sethistory] = useState([""]);
//   console.log("history", history);
  const [index, setIndex] = useState(0);

  const value = history[index];

 const handleChange = (e) => {
  // Get the latest text entered by the user
  const newValue = e.target.value;

  // Keep history only up to the CURRENT index.
  // This is important when:
  // 1. User makes some changes
  // 2. User clicks Undo
  // 3. User starts typing again
  //
  // Any old "Redo" history must now be removed.
  const currentHistory = history.slice(0, index + 1);

  // Add the new textarea value to history
  const newHistory = [...currentHistory, newValue];

  // Save the updated history
  sethistory(newHistory);

  // Move the index to the newly added history item
  setIndex(newHistory.length - 1);
};
  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const redo = () => {
    if (index < history.length - 1) {
      setIndex(index + 1);
    }
  };
  return (
    <div>
      <h2>Undo/Redo Text Editor</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "fit-content",
        }}
      >
        <textarea
          value={value}
          onChange={handleChange}
          placeholder="Start typing..."
        />

        <button onClick={undo} disabled={index === 0}>
          Undo
        </button>

        <button onClick={redo} disabled={index === history.length - 1}>
          Redo
        </button>
      </div>
    </div>
  );
};
/*
->

*/

export default V_Undo_Redo;
