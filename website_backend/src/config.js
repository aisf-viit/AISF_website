const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb://localhost:27017/aisf");

//check database connect or not
connect.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database cannot be connected")
});



//create a schema
const LoginSchema = new mongoose.Schema({
    name:{
         type:String,
         required:true
    },
    email:{
        type:email,
        require:true
    },
    password:{
        type:String,
        required:true
    }
});

//collection part
const user = new mongoose.model("users",LoginSchema);
module.exports= {user};