import React, { useState, useEffect } from 'react';
import {MapContainer as Map, Popup, TileLayer, Marker } from 'react-leaflet';
import { Icon } from "leaflet";
import '../App.css'

import DATA from "./data/demo-data.json"; 


console.log(DATA)
function MyComponent(props) {
  console.log(props.props)
  const [active,setActive]=React.useState(null);


  return <Map center={props.props} zoom={14}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
 
  {<Marker position={props.props}>
   
   <Popup><h1>{"Barnett Henry"}</h1></Popup>

   </Marker>}
 
  </Map>;

     }
  export default MyComponent;