const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/userapi",{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("success")}).catch((e)=>{console.log("please retry")}) 