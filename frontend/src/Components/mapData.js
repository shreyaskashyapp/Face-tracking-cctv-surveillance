import react from 'react'
import MAP from './map'
import '../App.css'

export default function Mapdata(props){
  return(
    <div className="maps-data-container">
        <div className='maps-data'>
            <div className='maps'>
              <MAP/>
            </div>
            <div className='data'> 
                <img className="map-image"src="" alt=""/>
                <h4>Name:</h4>
                <h4>Location:</h4>
                <h4>Time:</h4>
            </div>

        </div>
    </div>
  )
}