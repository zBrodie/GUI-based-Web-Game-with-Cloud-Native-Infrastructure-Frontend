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
                <svg className="Player_1">
                    <rect id="Player_1" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>

                <svg className="Player_2">
                    <rect id="Player_2" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Player_3">
                    <rect id="Player_3" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Player_4">
                    <rect id="Player_4" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Player_5">
                    <rect id="Player_5" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Player_6">
                    <rect id="Player_6" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
            </div>
        </div>
    );
}

export default GameLobby;