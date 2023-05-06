import react from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Navbar from "./Components/Navbar"
import FaceRecognition from "./Components/faceRecognition"
import CarRecognition from "./Components/carRecognition"
import Carfinds from './Components/carrrr'
import CriminalDatabase from './Components/criminalDatabase'
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
          <Route path='/carfinds' element={<Carfinds />} />
          <Route path='/database' element={<CriminalDatabase />} />
          
        </Routes>
      </Router>
    </div>

  );
}

export default App;
