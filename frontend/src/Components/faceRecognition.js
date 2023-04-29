import react from 'react'
import { useState } from 'react'
// import axios from 'axios'
import Particle from "./Particles"
export default function FaceRecognittion() {
  const [image, setImage] = useState("")
  const [exsists, setExsits] = useState(false)

  function convert(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result)
      setImage(reader.result)
      setExsits(prev => !prev)
    }
    reader.onerror = error => {
      console.log("ERROR ", error)
    }
  }
  function handleSubmit() {
    const obj = {
      contentType: "w",
      Data: image,
    }
    console.log("Submitted and cool animation plays")
    window.location.reload()
    // axios.post('http://localhost:8080/images/add', obj)
    //   .then(res => { console.log(res) })
    //   .catch(err => console.log(err));
  }
  return (
    <div>
      <Particle />
      <div className='face-container'>
        <div className='contents'>
          {exsists && <div className="img-container">
            <img className="preview" src={image} alt="" />
          </div>}


          <div>
            <form action="">
              <input type="file"
                accept="image/*"
                onChange={convert} 
              />
            </form>
            <button className="btn" onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>


    </div>
  )
}