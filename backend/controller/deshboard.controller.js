import Deshboard from "../model/deshboard.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import Docotor from "../model/doctor.model.js";

dotenv.config();

const sindotkeys = process.env.DESHSIGNINKEY;
const scretekeys = process.env.JSONWEBTOKENDESG;

class DeshboardController{
    static home = async (req,res)=>{
        console.log(req.user)
        res.send(req.user);
    }

    static signin = async(req,res)=>{
        const {username,signkeys,password,email} = req.body;
        const findUser =await Deshboard.findOne({email:email})
        if(username&&signkeys&&password&&email){
            if(!findUser){
                if(sindotkeys==signkeys){

                    const pass = await bcrypt.hash(password,10)
                    const savedUser =await Deshboard({
                        username:username,
                        email:email,
                        password:pass
                    })
                    const pushedUsers = await savedUser.save();
                    const payloads = {
                        userId:pushedUsers._id
                    }

                    const tokenC = jwt.sign(payloads,scretekeys,{expiresIn:"30d"})
                    const token = "Bearer "+ tokenC;
                    res.send({"success":true,"message":"user created","token":token})
                }else{
                    res.send({"success":false,"message":"screate key is not equel"})
                }
            }else{
                res.send({"success":false,"message":"user already exist"})
            }
        }else{
            res.send({"success":false,"message":"plz fill all fields"})
        }
    }

    static login = async (req,res)=>{
        const {email,password} = req.body;
        if(email&&password){
            const findUser = await Deshboard.findOne({email:email});
            if(findUser){
                const isTrue = await bcrypt.compare(password,findUser.password);
                if(isTrue){
                    const payloads = {
                        userId: findUser._id
                    }
                    const  tokenC = jwt.sign(payloads,scretekeys,{expiresIn:"30d"})
                    const token = "Bearer "+ tokenC;
                    res.send({"success":true,"message":"user logedind","token":token})
                }else{
                    res.send({success:false,message:"user and pass not match"})
                }
            }else{
                res.send({success:false,message:"user not found"})
            }
        }else{
            res.send({success:false,message:"plz fill all fields"})
        }
    }

    //end

    static addDoctor = async (req,res)=>{
        try{
            let {FieldofConcentration,Specialization,experiance,WorkExperience,Education,name,bio,stime,etime,about,where,day} = req.body
            const image = req.file;
            const ffc = FieldofConcentration!=""?FieldofConcentration.split(","):null;
            const spz = Specialization!=""?Specialization.split(","):null;
            const wec = WorkExperience != ""?WorkExperience.split(","):null;
            const edn = Education!=""?Education.split(","):null;
            const din = day!=""?day.split(","):null
            if(name&&bio&&stime&&etime&&about&&ffc.length!=0&&spz.length!=0&&edn.length!=0&&din.length!=0){
                const NewDoctor = await Docotor({
                    name:name,
                    bio:bio,
                    experiance:experiance,
                    Where:where,
                    day:din,
                    start:stime,
                    end:etime,
                    about:about,
                    concentration:ffc,
                    specializations: spz,
                    experiences: wec,
                    education: edn,
                    image:image.filename
                })
                const savedReturn = await NewDoctor.save();
                console.log(savedReturn)
                return res.send({"success":true,"message":` new doctor added whos name is ${savedReturn.name}`})

            }else{
                return res.send({"success":false,"message":"something went wrong"})
            }
        }catch(er){
            console.log(er.message)
            return res.send({"success":false,"message":"something went wrong"})
        }
    }
    //end
    static getDoctor = async (req,res)=>{
        // console.log(req.body)
        const {page} = req.body
        const limit = 10;
        const data = await Docotor.find().skip(page*limit).limit(10);
        // console.log(data);
        return res.send({"data_length":data.length,"data":data})
    }
    //end
    static getAllDataInOneSeconds = async (req,res)=>{
        const data = await Docotor.find();
        return res.send(data)
    }
    
}

export default DeshboardController