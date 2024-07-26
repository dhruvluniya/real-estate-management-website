import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
    }
},{
    timestamps:true
})

export const UserSchema = mongoose.model("UserSchema",userSchema);