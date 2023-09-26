const express= require("express");
const app=express();


app.get("/",(req,res)=>res.send("Hello world from project3."));


app.listen(3003,()=>console.log("project3 is running"))
