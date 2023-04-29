import react from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Navbar from "./Components/Navbar"
import FaceRecognition from "./Components/faceRecognition"
import CarRecognition from "./Components/carRecognition"
import "./App.css"
import Find from "./Components/finds"
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/face' element={<FaceRecognition />} />
          <Route path='/car' element={<CarRecognition />} />
          <Route path='/finds' element={<Find />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
