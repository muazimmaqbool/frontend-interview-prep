import React, { useState } from "react";

/*
->Question: Build a star rating component.

Requirements:
    Display 5 stars
    Hover highlights stars
    Click selects the rating
    Selected rating remains after hover ends
*/
const K_Star_Rating = () => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);
  return (
    <div>
      <h2>Star Rating Component ⭐</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          style={{
            fontSize: "35px",
            cursor: "pointer",
            color: (hover || rating) >= star ? "gold" : "gray",
          }}
          onMouseEnter={()=>sethover(star)}
          onMouseLeave={()=>sethover(0)}
          onClick={()=>setrating(star)}
        >
          ★
        </div>
      ))}
      <h2>Your rating is: {rating}</h2>
    </div>
  );
};

export default K_Star_Rating;
