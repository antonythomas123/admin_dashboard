import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Trucks from "./Pages/Trucks/Trucks";

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route path = '/trucks' element = {<Trucks/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
