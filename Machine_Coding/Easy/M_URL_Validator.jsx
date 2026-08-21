import React from 'react'

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
  return (
    <div>M_Url_Validator</div>
  )
}

export default M_URL_Validator