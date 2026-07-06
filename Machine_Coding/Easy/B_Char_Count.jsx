import React, { useState } from "react";

/*
->Question:
    Create a textarea that displays:
        Total characters
        Total words

*/
const B_Char_Count = () => {
  const [text, settext] = useState("");

  const words=text.trim() ? text.trim().split(/\s+/).length:0;
  return (
    <div>
      <textarea value={text} onChange={(e) => settext(e.target.value)} />
        <h3>Characters: {text.length} </h3>
        <h3>Words: {words} </h3>
    </div>
  );
};

export default B_Char_Count;
