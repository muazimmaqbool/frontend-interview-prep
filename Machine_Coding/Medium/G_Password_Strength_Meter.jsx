import React, { useState } from "react";

//Question: Show: Weak, Medium, Strong for entered password
const G_Password_Strength_Meter = () => {
  const [password, setpassword] = useState("");

  const strength =
    password.length < 6 ? "Week" : password.length < 10 ? "Medium" : "Strong";
  return (
    <div>
      <h2>Password Strength Meter</h2>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </label>
      {password!=="" && <h3>{strength}</h3>}
    </div>
  );
};

export default G_Password_Strength_Meter;
