import './App.css';
import React from "react";
import MovingBackground from './LandingPage/Background';
import LoginModal from './LandingPage/LoginModal';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <MovingBackground/>
      <LoginModal/>
      
    </div>
  );
}

export default App;
