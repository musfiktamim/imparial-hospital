import mongoose from "mongoose";

const deshboardSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Deshboard = mongoose.model("Deshboard",deshboardSchema)

export default Deshboard