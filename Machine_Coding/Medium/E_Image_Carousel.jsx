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
          {/* Previous Button */}
          <button
            onClick={() => {
              // If current index is 0:
              // (0 - 1 + 6) % 6 = 5
              //
              // If current index is 3:
              // (3 - 1 + 6) % 6 = 2
              //
              // This lets the carousel move backwards
              // and automatically wraps from first image
              // to the last image.
              setindex((index - 1 + images.length) % images.length);
            }}
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              background: "#2563eb",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.background = "#2563eb")}
          >
            ⬅ Prev
          </button>

          {/* Next Button */}
          <button
            onClick={() =>
              // If current index is 0:
              // (0 + 1) % 6 = 1
              //
              // If current index is 5:
              // (5 + 1) % 6 = 0
              //
              // % (modulus) wraps the index back to 0,
              // creating an infinite looping carousel.
              setindex((index + 1) % images.length)
            }
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              background: "#16a34a",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#15803d")}
            onMouseOut={(e) => (e.target.style.background = "#16a34a")}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default E_Image_Carousel;
