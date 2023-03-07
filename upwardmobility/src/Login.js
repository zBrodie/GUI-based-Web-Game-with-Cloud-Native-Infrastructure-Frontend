import './LoginAndSignupPage.css';
import song from './SuperMarioGalaxyWindGarden.mp3';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'
import SignupPage from './SignupPage'
import {CognitoUserPool, AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js";
import UserPool from "./UserPool";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'
//import userPool from "./UserPool";
import {useState} from "react";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (event) =>{
        event.preventDefault()

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data)
                loadHomePage()
            },
            onFailure: (err) =>{
                console.log("onFailure: ", err)
            },
            newPasswordRequired: (data) =>{
                console.log("new password required: ", data)
            }
        })
    }

    const createAccountPage = () => {
        navigate("/CreateAccount")
    }

    const loadHomePage = () =>{
        navigate("/HomePage")
    }

    return (
        <div className="App">
            <div id="Web_1920__2">
                <form onSubmit={onSubmit}>
                    <img id="sayonara4now-cyberpunk-city-sc" src="sayonara4now-cyberpunk-city-sc.png"
                         srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                    <svg className="LSideBarBackground">
                        <rect id="LSideBarBackground" rx="0" ry="0" x="0" y="0">
                        </rect>
                    </svg>

                    <div id="Please_Log_In">
                        <span>Please Log In:</span>
                    </div>
                    <form>
                        <input value = {email}  onChange={(event => setEmail(event.target.value))} type={"text"} placeholder={"EMAIL"} id ="Username_Input_Field_Login" className="Username_Input_Field_Login"></input>
                    </form>
                    <form>
                        <input value = {password}  onChange={(event => setPassword(event.target.value))} className={"Password_Input_Field"}  type = "password" placeholder={"PASSWORD"} id ="Password_Input_Field_Login"/>
                    </form>

                    <button id="Dont_have_an_account__Click_He" onClick={createAccountPage}>
                        <a></a>
                        Dont have an account?<br/><br/>Click Here
                    </button>

                    <div id="Forgot_Password">
                        <a href="">Forgot Password?</a>
                    </div>
                    <img className="Upward_Mobility_big" id="Upward_Mobility_big" src="{upward}" srcSet="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x"/>

                    <img  className="Upward_Mobility_big" id="Upward_Mobility_big_x" src="{logo}" srcSet="Upward_Mobility_big_x.png 1x, Upward_Mobility_big_x@2x.png 2x"/>

                    <button id={"Login_Button_Submit"} className="Login_Button_Submit" type="submit">LOGIN</button>
                </form>

            </div>
        </div>
    );
}



export default Login;
