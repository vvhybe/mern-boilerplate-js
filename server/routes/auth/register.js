const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

const registerRoute = (req, res)=>{
    try{
        // code here
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
}

module.exports = registerRoute;
