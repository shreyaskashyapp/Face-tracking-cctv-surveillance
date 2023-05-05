import React, { useState } from "react";
import axios from 'axios'
import "./FaceRecognition.css";
import Particle from './Particles'

export default function FaceRecognition() {
  const [name, setName] = useState("");

  

  const handleUploadClick = () => {
    console.log("")
    const obj = {
      number: name
    }
    // Add code to handle the upload here
    axios.post('http://localhost:8080/plates/add', obj)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log('Upload clicked');

    // fetch("http://localhost:5000/run-facial-recognition")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.text();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
    // console.log("Upload clicked");
  };

    function handleChange(event){
      console.log(event.target.value)
      setName(event.target.value)
    }


  return (
    <div className="face-recognition">
     <Particle />
    <input type="text" placeholder="NUMBER PLATE" name="" id="" onChange={handleChange}/>
      <div className="upload-container">
      </div>
        <div className="image-container">
          <button className="load-label" onClick={handleUploadClick}>
            SUBMIT
          </button>
        </div>
      
    </div>
  );
}