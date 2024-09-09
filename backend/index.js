import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import router from "./Route/index.route.js";
import connectdb from "./confiq/db.connect.js";

dotenv.config()

const app = express();
const port = process.env.PORT  || 8000;
const MONGO_URL = process.env.MONGO_URL;

connectdb(MONGO_URL);''

app.use(cors({
    origin:"*",
    methods:["GET","POST"]
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("./public"))


app.use(router)

app.get("/",(req,res)=>{
    res.send({"hello":process.pid})
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})


export default app;