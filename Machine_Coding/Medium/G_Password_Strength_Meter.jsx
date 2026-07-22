import React, { useState } from "react";

//Question: Show: Weak, Medium, Strong for entered password
const G_Password_Strength_Meter = () => {
  const [password, setpassword] = useState("");

  const strength =
    password.length < 6 ? "Week" : password.length < 10 ? "Medium" : "Strong";

    const strengthColor =
    strength === "Weak"
      ? "#e74c3c"
      : strength === "Medium"
      ? "#f39c12"
      : "#27ae60";
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
      {password!=="" &&  <h3
            style={{
              marginTop: "15px",
              color: strengthColor,
            }}
          >
           {strength}
          </h3>}
    </div>
  );
};

export default G_Password_Strength_Meter;
