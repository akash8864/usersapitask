const express=require("express");
const userdata = require("./models/userdata");
require("./models/user")
const User=require('./models/userdata')
port=3000

const app=express();
app.use(express.json())
app.post("/user",(req,res)=>{
   const user=new userdata(req.body)
   user.save();
})
app.listen(port,()=>{console.log("you are on port :- "+port)})