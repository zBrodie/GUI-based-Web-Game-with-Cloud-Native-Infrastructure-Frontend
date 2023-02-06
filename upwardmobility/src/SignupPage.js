import './SignUpPage.css';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import { useNavigate} from "react-router-dom";
import logo from './Upward_Mobility_big_x.png'
import upwardz from './Upward_Mobility_big_z.png'

function SignupPage() {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/")
    }

    return (
        <div className="SignupPage">
            <div id="Web_1920__3">
                <img id="sayonara4now-cyberpunk-city-sc" src="sayonara4now-cyberpunk-city-sc.png"
                     srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                    <svg className="Rectangle_30">
                        <rect id="Rectangle_30" rx="0" ry="0" x="0" y="0" width="305" height="905">
                        </rect>
                    </svg>
                    <svg className="Rectangle_34">
                        <rect id="Rectangle_34" rx="0" ry="0" x="0" y="0" width="1" height="1">
                        </rect>
                    </svg>
                    <div className="Create_your_account__" id="Create_your_account__">
                        <span>Create your account:<br/></span><br/>
                    </div>
                    <form>
                        <input placeholder={"USERNAME"} id = "Rectangle_38" type={"text"} className="Username_Input_Field">
                        </input>
                    </form>

                    <form>
                        <input type={"text"} placeholder={"EMAIL"} id ="Rectangle_39" className="Email_Input_Field">
                        </input>
                    </form>

                    <form>
                        <input type = "text" id= "Rectangle_40"  placeholder={"PASSWORD"} className="Password_Input_Field">
                        </input>
                    </form>

                    <form>
                        <input id = "Rectangle_41" placeholder={"REPEAT PASSWORD"} type = "text" className="Repeat_Input_Field">
                        </input>
                    </form>

                    <button id = "SignUpBotton" className={"Sign_Button"}>SIGN UP</button>
                    <button id="Already_have_an_account___Clic" onClick={loginPage}>
                        <a href="">Already have an account? <br/><br/>Click here</a>
                    </button>
                    <img  className="Upward_Mobility_big" src="{logo}" srcSet="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x"/>

                    <img className="Upward_Mobility_big" id="Upward_Mobility_big_z" src="{logo}" srcSet="Upward_Mobility_big_z.png 1x, src/Templates/Upward_Mobility_big_z@2x.png 2x"/>
            </div>
        </div>
    );
}

export default SignupPage;
