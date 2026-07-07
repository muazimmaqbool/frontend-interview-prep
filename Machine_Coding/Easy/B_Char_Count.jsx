import React, { useState } from "react";

/*
->Question:
    Create a textarea that displays:
        Total characters
        Total words

*/
const B_Char_Count = () => {
  const [text, settext] = useState("");

  const words=text.trim() ? text.trim().split(/\s+/).length:0; // Explanation below:
  return (
    <div>
      <textarea value={text} onChange={(e) => settext(e.target.value)} />
        <h3>Characters: {text.length} </h3>
        <h3>Words: {words} </h3>
    </div>
  );
};

/*
Explanation:
    ->  const words=text.trim() ? text.trim().split(/\s+/).length:0;

    1. text.trim() : trim() removes whitespace from the beginning and end of the string.

    2. text.trim() ? : "ternary operator." here If the trimmed string is not empty, it is truthy.
                                          If it is empty (""), it is falsy.
                       Example: text = "Hello";
                                text.trim(); // "Hello" (truthy)

                                text = "     ";
                                text.trim(); // "" (falsy)

    3. text.trim().split(/\s+/):
                split() converts the string into an array.
                The separator here is: /\s+/ "" This is a regular expression.

                                        \s: means any whitespace character, including: Space " ", Tab \t , Newline \n,
                                        
                                        + : means one or more.
                                        
                                        So, /\s+ means: "Split wherever there are one or more whitespace characters."

                    Example:

                    const text = "Hello    World   React";
                    console.log(text.split(/\s+/));
                    Output:
                    ["Hello", "World", "React"]

                    Notice that even though there are multiple spaces, you still get only three words.

    4. .length :Now we count the array items.
            ["Hello", "World", "React"].length
            Output: 3

*/

export default B_Char_Count;
