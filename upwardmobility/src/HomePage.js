import './App.css'
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'
import {useContext, useRef, useState} from "react";
import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js";


import {AccountContext} from "./Account.js"
import Status from "./Status";

import UserPool from "./UserPool";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'
import Login from "./Login";

function HomePage(){
   const currUser = UserPool.getCurrentUser().getUsername()


    const navigate = useNavigate();

    const [status, setStatus] = useState(false)
    const {getSession} = useContext(AccountContext)

    const renderGamePage = () =>{
        navigate("/GamePage")
    }

    const renderGameLobby = () =>{
        navigate("/GameLobby")
    }

    const renderLoginPage = ()=>{
        navigate("/")
    }

    const renderLobbySelect = () =>{
        navigate("/LobbySelect")
    }



    const [clickedJoin, setClickedJoin] = useState(true);
    const [clickedCreate, setClickedCreate] = useState(true);

    // Join Game
    const [showGIDText, setShowGameIDText] = useState(false)
    const [showJoinGameButton, setShowJoinGameButton] = useState(false)
    const [showJoinGameBackButton, setJoinGameBackButton] = useState(false)

    // Settings
    const [clickedSettings, setClickedSettings] = useState(true);
    const [showSettingsBackButton, setSettingsBackButton] = useState(false);
    const [showSignoutButton, setSignoutButton] = useState(false);

    // Stats
    const [clickedStats, setClickedStats] = useState(true);
    const [showStatsBackButton, setStatsBackButton] = useState(false);
    const [showStat1, setStat1] = useState(false);
    const [showStat2, setStat2] = useState(false);
    const [showStat3, setStat3] = useState(false);

    // Achievements
    const [clickedAch, setClickedAch] = useState(true);
    const [showAchBackButton, setAchBackButton] = useState(false)
    const [showNothingText, setShowNothingText] = useState(false)

    const joinGame = useRef(null);
    const createGame = useRef(null);
    const statsButton = useRef(null);
    const achievementsButton = useRef(null);
    const settingsButton = useRef(null);

    // Click join game button method
    function setGameIDBox(){
        setShowGameIDText(!showGIDText);
        setShowJoinGameButton(!showJoinGameButton);
        setClickedSettings(!clickedSettings);
        setClickedAch(!clickedAch);
        setClickedStats(!clickedStats);
        setJoinGameBackButton(!showJoinGameBackButton);
        setClickedJoin(!clickedJoin);
        setClickedCreate(!clickedCreate);
    }

    // Click achievements button method
    function renderAchievements(){
        setShowNothingText(!showNothingText);
        setClickedSettings(!clickedSettings);
        setClickedAch(!clickedAch);
        setClickedStats(!clickedStats);
        setAchBackButton(!showAchBackButton);
        setClickedJoin(!clickedJoin);
        setClickedCreate(!clickedCreate);
    }

    // Click settings button Method
    function renderSettings(){
        setClickedJoin(!clickedJoin);
        setClickedCreate(!clickedCreate);
        setClickedSettings(!clickedSettings);
        setClickedAch(!clickedAch);
        setClickedStats(!clickedStats);
        setSettingsBackButton(!showSettingsBackButton);
        setSignoutButton(!showSignoutButton);
    }

    // Click stats button method
    function renderStats(){
        setClickedJoin(!clickedJoin);
        setClickedCreate(!clickedCreate);
        setClickedStats(!clickedStats);
        setClickedSettings(!clickedSettings);
        setClickedAch(!clickedAch);
        setStatsBackButton(!showStatsBackButton);
        setStat1(!showStat1);
        setStat2(!showStat2);
        setStat3(!showStat3);
    }

    // Clicking join after entering a game code
    function launchJoinGame(){
        let submittedGameID = document.getElementById("gameIDTextBoxHome").value
        console.log(submittedGameID);
        renderGamePage()
    }

    function clickedLogout(){
        const user = UserPool.getCurrentUser();
        if(user){
            user.signOut()
        }
        renderLoginPage()
    }

    return(
        <div className="HomePage">
            <div className= "nonsideMenuHome" name = "nonSideMenuHome">
                <img id="sayonara4now-cyberpunk-city-sc" src={background} srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                <div className={clickedJoin ? "joinGameButtonHome" : null} >
                    <button  ref = {joinGame}  className={clickedJoin ? "joinGameButtonHome" : null} onClick={renderLobbySelect} type="submit" id="joinGameButtonHome" rx="0" ry="0" x="0" y="0">JOIN GAME
                    </button>
                </div>

                <div className={clickedCreate ? "createGameButtonHome" : null}>
                    <button ref = {createGame} className={clickedCreate ? "createGameButtonHome" : null}  onClick={renderGameLobby} type="submit" id="createGameButtonHome" rx="0" ry="0" x="0" y="0" >CREATE
                        GAME
                    </button>
                </div>

                <svg className="Ellipse_1">
                    <ellipse id="Ellipse_1" rx="42" ry="47" cx="42" cy="47">
                    </ellipse>
                </svg>

                <img className={"Upward_Mobility_big_Home_Page"} id="Upward_Mobility_big_Home_Page" src={logo}/>
            </div>

            {/*Everything for side menu*/}
            <div className="sideMenuHome">
                <rect className={"sideMenuHome"} id="sideMenuHome">
                </rect>

                <img id="unknown" src={unknown} srcSet="unknown.png 1x, unknown@2x.png 2x"/>

                <div id="accountName">
                    <span id ="accountName" dangerouslySetInnerHTML={{ __html: currUser}}  ></span>
                </div>

                {/*Everything for join game tab*/}
                <input className={showGIDText? "gameIDTextBoxHome" : null} id = "gameIDTextBoxHome" placeholder={"Enter Game ID!"} type = "text"/>
                <button className = {showJoinGameButton? "gameIDJoinButton" : null} type = "submit" id = "gameIDJoingButton" onClick = {launchJoinGame} >JOIN!</button>
                <button className = {showJoinGameBackButton? "joinGameBackButton" : null} type="back" id="joinGameBackButton" onClick={setGameIDBox} > BACK</button>

                {/*Everything for the achievements tab*/}
                <div className={ clickedAch?  "achievementsButtonHome" : null}>
                    <button ref = {achievementsButton} className={ clickedAch?  "achievementsButtonHome" : null} id="achievementsButtonHome"  onClick={renderAchievements} rx="0" ry="0" x="0" y="0">ACHIEVEMENTS</button>
                </div>
                <button className = {showAchBackButton? "achievementsBackButton" : null} type="back" id="achievementsBackButton" onClick={renderAchievements} > BACK</button>
                <div id = "nothingText" className = {showNothingText? "nothingText" : null}>SORRY! THERE IS NOTHING HERE YET :,(</div>

                {/*Everything for the settings tab*/}
                <div className={ clickedSettings? "settingsButtonHome" : null}>
                    <button ref = {settingsButton} className={ clickedSettings? "settingsButtonHome" : null} id="settingsButtonHome" onClick={renderSettings} rx="0" ry="0" x="0" y="0">SETTINGS</button>
                </div>
                <button className = {showSettingsBackButton? "settingsBackButton" : null} type="back" id="settingsBackButton" onClick={renderSettings} > BACK</button>
                <div >
                    <button className={showSignoutButton? "signOutButton" : null} id="signOutButton" onClick={clickedLogout} > LOG OUT</button>
                </div>

                {/*Everything for the stats tab*/}
                <div className={ clickedStats?  "statsButtonHome" : null}>
                    <button ref = {statsButton} className={ clickedStats?  "statsButtonHome" : null} id="statsButtonHome" rx="0" ry="0" x="0" y="0" onClick={renderStats}>STATS</button>
                </div>
                <button className = {showStatsBackButton? "statsBackButton" : null} type="back" id="statsBackButton" onClick={renderStats} > BACK</button>
                <label className={showStat1? "statsText1" : null} >Number of wins: </label>
                <label className={showStat2? "statsText2" : null}>Number of games played: </label>
                <label className={showStat3? "statsText3" : null}>Number of deaths: </label>

            </div>
        </div>
    );
}
export default HomePage;