import react from 'react'
import Particle from './Particles'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  let navigate = useNavigate();

  function handleClick1(event) {
    navigate('/face')
  }

  function handleClick2() {
    navigate('/car')
  }

  return (
    <div>
      <Particle />
      <div className="container">
        <div onClick={handleClick1} className="face">
        <i class='ri-user-fill' ></i>
    </div>
    <div onClick={handleClick2} className="car">
        <i class="ri-car-fill"></i>
     </div>
       
      </div>

    </div>
  )
}