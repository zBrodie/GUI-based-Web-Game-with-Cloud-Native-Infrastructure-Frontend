//const express = require("express");
//const path = require("path");
import ReactDOM from "react-dom";
import React from "react";

const App = () => {
        return (<h1>This is my React app!</h1>);
}
ReactDOM.render(<App />, document.getElementById("app"));
/*
const app = express();

app.get("/", (req, res) => {
        res.sendFile( __dirname+"/Templates/Login.html");
});
app.get("/Login", (req, res) => {
        res.sendFile( __dirname+"/Templates/Login.html");
});
app.get("/SignUp", (req, res) => {
        res.sendFile( __dirname+"/Templates/SignUp.html");
});
app.get("/home", (req, res) => {
        res.sendFile( __dirname+"/Templates/GameScreen.html");
});


app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
*/