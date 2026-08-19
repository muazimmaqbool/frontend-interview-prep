import React, { useState } from "react";
/*
->An acronym is formed by taking the first letter of each word, converting it to uppercase, and joining them together. 
 This is useful in text shortening, branding (NASA, HTML, etc.), or fun abbreviation generators.

Things to do:
    . Create an input where the user can type a phrase. Implement a function that:
    . Splits the phrase into words.
    . Takes the first letter of each word.
    . Converts it to uppercase.
    . Joins the letters together to form the acronym.

    - Add a button to generate the acronym

Examples:
    input: "National Aeronautics Space Administration"
    output: "NASA"

    input: " Hyper Text Markup Language "
    output: "HTML"

    input:""
    output:""
*/
const R_Acronym_Generator = () => {
  const [input, setinput] = useState("");
  const [acronym, setacronym] = useState("");

  function generateAcronym() {
    const result = input
      .split(" ") // or split(/\s+/) but then filter is not required
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase()) // or word.charAt(0).toUpperCase())
      .join("");
    setacronym(result);
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Acronym Generator</h1>
      <p style={{ textAlign: "center" }}>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input
          type="text"
          placeholder="Enter a phrase..."
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button onClick={generateAcronym}>Generate</button>
        <p>Result : {acronym} </p>
      </div>
    </div>
  );
};

export default R_Acronym_Generator;
