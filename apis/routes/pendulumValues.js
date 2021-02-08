const express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
    /*
    if ("mass" in req.query || "length" in req.query){
        if(req.app.pendulum.left){
            updateNeighborLeft(req.app.pendulum.left.id);
        }
        if(req.app.pendulum.right){
            updateNeighborRight(req.app.pendulum.right.id);
        }
    }*/


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
    //res.status(201);
    // if ("id" in req.query){
    //     if([1, 2, 3, 4, 5].includes(req.query.id)){
    //         req.app.pendulum.id=req.query.id;
    //     }
    //     else{
    //         res.status(400).json({message:"ID not valid."});
    //     }
    // }
    if ("mass" in req.query){
        if(req.query.mass <= req.app.pendulum.maxMass && req.query.mass >= req.app.pendulum.minMass){
            if(req.query.mass!=req.app.pendulum.left.mass && req.query.mass!=req.app.pendulum.right.mass){
                req.app.pendulum.mass=req.query.mass;
            }
            else{
                res.status(400).json({message:"Mass equal to neighbor."});
            }
        }
        else{
            res.status(400).json({message:"Mass outside limits."});
        }
    }
    if ("length" in req.query){
        if(req.query.length <= req.app.pendulum.maxLength && req.query.length >= req.app.pendulum.minLength){
            if(req.query.length!=req.app.pendulum.left.length && req.query.length!=req.app.pendulum.right.length){
                req.app.pendulum.length=req.query.length;
            }
            else{
                res.status(400).json({message:"Length equal to neighbor."});
            }
        }
        else{
            res.status(400).json({message:"Length outside limits."});
        }
    }
    if ("theta" in req.query){
        if(req.query.theta <= req.app.pendulum.maxTheta && req.query.theta >= req.app.pendulum.minTheta){
            req.app.pendulum.theta=req.query.theta;
        }
        else{
            res.status(400).json({message:"Theta outside limits."});
        }
    }
    if ("b" in req.query){
        if(req.query.b <= req.app.pendulum.maxB && req.query.b >= req.app.pendulum.minB){
            req.app.pendulum.b=req.query.b;
        }
        else{
            res.status(400).json({message:"Damping factor outside limits."});
        }
    }
    res.status(201).json({message:"success"});
});

module.exports = router;