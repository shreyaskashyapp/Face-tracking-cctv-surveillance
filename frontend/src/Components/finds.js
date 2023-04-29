import react, { useState } from 'react'
import Mapsdata from './mapData'
import Particle from './Particles'

export default function Finds() {
  const [show, setShow] = useState(false)
  function handleClick() {
    setShow(prev => !prev)
  }
  return (
    <div className="finds">
      <div onClick={handleClick} className="finds-data">
        <h4>1</h4>
        <h4>Name</h4>
        <h4>Location</h4>
        <h4>Time</h4>
      </div>
      {show&& <Particle />}
      {show&& <Mapsdata />}
      



    </div>
  )
}