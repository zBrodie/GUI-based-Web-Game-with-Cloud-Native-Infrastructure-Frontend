import logo from './logo.svg';
import './App.css';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import { useNavigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id = "HomePage">
        <img id= "sayonara4now-cyberpunk-city-sc_k" src="{background}" srcset="sayonara4now-cyberpunk-city-sc_k.png 1x, sayonara4now-cyberpunk-city-sc_k@2x.png 2x"/>
        <div className="joinGameButton">
          <button name="" type="submit" id="joinGameButton" rx="0" ry="0" x="0" y="0" width="264" height="83">JOIN
            GAME
          </button>
        </div>

        <div className="createGameButton">
          <button type="submit" id="createGameButton" rx="0" ry="0" x="0" y="0" width="264" height="83">CREATE GAME
          </button>
        </div>

        <svg className="Ellipse_1">
          <ellipse id="Ellipse_1" rx="42" ry="47" cx="42" cy="47">
          </ellipse>
        </svg>

        <img id ="Upward_Mobility_big" src="{upward}" srcset="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x" />
      </div>

      <div className="sideMenu">
        <rect className="sideMenu"></rect>
        <img id="unknown" src="{unknown}" srcset="unknown.png 1x, unknown@2x.png 2x"  />
        <div id="accountName">
          <span>THELEGEND27</span>
        </div>

        <div className="statsButton">
          <button id="statsButton" rx="0" ry="0" x="0" y="0" width="260" height="62">STATS</button>
        </div>

        <div className="achievementsButton">
          <button id="achievementsButton" rx="0" ry="0" x="0" y="0" width="260" height="62" top="376">ACHIEVEMENTS
          </button>
        </div>

        <div className="settingsButton">
          <button id="settingsButton" rx="0" ry="0" x="0" y="0" width="260" height="62">SETTINGS</button>
        </div>

      </div>

    </div>
  );
}

export default App;
