import React from 'react'

//useLayoutEffect is a React Hook that runs synchronously right after React has updated the DOM, but before the browser paints the screen

/*
->Use the useLayoutEffect hook to measure the width of a DOM element and dynamically update its styling based on its width.

Requirements:
    1. Create a box with some text inside it.
    2. Use useRef to access the box DOM element.
    3. Use useLayoutEffect to measure its width using getBoundingClientRect().
    4. Display the measured width below the box.
    5. Change the box's background color based on its width:
    - Less than 300px → Red
    - 300px–500px → Orange
    - Greater than 500px → Green
    6. Add buttons to increase and decrease the box width.
    7. Ensure measurements are updated before the browser paints.
*/
const R_Implement_useLayoutEffect = () => {
  return (
    <div>R_Implement_useLayout</div>
  )
}

export default R_Implement_useLayoutEffect