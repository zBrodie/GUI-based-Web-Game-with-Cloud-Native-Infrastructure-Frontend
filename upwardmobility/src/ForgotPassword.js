import React from "react";
import './LoginAndSignupPage.css'
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'
import {useContext, useRef, useState} from "react";

import {CognitoUser} from "amazon-cognito-identity-js";
import UserPool from "./UserPool";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'

function ForgotPassword(){

    const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
    const [forgotEmail, setForgotEmail] =         useState("")
    const [clickedSendCode, setClickedSendCode] = useState(true)

    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassButton, setShowNewPassButton] = useState(false)

    const getUser = () =>{
        return new CognitoUser({
            Username: forgotEmail.toLowerCase(),
            Pool: UserPool
        })
    }

   function sendCode(){
        console.log("Hits")

        setClickedSendCode(false)
       setShowNewPassButton(true)

        getUser().forgotPassword({
            onSuccess: data => {
                console.log("onSuccess: ", data);
            },
            onFailure: err => {
                console.log("onFailure: ", err);
            },
            inputVerificationCode: data =>{
                console.log("Input Code ", data);
                setStage(2);
            }
        })

    }

    function resetPassword(){
        if (password !== confirmPassword) {
            console.error("Passwords are not the same");
            return;
        }

        getUser().confirmPassword(code, password, {
            onSuccess: data => {
                console.log("onSuccess:", data);
            },
            onFailure: err => {
                console.error("onFailure:", err);
            }
        });
    }

    return(
        <div className="App">
            <div id = "Web_1920__2">
                    <img id="sayonara4now-cyberpunk-city-sc" src="sayonara4now-cyberpunk-city-sc.png"
                         srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                    <svg className="LSideBarBackground">
                        <rect id="LSideBarBackground" rx="0" ry="0" x="0" y="0">
                        </rect>
                    </svg>

                    <div  id="Please_Log_In">
                        <span id = "EnterEmailLable">Enter Account Email:</span>
                    </div>
                {stage === 1 && (
                    <form>
                        <input onChange={(event => setForgotEmail(event.target.value))} className= "Username_Input_Field_Login" type = "text" placeholder={"EMAIL"}/>
                        <button type="button" onClick={sendCode} className={clickedSendCode? "sendCodeButton" : null}>Send Code</button>
                    </form>
                )}

                {stage === 2 && (
                    <form>
                        <input onChange={(event => setCode(event.target.value))} className= "Username_Input_Field_Login" type = "text" placeholder={"CODE"}/>
                        <input onChange={(event => setPassword(event.target.value))} className= "Password_Input_Field" type = "password" placeholder={"NEW PASSWORD"}/>
                        <input onChange={(event => setConfirmPassword(event.target.value))} className= "forgotConfirmPassField" type = "password" placeholder={"CONFIRM PASSWORD"}/>
                        <button type="button" onClick={resetPassword} className={showNewPassButton? "confirmNewPasword" : null}>Reset</button>
                    </form>
                )}


                    <img className="Upward_Mobility_big" id="Upward_Mobility_big" src="{upward}" srcSet="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x"/>

                    <img  className="Upward_Mobility_big" id="Upward_Mobility_big_x" src="{logo}" srcSet="Upward_Mobility_big_x.png 1x, Upward_Mobility_big_x@2x.png 2x"/>
            </div>
        </div>
    )
}

export default ForgotPassword