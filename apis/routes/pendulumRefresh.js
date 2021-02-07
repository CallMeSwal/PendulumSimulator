const express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const http = require('http');
const exec = require('child_process').exec;
const router = express.Router();


router.get('/', (req, res, next) => {
    for(let i=1; i<=5; i++){
        const http = new XMLHttpRequest();
        http.responseType = 'json';
        http.open("POST", "http://127.0.0.1:811"+i+"/?length=1&mass=1&theta=0.75");
        http.onerror = function () {
            console.log("Not able to access: ", url);
        };
        http.send();
        /*http.onload = () => {
            console.log("hii", http.response);
        };*/
    }
    res.status(200).json({message:"success"});
});

module.exports = router;
