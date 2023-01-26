
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
        res.sendFile( __dirname+"/Templates/index.html");
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
