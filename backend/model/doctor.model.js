import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    experiance:{
        type:String
    },
    Where:{
        type:String
    },
    day:{
        type:Array,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    end:{
        type:String,
        required:true
    },
    about:{
        type:String,
    },
    concentration:{
        type:Array
    },
    specializations:{
        type:Array,
        required:true
    },
    experiences:{
        type:Array
    },
    education:{
        type:Array,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Docotor = mongoose.model("Doctor",doctorSchema);
export default Docotor