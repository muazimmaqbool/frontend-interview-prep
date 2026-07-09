import React, { useState } from 'react'

//Question : Show and hide password
const D_Show_Hide_Pass = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [value, setvalue] = useState("");
  return (
    <div style={{display:"flex",gap:"15px"}}>
        <input type={showPassword?"text":"password"} value={value} onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={()=>setshowPassword((prev)=>!prev)}>{showPassword ? "Hide":"Show"}</button>
    </div>
  )
}

export default D_Show_Hide_Pass