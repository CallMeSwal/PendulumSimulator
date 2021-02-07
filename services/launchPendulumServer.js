const http = require('http');
const express = require("express");

const PendulumServer = require('./pendulumServer');

let port = process.argv[2];
let id = process.argv[3];
let mass = process.argv[4];
let length = process.argv[5];
let theta = process.argv[6];

http.createServer(new PendulumServer(id, mass, length, theta)).listen(port);