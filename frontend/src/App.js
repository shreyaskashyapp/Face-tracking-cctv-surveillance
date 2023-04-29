import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import FaceRecognition from "./Components/faceRecognition";
// import "./Home.css";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/face" exact element={<FaceRecognition />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
