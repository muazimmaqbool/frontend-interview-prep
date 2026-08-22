import React, { useState } from "react";

/*
Build a small React component that validates whether a user's input is a proper URL in real time.
This is useful in forms where users need to enter website links, API endpoints, or redirect URLs.

Things to do:
    . Create an input where the user can type a URL.
    . Implement a validator function that follows these rules:
    . The URL must start with http:// or https://.
    . The hostname must either be: localhost (with or without a port), OR a domain containing at least one dot (e.g.,example.com, abc.io, a.b).
    . The URL must not contain any whitespace.

Show validation feedback:
    . Display "Valid URL" in green if the input passes validation.
    . Display "Invalid URL" in red if the input fails validation.

Examples:
    input: "https://example.com"
    output: "Valid URL"

    input: "example.com"
    output: "Invalid URL"

    input: "https://exa mple.com"
    output: "Invalid URL"

    input: "http://localhost:3000"
    output: "Valid URL"

    input: "ftp://example.com"
    output: "Invalid URL"
*/
const M_URL_Validator = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl(value) {
    // Return false if the input is empty
    // or contains any whitespace.
    if (!value || /\s/.test(value)) return false;

    // URL must contain a protocol such as http:// or https://
    if (!value.includes("://")) return false;

    try {
      // URL() parses the string and gives us
      // useful properties like protocol and hostname.
      const url = new URL(value);
    //   console.log("url:",url)

      // Allow only HTTP and HTTPS protocols.
      // ftp://, file://, etc. will be invalid.
      const isHTTP = url.protocol === "http:" || url.protocol === "https:";

      // Host can be:
      // 1. localhost
      // 2. A domain containing at least one dot
      //    Example: example.com, abc.io, a.b
      const hasValidHost =
        url.hostname === "localhost" || /\w+\.\w+/.test(url.hostname);

      // URL is valid only when both conditions are true.
      return isHTTP && hasValidHost;
    } catch (err) {
      // new URL() throws an error if the URL format is invalid.
      // In that case, return false.
      return false;
    }
  }
  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    setIsValid(validateUrl(value));
  }
  return (
    <div>
      <h1>URL Validator</h1>

      <div>
        {/* Add Input and Result */}
        <input
          type="text"
          value={input}
          placeholder="Enter a URL"
          onChange={handleChange}
          data-testid="url-input"
        />
        {isValid !== null && (
          <p style={{ color: isValid ? "green" : "red" }} data-testid="result">
            {isValid ? "Valid URL" : "Invalid URL"}
          </p>
        )}
      </div>
    </div>
  );
};

export default M_URL_Validator;
