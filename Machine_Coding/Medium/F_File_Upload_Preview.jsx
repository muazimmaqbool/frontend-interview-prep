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
        accept="image/*"
        onChange={(e) => setimage(URL.createObjectURL(e.target.files[0]))}
      />
      <div>
        <h3>Selected File/Image:</h3>
        {image && <img src={image} width={200} alt="prev image" />}
      </div>
    </div>
  );
};

export default F_File_Upload_Preview;
