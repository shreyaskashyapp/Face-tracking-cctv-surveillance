import React, { useState, useEffect } from 'react';
import {MapContainer as Map, Popup, TileLayer, Marker } from 'react-leaflet';
import { Icon } from "leaflet";
import '../App.css'

import DATA from "./data/demo-data.json"; 


console.log(DATA)
const MyComponent = () => {
  const [active,setActive]=React.useState(null);


  return <Map center={[12.9716, 77.5946]} zoom={14}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
 
  {DATA.map(obj => (

   <Marker position={obj.coords}>
   
   <Popup><h1>{obj.mname}</h1></Popup>

   </Marker>

  ))}
 
  </Map>;

     }
  export default MyComponent;