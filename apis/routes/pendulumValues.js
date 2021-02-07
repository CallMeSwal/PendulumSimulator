const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    var output = {}
    if ("id" in req.query){
        output["id"]=req.app.pendulum.id;
    }
    if ("mass" in req.query){
        output["mass"]=req.app.pendulum.mass;
    }
    if ("length" in req.query){
        output["length"]=req.app.pendulum.length;
    }
    if ("theta" in req.query){
        output["theta"]=req.app.pendulum.theta;
    }
    if ("b" in req.query){
        output["b"]=req.app.pendulum.b;
    }
    if ("x" in req.query){
        output["x"]=req.app.pendulum.x;
    }
    if ("y" in req.query){
        output["y"]=req.app.pendulum.y;
    }

    if (output != {}){
        res.status(200).json(output);
    }
    else{
        output["id"]=req.app.pendulum.id;
        output["mass"]=req.app.pendulum.mass;
        output["length"]=req.app.pendulum.length;
        output["theta"]=req.app.pendulum.theta;
        output["b"]=req.app.pendulum.b;
        output["x"]=req.app.pendulum.x;
        output["y"]=req.app.pendulum.y;
        res.status(200).json(output);
    }
});

router.post('/', (req, res, next) => {
    res.status(201);
    if ("id" in req.query){
        req.app.pendulum.id=req.query.id;
    }
    if ("mass" in req.query){
        req.app.pendulum.mass=req.query.mass;
    }
    if ("length" in req.query){
        req.app.pendulum.length=req.query.length;
    }
    if ("theta" in req.query){
        req.app.pendulum.theta=req.query.theta;
    }
    if ("b" in req.query){
        req.app.pendulum.b=req.query.b;
    }
    res.status(201).json({message:"success"});
});

module.exports = router;