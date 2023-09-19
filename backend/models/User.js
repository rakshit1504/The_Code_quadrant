const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
  Username:{
    type:String,
    require:true,
    min:3,
    max:20,
    unique:true
  },
  Email:
  {
    type:String,
    required:true,
    max:50,
    unique:true,
  },
  Password:{
    type:String,
    required:true,
    min:6
  },
  
  
  
},

);

module.exports=mongoose.model("user",UserSchema);
