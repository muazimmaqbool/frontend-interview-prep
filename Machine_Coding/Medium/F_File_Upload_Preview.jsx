import React, { useState } from "react";

//Question: Upload an image and show preview.
const F_File_Upload_Preview = () => {
  const [image, setimage] = useState("");
  console.log(image);
  return (
    <div>
      <h2>File Upload Preview</h2>
      <input
        type="file"
        // Restricts selection to image files only. Examples: .png, .jpg, .jpeg, .gif, .webp
        accept="image/*"
        // onChange={(e) => {
        //   setimage(URL.createObjectURL(e.target.files[0]));
        // }}
        onChange={(e) => {
          // e.target.files contains all selected files.
          // Since we are selecting only one image,
          // take the first file.
          const file = e.target.files[0];

          // If user cancels file selection,
          // file will be undefined.
          if (!file) return;

          // URL.createObjectURL()
          // Creates a temporary local URL for the selected file.
          //
          // Example:
          // blob:http://localhost:3000/ab12cd34...
          //
          // This lets us preview the image
          // without uploading it to a server.
          const imageURL = URL.createObjectURL(file);

          // Save the generated URL in state.
          setimage(imageURL);
        }}
      />
      <div>
        <h3>Selected Image:</h3>
        {image && (
          <img
            src={image}
            width={200}
            alt="prev image"
            style={{
              borderRadius: "10px",
              border: "2px solid #ddd",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default F_File_Upload_Preview;
