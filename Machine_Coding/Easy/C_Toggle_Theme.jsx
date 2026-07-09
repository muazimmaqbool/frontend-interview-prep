import React, { useState } from 'react'

/*
Question:
    Create a button that toggles between:
    Light and Dark
*/
const C_Toggle_Theme = () => {
    const [isDark, setisDark] = useState(false);
  return (
    <div style={{
        backgroundColor:isDark?"#222":"#fff",
        color:isDark?"#fff":"#000",
        minHeight:"100vh"
    }}>
        <h2>Toggle Between Dark and Light theme</h2>
        <button onClick={()=>setisDark((prev)=>!prev)}>Toggle</button>
    </div>
  )
}

export default C_Toggle_Theme