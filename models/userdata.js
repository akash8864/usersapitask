const validator=require("validator")
const mongoose=require("mongoose") 

const userdata=new mongoose.Schema({
    username:
    {
       firstname:
       {
           type:String

       },
       middlename:
       {
           type:String
           
       },
       lastname:
       {
           type:String
           
       }
       
    },
    DOB:
    {
        type:String
    },
    email:
    {
        type:String,
        unique:true,
        required:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
              throw new Error("your entered email is invalid")  
            }
        }
    },
    mob:
    {
        type:Number,
        max:10

    },
    occupation:
    {
        type:String
    }

})
const user= new mongoose.model('Users-api',userdata)
module.exports=userdata