const router=require("express").Router();
const User=require("../models/User");

const bcrypt=require("bcrypt");
//create user
router.post("/register",async(req,res)=>
{
//save user and respojn
try{
  const salt=await bcrypt.genSalt(10);
  const hashedPassword=await bcrypt.hash(req.body.Password, salt);
  const newUser= new User({
    Username:req.body.Username,
    Email:req.body.Email,
    Password:hashedPassword,

  });

  const user=await newUser.save();
  console.log("smriti");
  res.status(200).json(user);
}
catch(err)
{
  console.log(err);
}
  

});

//login
router.post("/login",async(req,res)=>
{
  try{
  const user=await User.findOne({email:req.body.email});
  !user && res.status(404).json("user not found");

  const validPassword=await bcrypt.compare(req.body.password, user.password)
  !validPassword&& res.status(400).json("wrong password");
  
  res.json({
    username:user.username,
    
    
  });
}catch(err){
  console.log(err);
}
});


module.exports=router;
