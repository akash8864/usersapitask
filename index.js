const express=require("express");
require("./models/user")
const user=require('./models/userdata')
console.log(user)
port=3000
const app=express();
app.use(express.json())
app.post("/user",(req,res)=>{
    // console.log(req)
   const username=new user(req.body)
   username.save()
   res.send(username)
})
app.listen(port,()=>{console.log("you are on port :- "+port)})