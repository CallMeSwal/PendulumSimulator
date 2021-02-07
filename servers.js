//launches 5 pendulum instances and main UI sever
const exec = require('child_process').exec;

//launch ui
const ui = exec('nodemon ./services/launchFrontEnd.js');
ui.stdout.on('data', function (data) {
    console.log('ui - data: ' + data);
});
ui.on('error', function(err) {
    console.log('ui - error: ' + err);
});

//launch pendulum servers as child processes
const pendulumServer1 = exec('nodemon ./services/launchPendulumServer.js 8111 1 1 1 0.75');
pendulumServer1.stdout.on('data', function (data) {
    //console.log('pendulumServer1 - data: ' + data);
});
pendulumServer1.on('error', function(err) {
    //console.log('pendulumServer1 - error: ' + err);
});

const pendulumServer2 = exec('nodemon ./services/launchPendulumServer.js 8112 2 1 1 0.75');
pendulumServer2.stdout.on('data', function (data) {
    //console.log('pendulumServer2 - data: ' + data);
});
pendulumServer2.on('error', function(err) {
    //console.log('pendulumServer2 - error: ' + err);
});

const pendulumServer3 = exec('nodemon ./services/launchPendulumServer.js 8113 1 1 1 0.75');
pendulumServer3.stdout.on('data', function (data) {
    //console.log('pendulumServer3 - data: ' + data);
});
pendulumServer3.on('error', function(err) {
    //console.log('pendulumServer3 - error: ' + err);
});

const pendulumServer4 = exec('nodemon ./services/launchPendulumServer.js 8114 2 1 1 0.75');
pendulumServer4.stdout.on('data', function (data) {
    //console.log('pendulumServer4 - data: ' + data);
});
pendulumServer4.on('error', function(err) {
    //console.log('pendulumServer4 - error: ' + err);
});

const pendulumServer5 = exec('nodemon ./services/launchPendulumServer.js 8115 2 1 1 0.75');
pendulumServer5.stdout.on('data', function (data) {
    //console.log('pendulumServer5 - data: ' + data);
});
pendulumServer5.on('error', function(err) {
    //console.log('pendulumServer5 - error: ' + err);
});