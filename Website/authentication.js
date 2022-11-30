const express = require("express");
const path = require("path");



document.getElementById("confirmLogin").addEventListener('submit',confirmLogin)
function confirmLogin(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username === 'admin' && password ==='1234' ){
        window.location.assign("google.com")
    }

}