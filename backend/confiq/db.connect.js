import mongoose from "mongoose";

const connectdb = (url) =>{
    mongoose.connect(url).then(e=>console.log("db is connected")).catch(e=>console.log(e.message));
}

export default  connectdb