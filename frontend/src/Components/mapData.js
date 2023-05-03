import react, { useState, useEffect } from 'react'
import Map from './map'
import '../App.css'
import axios from 'axios'

export default function Mapdata(props) {

  const [data, setData] = useState([])
  const [arr,setArr] = useState([])
  const longitude= props.location[0]
  const latitude= props.location[1]
  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:8080/references');
      // console.log(res.data[0].Data)
      return res.data;
    } catch (err) {
      console.log(err);
    }

  }
  // useEffect(() => {
  //   fetchData()
  //     .then(data => {
  //       setData(data)
  //     })
  // }, [])
  // console.log(data)

  return (
    <div className="maps-data-container">
      <div className='maps-data'>
        <div className='maps'>
          <Map props={props.location} name="sui"/>
        </div>
        <div className='data'>
          <img className="map-image" src={props.src} alt="" />
          <h4>Name: {props.name}</h4>
          <h4>Location :{longitude} / {latitude}</h4>
          <h4>Time: {props.time}</h4>
        </div>

      </div>
    </div>
  )
}