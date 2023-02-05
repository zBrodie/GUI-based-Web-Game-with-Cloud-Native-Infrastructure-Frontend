import './LoginAndSignupPage.css';
import song from './SuperMarioGalaxyWindGarden.mp3';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import logo from './Upward_Mobility_big_x.png'
import SignupPage from './SignupPage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const createAccountPage = () => {
        navigate("/Login")
    }

    return (
        <div className="App">
            <div id="Web_1920__2">
                <img id="sayonara4now-cyberpunk-city-sc" src="sayonara4now-cyberpunk-city-sc.png"
                     srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                <svg className="Rectangle_30">
                    <rect id="Rectangle_30" rx="0" ry="0" x="0" y="0">
                    </rect>
                </svg>
                <svg className="Rectangle_34">
                    <rect id="Rectangle_34" rx="0" ry="0" x="0" y="0" width="1" height="1">
                    </rect>
                </svg>
                <div id="Please_Log_In">
                    <span>Please Log In:</span>
                </div>
                <svg className="Username_Input_Field">
                    <input type="text"
                           placeholder="USERNAME"
                           id="Username_Input_Field" rx="0" ry="0" x="0" y="0">
                    </input>
                </svg>
                <svg className="Password_Input_Field">
                    <input type="text"
                           placeholder="PASSWORD"
                           id="Password_Input_Field" rx="0" ry="0" x="0" y="0">
                    </input>
                </svg>

                <button id="Dont_have_an_account__Click_He" onClick={createAccountPage}>
                    <a href="">Dont have an account?<br/><br/>Click Here</a>
                </button>

                <div id="Forgot_Password">
                    <a href="">Forgot Password?</a>
                </div>
                <img id="Upward_Mobility_big" src="{upward}"
                     srcSet="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x"/>

                <img id="Upward_Mobility_big_x" src="{logo}"
                     srcSet="Upward_Mobility_big_x.png 1x, Upward_Mobility_big_x@2x.png 2x"/>

                <svg className="Login_Button">
                    <button id="Login_Button" rx="0" ry="0" x="0" y="0">
                    </button>
                </svg>
            </div>
        </div>
    );
}



export default Login;
