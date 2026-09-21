import React, { useState } from 'react'

/*
Create a responsive Get Weekday component that displays the corresponding day of the
week when a user selects or enters a valid date.

Requirements:
    - A heading with text Get Weekday.
    - The interface must include:
        An input field with a browser datepicker (type="date")
        A button labeled "Find Day"
        A display area that will show the resulting day of the week
    - Behavior on clicking the Find Day button:
        If the date is valid:
        Display the result in the format: "That date falls on Monday."
*/
const O_GetWeekDay = () => {
  const [dateInput, setDateInput] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const handleDateChange = (e) => setDateInput(e.target.value);
  const findWeekDay = () => {
    if (!dateInput) return;
    // Convert the input date into a JavaScript Date object
  // Example: "2026-09-21" → Date object
  const date = new Date(dateInput);

  // Tell JavaScript that we only want the full weekday name
  // Example: "Sunday", "Monday", "Tuesday"
  const options = { weekday: "long" };

  // Convert the date into its weekday name
  // "en-US" ensures the result is in English
  // Example: "2026-09-21" → "Monday"
  const dayName = date.toLocaleDateString("en-US", options);
    setDayOfWeek(dayName)
  }
  return (
    <div>
      <h1>Get Weekday</h1>
      <input
        type="date"
        
        value={dateInput}
        onChange={handleDateChange}
      />
      <button onClick={findWeekDay} >
        Find Day
      </button>
      {dayOfWeek &&
        <div>
          That date falls on <strong>{dayOfWeek}</strong>
        </div>}
    </div>
  );
}

export default O_GetWeekDay