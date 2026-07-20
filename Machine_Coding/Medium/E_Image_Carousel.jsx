import React, { useState } from "react";

/*
->Question:
    Show images carousel with:
        Previous
        Next
        Loop around
*/

const images = [
  "https://res.cloudinary.com/dwk9gblin/image/upload/v1783246097/pexels-imadclicks-18478985_yhg743.jpg",
  "https://res.cloudinary.com/dwk9gblin/image/upload/v1783186976/doodhpathri_a5ieyd.jpg",
  "https://res.cloudinary.com/dwk9gblin/image/upload/v1783186976/gurez_nzbrkg.jpg",
  "https://res.cloudinary.com/dwk9gblin/image/upload/v1783186976/lehladakh_svyyyo.jpg",
  "https://res.cloudinary.com/dwk9gblin/image/upload/v1783186648/srinagar_lns8xp.jpg",
  "https://res.cloudinary.com/dwk9gblin/image/upload/v1783186630/gulmarg_ottswx.jpg",
];
const E_Image_Carousel = () => {
  const [index, setindex] = useState(0);
  return (
    <div>
      <h2>Image Carousel</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src={images[index]}
          loading="lazy"
          alt="kashmir pictures"
          style={{ width: "700px", height: "350px" }}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              padding: "5px",
              borderRadius: "10px",
              backgroundColor: "skyblue",
              color: "white",
              border: "none",
              fontSize: "2rem",
            }}
            onClick={() =>
              setindex((index - 1 + images.length) % images.length)
            }
          >
            Prev
          </button>

          <button
            style={{
              padding: "5px",
              borderRadius: "10px",
              backgroundColor: "skyblue",
              color: "white",
              border: "none",
              fontSize: "2rem",
            }}
            onClick={() => setindex((index + 1) % images.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default E_Image_Carousel;
