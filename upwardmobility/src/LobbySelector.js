import './LobbySelector.css'
import React from 'react'
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'
import {useContext, useRef, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

function LobbySelector(){


    return(
        <div className="LobbySelectorMain">
            <div className="LobbyList">

            </div>
            <button className="backLobbyButton">Back</button>
        </div>
    )
}

export default LobbySelector