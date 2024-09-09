import jwt from "jsonwebtoken";
import Deshboard from "../model/deshboard.model.js";

import dotenv from "dotenv";

dotenv.config();

const secreteKey = process.env.JSONWEBTOKENDESG;



async function deshauthenticate(req,res,nex){
    try{
        const {authorization} = req.headers
        if(authorization && authorization.startsWith("Bearer")){
            const splitedBearer = authorization.split(" ")[1];
            const {userId} = jwt.verify(splitedBearer,secreteKey);
            if(userId){
                const findUser = await Deshboard.findById(userId).select("-password");
                if(findUser){
                    req.user = findUser;
                    nex()
                }else{
                    res.send({"success":false,"message":"login plz"})
                }
            }else{
                res.send({"success":false,"message":"login plz"})
            }
        }else{
            res.send({"success":false,"message":"login plz"})
        }
    }catch (e) {
        res.send({success:false,"message":e.message})
    }
}

export default deshauthenticate