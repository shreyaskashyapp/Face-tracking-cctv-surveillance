import react, { useState, useEffect } from 'react'
import Mapsdata from './mapData'
import Particle from './Particles'
import axios from 'axios'
import Tables from './table'
import Lottie from 'lottie-react'
import loading from './Animations/loading'

export default function Finds() {

  const [data, setData] = useState([1, 2])
  const [m, setM] = useState()
  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:8080/finds');
      // console.log(res.data[0].Data)
      return res.data;
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data)
      })
  }, [])
  console.log(data)

  function handleClick() {
    setShow(prev => !prev)
    console.log(show)
  }

  function handleClick1(id, src, time, location) {
    console.log(location)
    const arr = location.split("/")
    setM(<Mapsdata name={id} location={[arr[0], arr[1]]} src={src} time={time} />)
    setShow(prev => !prev)
  }
  const [show, setShow] = useState(false)

  const Element = data.map(items => <Tables name={items.Name} location={items.Location} time={items.Time} onclick={handleClick1} data={items.Data} />)

  return (
    <div>
      <div className="finds">
        {show && <Particle />}
        {show && m}
        {Element}

        {data.length == 0 && <div className="loading">
          <Lottie animationData={loading} />
          Loading../
        </div>}

      </div>

    </div>
  )
}