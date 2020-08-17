const express = require("express");
const connection = require("../database");

AccountRouter = express.Router();

AccountRouter.get("/", (req,res)=>{
    connection.query('select * from account', 
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

module.exports = AccountRouter;