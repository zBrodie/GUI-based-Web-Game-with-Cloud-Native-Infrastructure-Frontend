import './GameLobbyStylesheet.css'
import logo from './Upward_Mobility_big_x.png'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'
import HomePage from "./HomePage";

function GameLobby(){
    const navigate = useNavigate();

    const renderGamePage = () =>{
        navigate("/GamePage")
    }

    return(
        <div className={"GameLobby"}>
            <div className="sideMenuLobby">
                <rect id="Rectangle_30" rx="0" ry="0" x="0" y="0">
                </rect>
                <p id="MaxPlayerText">MAX PLAYERS:</p>
                <input className={"GameLobby"} type="text" placeholder="6"/>
                <p id="RoundTime">Round Time: </p>
                <input className={"GameLobby"} type="text" id="roundInput" placeholder="25sec"/>
                <button className={"GameLobby"}  onClick={renderGamePage} type="submit" text="Start">Start</button>
            </div>

            <img id="Upward_Mobility_big_Lobby" src="Upward_Mobility_big.png" srcSet="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x"/>

            <div className="nonsideMenuLobby">
                <rect id="Rectangle_51" rx="0" ry="0" x="0" y="0">
                </rect>
                <svg className="Rectangle_52">
                    <rect id="Rectangle_52" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>

                <svg className="Rectangle_53">
                    <rect id="Rectangle_53" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Rectangle_54">
                    <rect id="Rectangle_54" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Rectangle_55">
                    <rect id="Rectangle_55" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Rectangle_56">
                    <rect id="Rectangle_56" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Rectangle_57">
                    <rect id="Rectangle_57" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
            </div>
        </div>
    );
}

export default GameLobby;