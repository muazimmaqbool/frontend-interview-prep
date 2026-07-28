import React, { useState } from 'react'

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
    const handleCopied=async()=>{
        await navigator.clipboard.writeText(text)
        setcopied(true)
        setTimeout(() => {
            setcopied(false)
        }, 2000);
    }
  return (
    <div>
        <h2>Copy to Clipboard</h2>
        <input type='text' value={text} onChange={(e)=>settext(e.target.value)}/>
        <button onClick={handleCopied}>{copied?"Copied":"Copy"}</button>
    </div>
  )
}

export default L_Copy_to_Clipboard