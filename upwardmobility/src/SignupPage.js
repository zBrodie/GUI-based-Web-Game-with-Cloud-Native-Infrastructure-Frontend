import './SignUpPage.css';
import unknown from './unknown@2x.png';
import background from './sayonara4now-cyberpunk-city-sc.png';
import upward from './Upward_Mobility_big.png'
import { useNavigate} from "react-router-dom";
import logo from './Upward_Mobility_big_x.png'
import upwardz from './Upward_Mobility_big_z.png'
import {useState} from "react";
import UserPool from "./UserPool";
import {CognitoUserAttribute} from "amazon-cognito-identity-js";


function SignupPage() {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfPassword] = useState("")

    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/")
    }




    let attributeList = []
    const onSubmit = (event) =>{
        event.preventDefault();

        var dataUserName = {
            Name: 'name',
            Value: username
        }

        var dataUserEmail = {
            Name: 'email',
            Value: email
        }

        var passUserName = new CognitoUserAttribute(dataUserName)
        var passUserEmail = new CognitoUserAttribute(dataUserEmail)
        attributeList.push(passUserName)

        console.log(username)
        if(password.toString() == confirmPassword.toString()){
            UserPool.signUp(email, password, [dataUserName, dataUserEmail], null, (err, data) => {
                if(err){
                    console.error(err);
                }
                console.log(data);
            })
            alert("PLEASE MAKE SURE TO VERIFY YOUR EMAIL!")
            loadHomePage()
        }
        else{
            alert("PASSWORDS DO NOT MATCH!")
        }

    }

    const loadHomePage = () =>{
        navigate("/HomePage")
    }

    const user = UserPool.getCurrentUser()
    if(user){
        console.log("Hits")
        loadHomePage()
    }

    return (
        <div className="SignupPage">
            <div id="Web_1920__3">
                <form onSubmit={onSubmit}>
                    <img id="sayonara4now-cyberpunk-city-sc" src="sayonara4now-cyberpunk-city-sc.png"
                         srcSet="sayonara4now-cyberpunk-city-sc.png 1x, sayonara4now-cyberpunk-city-sc@2x.png 2x"/>

                    <svg className="SPSideBarBackground">
                        <rect id="SPSideBarBackground" rx="0" ry="0" x="0" y="0" width="305" height="905">
                        </rect>
                    </svg>

                    <div className="Create_your_account__" id="Create_your_account__">
                        <span>Create your account:<br/></span><br/>
                    </div>
                    <form>
                        <input value = {username}  onChange={(event => setUserName(event.target.value))} placeholder={"USERNAME"} id = "Rectangle_38" type={"text"} className="Username_Input_Field_Sign">
                        </input>
                    </form>

                    <form>
                        <input value = {email}  onChange={(event => setEmail(event.target.value))}  type={"text"} placeholder={"EMAIL"} id ="Rectangle_39" className="Email_Input_Field">
                        </input>
                    </form>

                    <form>
                        <input value = {password}  onChange={(event => setPassword(event.target.value))} id ="Password_Input_Field_Sign"  type = "password" id= "Rectangle_40"  placeholder={"PASSWORD"} className="Password_Input_Field_Sign">
                        </input>
                    </form>

                    <form>
                        <input value = {confirmPassword}  onChange={(event => setConfPassword(event.target.value))} id = "confirmPassword" placeholder={"REPEAT PASSWORD"} type = "password" className="Repeat_Input_Field">
                        </input>
                    </form>

                    <button type="submit" id = "SignUpBotton" className={"Sign_Button"}>SIGN UP</button>
                    <button id="Already_have_an_account___Clic" onClick={loginPage}>
                        Already have an account? <br/><br/>Click here
                    </button>
                    <img  className="Upward_Mobility_big" src="{logo}" srcSet="Upward_Mobility_big.png 1x, Upward_Mobility_big@2x.png 2x"/>

                    <img className="Upward_Mobility_big" id="Upward_Mobility_big_z" src="{logo}" srcSet="Upward_Mobility_big_z.png 1x, src/Templates/Upward_Mobility_big_z@2x.png 2x"/>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
