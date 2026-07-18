import React, { useEffect, useState } from "react";

/*
->Question:
        Initially display 20 items.
        When reaching the bottom, load 20 more.
*/

//generates 100 items like this: item 1, item 2,... (See it's explanation in previous pagination code)
const allItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
// console.log("All Items:",allItems)
const C_Infinite_Scroll = () => {
  const [count, setcount] = useState(20);

//responsible for detecting when the user reaches the bottom of the page and then loads 20 more items.
  useEffect(() => {

    //this function executes every time the user scrolls
    const handleScroll = () => {
        //Checks if user has reached the bottom:
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        //window.innerHeight: Height of the visible browser window. Eg: 800px
        //window.scrollY: How much the page has been scrolled. Eg: Suppose you've scrolled to 1200px
        //Add them together i.e 800 + 1200 = 2000px

        //Now:document.body.offsetHeight: Total height of the page. suppose its 2000px
        // now 2000px >=2000px true means: The bottom of the visible screen has reached the bottom of the page.

        //Load 20 more items
        setcount((c) => Math.min(c + 20, allItems.length));
        //Suppose c=20, after scroll => 20+20 =40, and so on now react renders slice(0,40), then slice(0,60) and so on
        //Now why Math.min:
            //Imagine you have reached 90 items but only 100 are available so next increment is 90+20 i.e 110 but we have only 100 items
            //so Math.min(110,100) it will return 100
      }
    };
    
    //Register event listener: this tells the browser that whenever the page scrolls, execute handleScroll().
    window.addEventListener("scroll", handleScroll);

    //cleanup function: when the component unmounts, React removes the scroll listener.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <h2>Infinite Scroll</h2>
      <h3>Available Items:</h3>
      {allItems.slice(0, count).map((item) => (
        <p style={{fontSize:"1.5rem"}} key={item}>{item}</p>
      ))}
    </div>
  );
};

export default C_Infinite_Scroll;
