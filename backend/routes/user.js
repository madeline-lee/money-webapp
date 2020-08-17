const express = require("express");
const connection = require("../database");

UserRouter = express.Router();

UserRouter.get("/", (req,res)=>{
    connection.query('select * from user', 
    (err, rows)=>{
        if (err) {
            console.log(err);
            res.send("Some error occured");
        }
        else{
            res.send(rows);
        }
    })
})

module.exports = UserRouter;