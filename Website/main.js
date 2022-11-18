const express = require("express");
const path = require("path");

const app = express();

app.get("/*", (req, res) => {
        res.sendFile( __dirname+"/Templates/homePage.html");
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
