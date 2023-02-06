import './App.css'
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'
import Login from "./Login";

function HomePage(){
    const navigate = useNavigate();

    const renderGamePage = () =>{
        navigate("/GamePage")
    }


    function renderNothingYet(){
        alert("SORRY! NOTHING IS THERE YET!")
    }

    return(
        <div className="HomePage">
            <div className= "nonsideMenu" name = "nonSideMenu">
                <img id="sayonara4now-cyberpunk-city-sc" src={background} srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                <div className="joinGameButton">
                    <button className="joinGameButton" onClick={renderGamePage} type="submit" id="joinGameButton" rx="0" ry="0" x="0" y="0">JOIN GAME
                    </button>
                </div>

                <div className="createGameButton">
                    <button className="createGameButton" type="submit" id="createGameButton" rx="0" ry="0" x="0" y="0" >CREATE
                        GAME
                    </button>
                </div>

                <svg className="Ellipse_1">
                    <ellipse id="Ellipse_1" rx="42" ry="47" cx="42" cy="47">
                    </ellipse>
                </svg>

                <img className={"Upward_Mobility_big_Home_Page"} id="Upward_Mobility_big_Home_Page" src={logo}/>
            </div>

            <div className="sideMenu">
                <rect id="sideMenu">
                </rect>

                <img id="unknown" src={unknown} srcSet="unknown.png 1x, unknown@2x.png 2x"/>

                <div id="accountName">
                    <span>THELEGNED27</span>
                </div>

                <div className="statsButton">
                    <button id="statsButton" rx="0" ry="0" x="0" y="0" onClick={renderNothingYet}>STATS</button>
                </div>

                <div className="achievementsButton">
                    <button id="achievementsButton"  onClick={renderNothingYet} rx="0" ry="0" x="0" y="0">ACHIEVEMENTS
                    </button>
                </div>

                <div className="settingsButton">
                    <button id="settingsButton"  onClick={renderNothingYet} rx="0" ry="0" x="0" y="0">SETTINGS</button>
                </div>
            </div>
        </div>
    );
}
export default HomePage;