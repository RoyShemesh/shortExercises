const express = require('express')
const router = express.Router();
const fsPromises=require('fs').promises;

module.exports.playerHandler=(req,res,next)=>{
    if(req.headers.id){
        req.id=id;
        next();
    }
    else{
        let player={
            firstName:req.headers.firstname,
            lastName:req.headers.lastname,
            salary:req.headers.salary,
            age:req.headers.age,
            overall:req.headers.overall,
            }
        if(req.headers.position==undefined)
        {
            player.strongHand=req.headers.stronghand;
            player.lastGoalConceded=req.headers.lastgoalconceded||Date.now();
            req.gk=player;
        }
        else
        {
            player.strongLeg=req.headers.strongleg;
            player.position=req.headers.position;
            player.celebrationSentence=req.headers.clebrationsentence;
            req.player=player;
        }
        for (const key in player) {
            if(player[key]==undefined)
            {
                throw{error:400,text:"Not all information required given"}
            }
        }
        next();
    }
}