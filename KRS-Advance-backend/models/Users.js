const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    Image:String,
    email:{type:String,required:true,unique:true},
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,

    },
    dob:{
        type: Date,
        required:true,
    }
}

)

const user = new mongoose.model("User", userSchema)

module.exports = user ;