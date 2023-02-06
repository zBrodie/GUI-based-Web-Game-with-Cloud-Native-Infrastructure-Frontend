import './LoginAndSignupPage.css';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'
import { useNavigate } from "react-router-dom";
import Login from './Login'
import SignupPage from './SignupPage'
import HomePage from './HomePage.js'
import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

function App() {


  return (
      <>
        <Router>
          <Routes>
            <Route exact path = "/" element={<Login/>}/>
              <Route exact path="/HomePage" element={<HomePage/>}></Route>
            <Route exact path ="/CreateAccount" element={<SignupPage/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
