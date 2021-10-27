const express = require('express')
const router = express.Router();

module.exports.errorHandler=(err,req,res,next)=>{
    if(err){
        res.status(err.error).send(err.text);
    }
    next();
}