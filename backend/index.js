const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");


app.use(express.static('../frontend')); 

dotenv.config();
mongoose.connect(process.env.MONGO_URL

).then(()=> console.log("connected successfully"))
.catch((err)=>{console.error(err);});

app.use(express.json());
app.use("/api/auth",authRoute);
//app.use(helmet());
//app.use(morgon("common"));
/*
app.use("/api/users",userRoute);

app.use("/api/posts",postRoute);
*/
app.listen(8000,function(req,res)
{
  console.log("server is listening on port 8000");
});

