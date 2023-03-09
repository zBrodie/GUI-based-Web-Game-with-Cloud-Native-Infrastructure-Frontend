import React, { createContext } from "react";
import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js";
import UserPool from "./UserPool";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'

const AccountContext = createContext();


const Account = (props) => {

    const getSession = async () =>{
        return await new Promise((resolve,reject) =>{
            const user = UserPool.getCurrentUser()
            if (user){
                user.getSession((err, session) =>{
                    if(err){
                        reject()
                    }
                    else{
                        resolve(session)
                    }
                })
            }
            else{
                reject()
            }
        })
    }

    const navigate = useNavigate();
    const loadHomePage = () =>{
        navigate("/HomePage")
    }

    const logout = () =>{
        const user = UserPool.getCurrentUser();
        if(user){
            user.signOut()
        }
    }

    const authenticate = async (Username, Password) => {



        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username: Username,
                Pool: UserPool
            })

            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("onSuccess: ", data)
                    resolve(data)
                    loadHomePage()
                },
                onFailure: (err) =>{
                    console.log("onFailure: ", err)
                    reject(err)
                },
                newPasswordRequired: (data) =>{
                    console.log("new password required: ", data)
                }
            })
        })
    }
    return(
        <AccountContext.Provider value = {{authenticate, getSession, logout}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export {Account, AccountContext};
