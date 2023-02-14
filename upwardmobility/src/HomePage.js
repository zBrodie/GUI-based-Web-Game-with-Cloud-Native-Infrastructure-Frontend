import './App.css'
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'
import {useRef, useState} from "react";

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

    const renderGameLobby = () =>{
        navigate("/GameLobby")
    }

    const [clickedStats, setClickedStats] = useState(true);
    const [clickedAch, setClickedAch] = useState(true);
    const [clickedSettings, setclickedSettings] = useState(true);
    const [clickedJoin, setClickedJoin] = useState(true);
    const [showGIDText, setShowGameIDText] = useState(false)
    const [showJoinGameButton, setShowJoinGameButton] = useState(false)
    const [showNothingText, setShowNothingText] = useState(false)
    const [showJoinGameBackButton, setJoinGameBackButton] = useState(false)
    const [showRenderNothingBackButton, setRenderNothingBackButton] = useState(false)

    const joinGame = useRef(null);
    const statsButton = useRef(null);
    const achievementsButton = useRef(null);
    const settingsButton = useRef(null);

    function setGameIDBox(){
        setShowGameIDText(!showGIDText);
        setShowJoinGameButton(!showJoinGameButton);
        setclickedSettings(!clickedSettings);
        setClickedAch(!clickedAch);
        setClickedStats(!clickedStats);
        setJoinGameBackButton(!showJoinGameBackButton);
    }

    function renderNothingYet(){
        setShowNothingText(!showNothingText);
        setclickedSettings(!clickedSettings);
        setClickedAch(!clickedAch);
        setClickedStats(!clickedStats);
        setRenderNothingBackButton(!showRenderNothingBackButton);
    }


    function launchJoinGame(){
        let submittedGameID = document.getElementById("gameIDTextBoxHome").value
        console.log(submittedGameID);
        renderGamePage()
    }

    return(
        <div className="HomePage">
            <div className= "nonsideMenuHome" name = "nonSideMenuHome">
                <img id="sayonara4now-cyberpunk-city-sc" src={background} srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                <div className={clickedJoin ? "joinGameButtonHome" : null} >
                    <button  ref = {joinGame}  className="joinGameButtonHome" onClick={setGameIDBox} type="submit" id="joinGameButtonHome" rx="0" ry="0" x="0" y="0">JOIN GAME
                    </button>
                </div>

                <div className="createGameButtonHome">
                    <button className="createGameButtonHome"  onClick={renderGameLobby} type="submit" id="createGameButtonHome" rx="0" ry="0" x="0" y="0" >CREATE
                        GAME
                    </button>
                </div>

                <svg className="Ellipse_1">
                    <ellipse id="Ellipse_1" rx="42" ry="47" cx="42" cy="47">
                    </ellipse>
                </svg>

                <img className={"Upward_Mobility_big_Home_Page"} id="Upward_Mobility_big_Home_Page" src={logo}/>
            </div>

            <div className="sideMenuHome">
                <rect className={"sideMenuHome"} id="sideMenuHome">
                </rect>

                <img id="unknown" src={unknown} srcSet="unknown.png 1x, unknown@2x.png 2x"/>

                <div id="accountName">
                    <span>THELEGNED27</span>
                </div>

                <div className={ clickedStats?  "statsButtonHome" : null}>
                    <button ref = {statsButton} className={ clickedStats?  "statsButtonHome" : null} id="statsButtonHome" rx="0" ry="0" x="0" y="0" onClick={renderNothingYet}>STATS</button>
                </div>

                <input className={showGIDText? "gameIDTextBoxHome" : null} id = "gameIDTextBoxHome" placeholder={"Enter Game ID!"} type = "text"/>
                <button className = {showJoinGameButton? "gameIDJoinButton" : null} type = "submit" id = "gameIDJoingButton" onClick = {launchJoinGame} >JOIN!</button>
                <button className = {showJoinGameBackButton? "joinGameBackButton" : null} type="back" id="joinGameBackButton" onClick={setGameIDBox} > BACK</button>

                <div id = "nothingText" className = {showNothingText? "nothingText" : null}>SORRY! THERE IS NOTHING HERE YET :,(</div>
                <button className = {showRenderNothingBackButton? "renderNothingBackButton" : null} type="back" id="renderNothingBackButton" onClick={renderNothingYet} > BACK</button>

                <div className={ clickedAch?  "achievementsButtonHome" : null}>
                    <button ref = {achievementsButton} className={ clickedAch?  "achievementsButtonHome" : null} id="achievementsButtonHome"  onClick={renderNothingYet} rx="0" ry="0" x="0" y="0">ACHIEVEMENTS
                    </button>
                </div>

                <div className={ clickedSettings? "settingsButtonHome" : null}>
                    <button ref = {settingsButton} className={ clickedSettings? "settingsButtonHome" : null} id="settingsButtonHome" onClick={renderNothingYet} rx="0" ry="0" x="0" y="0">SETTINGS</button>
                </div>
            </div>
        </div>
    );
}
export default HomePage;