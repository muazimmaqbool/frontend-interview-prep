import React, { useEffect, useState } from "react";

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

  // Here we add a scroll event listener to the window.
  // Every time the user scrolls, handleScroll() will be called.
  useEffect(() => {
    //checks how far the user has scrolled vertically.
    function handleScroll() {
      /*
        window.scrollY gives the current vertical scroll position.

        If the user has scrolled more than 400px,
        show the Back to Top button.

        Otherwise, hide the button.
      */
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    // Listen for the "scroll" event on the browser window.
    window.addEventListener("scroll", handleScroll);
    /*
      Cleanup function.

      When the component is removed from the page,
      remove the scroll event listener.

      This prevents unnecessary event listeners and memory leaks.
    */
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    // Scroll the page back to the very top.
    window.scrollTo({
      top: 0,

      //scrolling animation smooth instead of jumping instantly.
      behavior: "smooth",
    });
  }
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
      <h2>Back To Top</h2>
       {/*
        Generate 40 paragraphs so that the page has
        enough content to create a scrollbar.

        Array(40) creates an array with 40 empty positions.
        map() is then used to create a paragraph for each position.
      */}
      {[...Array(40)].map((_, i) => (
        <p key={i}>This is paragraph {i + 1}</p>
      ))}
      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              fontSize: "16px",
              padding: "10px 15px",
            }}
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
};

export default L_Back_To_Top;
