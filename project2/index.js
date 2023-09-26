const express= require("express");
const app=express();


app.get("/",(req,res)=>res.send("Hello world from project2."));


app.listen(3002,()=>console.log("project2 is running"))
