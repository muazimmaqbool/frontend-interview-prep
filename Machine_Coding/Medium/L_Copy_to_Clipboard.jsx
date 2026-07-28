import React, { useState } from "react";

/*
->Question: Create a text box with a "Copy" button.
    Requirements:
            Copy the text
            Show "Copied!" for 2 seconds
            Then revert back
*/
const L_Copy_to_Clipboard = () => {
  const [text, settext] = useState("");
  const [copied, setcopied] = useState(false);
  const handleCopied = async () => {
    // navigator.clipboard.writeText(): Copies the given text to the system clipboard.
    // Since it returns a Promise, we use await.
    // Example: text = "Hello React"
    // Clipboard now contains: "Hello React"
    await navigator.clipboard.writeText(text);
    setcopied(true);
    settext("")
    setTimeout(() => {
      setcopied(false);
    }, 2000);
  };
  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{textAlign:"center"}}>Copy to Clipboard</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "6px",
            background: copied ? "#22c55e" : "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onClick={handleCopied}
          disabled={text===""}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default L_Copy_to_Clipboard;
