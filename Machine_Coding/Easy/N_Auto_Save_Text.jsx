import React, { useEffect, useState } from "react";
/*
Build an input field that automatically saves whatever the user types into localStorage by the name "autosave-text", and
restores it even after a page refresh. Include a Clear button to reset both the input and the stored value.

Things to do:
    . Create a text input where the user can type anything.
    . Whatever the user types should be saved automatically.
    . On page refresh, the input should restore the previously saved text.
    . Add a Clear button that clears the text input.
    . Add a Clear button Removes the saved value.
    . The input must be fully controlled by React state.

Example:
    -> User types: Hello World
    -> They refresh the page Input should still show: Hello World
*/
const N_Auto_Save_Text = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem("autosave-text");
    if (saved) {
      setText(saved);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("autosave-text", text);
  }, [text]);
  function clearText() {
    setText("");
    localStorage.removeItem("autosave-text");
  }
  return (
    <div>
      <h1>Auto Save Input</h1>
      <form>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          data-testid="input-field"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={clearText} data-testid="clear-btn">
          Clear
        </button>
      </form>
    </div>
  );
};

export default N_Auto_Save_Text;
