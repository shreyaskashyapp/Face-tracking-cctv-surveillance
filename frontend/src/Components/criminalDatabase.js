import React, { useState,useEffect } from "react";
import axios from 'axios'
import "./FaceRecognition.css";
import Particle from './Particles'
import Lottie from 'lottie-react'
import ticks from './Animations/tick' 


export default function Criminal(){
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("7899819776");
  const [tick, setTick] = useState(false)
  const [status, setStatus] = useState(false)
  const [display, setDisplay] = useState(true)
  const [data, setData] = useState()
  const handleImageChange = (event) => {
    console.log(event.target.files[0])
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  useEffect(()=>{
    axios.get('http://localhost:8080/crimes')
    .then((response) => {
      setData(response.data)
      setStatus(response.data[response.data.length -1])
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  },[])

  const handleUploadClick = () => {
    console.log(image)
    // Add code to handle the upload here
      const obj = {
        Name: name,
        Data: image,
        Phone:phno
      }
      // Add code to handle the upload here
      axios.post('http://localhost:8080/references/add', obj)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

    setTick(prev => !prev)
    setTimeout(() => { window.location.reload() }, 3500)
    
    console.log('Upload clicked');
   };
   console.log(status)
   function handleChange(event) {
    console.log(event.target.value)
    setName(event.target.value)
  }
  function handleClick2(){
    setDisplay(prev => !prev)
  }

  
  return(
    <div>
    {!tick && (<div className="face-recognition2">
      <Particle />
      <input type="text" placeholder="NAME" name="" id="" onChange={handleChange} />
      <div className="upload-container" onClick={handleClick2}>
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
      {image&&display && (
        <div className="image-container">
          <div className="image-preview-container">
            <img src={image} alt="Preview" className="image-preview" />
          </div>
          <button className="upload-button" onClick={handleUploadClick}>
            Upload
   </button>
        </div>
      )}
    </div>)}
    {tick && <div className="tick"><Lottie animationData={ticks} loop={false} /></div>}
    {status&&status.Status &&
      <div className="db-block">
      {status.Status&&<div>
      <img className="db-image" src={status.image_2}alt=""/>
      <img className="db-image" src={status.image_1} alt=""/>
      </div>}
      
      <div className="text">
      {status.Status?<h2>Found</h2>: <h2>Not Found</h2>}  
      </div>
      </div>}
    
  </div>
  )
}