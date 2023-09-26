const express= require("express");
const app=express();


app.get("/",(req,res)=>res.send("Hello world from project1."));


app.listen(3001,()=>console.log("project1 is running"))
