import './SignUpPage.css';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import { useNavigate} from "react-router-dom";
import logo from './Upward_Mobility_big_x.png'
import upwardz from './Upward_Mobility_big_z.png'

function SignupPage() {
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
                    <svg className="Username_Input_Field">
                        <input type="text"
                               placeholder="USERNAME"
                               id="Rectangle_38" rx="0" ry="0" x="0" y="0">
                        </input>
                    </svg>
                    <svg className="Email_Input_Field">
                        <input type="text"
                               placeholder="EMAIL"
                               id="Rectangle_39" rx="0" ry="0" x="0" y="0">
                        </input>
                    </svg>
                    <svg className="Password_Input_Field">
                        <input type="text"
                               placeholder="PASSWORD"
                               id="Rectangle_40" rx="0" ry="0" x="0" y="0">
                        </input>
                    </svg>
                    <svg className="Repeat_Input_Field">
                        <input type="text"
                               placeholder="REPEAT PASSWORD"
                               id="Rectangle_41" rx="0" ry="0" x="0" y="0">
                        </input>
                    </svg>
                    <div id="Already_have_an_account___Clic">
                        <a href="">Already have an account? <br/><br/>Click here</a>
                    </div>
                    <img id="Upward_Mobility_big" src="{upward}"
                         srcSet="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x"/>

                        <img id="Upward_Mobility_big_z" src="{upwardz}"
                             srcSet="Upward_Mobility_big_z.png 1x, src/Templates/Upward_Mobility_big_z@2x.png 2x"/>
            </div>
        </div>
    );
}

export default SignupPage;
