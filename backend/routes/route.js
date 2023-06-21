const express = require("express");
const saveSentEmail=require("../controller/email-controller.js")

const routes=express.Router();


routes.post('/save',saveSentEmail);


module.exports=routes;