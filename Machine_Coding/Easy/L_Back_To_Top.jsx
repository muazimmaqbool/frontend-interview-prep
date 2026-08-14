import React, { useEffect, useState } from 'react'

/*
Create a floating Back to Top button that appears when the user scrolls down the page and, when clicked, smoothly scrolls back to the top.

Things to do:
    . Add a Back to Top button to the page.
    . Keep it hidden when the scroll position is near the top.
    . Show it only when the user scrolls beyond a certain distance (e.g., 500px).
    . When clicked, smoothly scroll the page to the top.
    . Make sure the button is positioned so it's always visible on the screen when shown.

Note:
    . Ensure the page has enough content to allow scrolling (e.g., multiple paragraphs or elements) so that the Back to Top button can be tested.
*/
const L_Back_To_Top = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  }
  return (
    <div style={{marginBottom:"2.5rem",textAlign:"center"}}>
        <h2>Back To Top</h2>
        {
            [...Array(40)].map((_,i)=>(
                <p key={i}>This is paragraph {i+1}</p>
            ))
        }
        <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && <button
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
          style={{position:"fixed",bottom:"20px",right:"20px", fontSize:"16px",padding:"10px 15px"}}
        >
          Back to Top
        </button>}
      </div>
    </div>
  )
}

export default L_Back_To_Top