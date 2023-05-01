import React, { useState } from "react";
import "./FaceRecognition.css";

export default function FaceRecognition() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleUploadClick = () => {
    // Add code to handle the upload here
    fetch("http://localhost:5000/run-facial-recognition")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    console.log("Upload clicked");
  };

  return (
    <div className="face-recognition">
      <div className="upload-container">
        <label htmlFor="image-upload" className="upload-label">
          Select Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {image && (
        <div className="image-container">
          <div className="image-preview-container">
            <img src={image} alt="Preview" className="image-preview" />
          </div>
          <button className="upload-button" onClick={handleUploadClick}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
}
