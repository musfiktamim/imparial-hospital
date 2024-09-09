import mongoose from "mongoose";


const HospitalreviewSchema = mongoose.Schema({
    startsCount:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    review:{
        type:String,
        required:true
    }
})

const Hospitalreview = mongoose.model("Hospitalreview",HospitalreviewSchema);

export default Hospitalreview