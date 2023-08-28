// 


const mongoose=require("mongoose")
// mongoose.connect("mongodb://0.0.0.0:27017/Hotal-management")
mongoose.connect("mongodb://127.0.0.1:27017/Hotal-Data")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

const userData = mongoose.model("userData",newSchema)

module.exports=userData