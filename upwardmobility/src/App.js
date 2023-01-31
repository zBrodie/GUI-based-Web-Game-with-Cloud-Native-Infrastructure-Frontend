import './LoginAndSignupPage.css';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import { useNavigate} from "react-router-dom";
import logo from './Upward_Mobility_big_x.png'

function App() {
  return (
    <div className="App">
      <div id="Web_1920__2">
        <img id="sayonara4now-cyberpunk-city-sc" src="sayonara4now-cyberpunk-city-sc.png"
             srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

          <svg className="Ellipse_1">
            <ellipse id="Ellipse_1" rx="42" ry="47" cx="42" cy="47">
            </ellipse>
          </svg>
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

          <div id="Dont_have_an_account__Click_He">
            <a href="javascript:alert('Hello World!');">Dont have an account?<br/><br/>Click Here</a>
          </div>
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
        <script>
          var audio = new Audio('');
          audio.play;
        </script>
      </div>
    </div>
  );
}

export default App;
