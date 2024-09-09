import Hospitalreview from "../model/Review.model.js"
// import {} from "validator";

class DoctorController{
    static PostReview = async (req,res)=>{
        const {phone,review,star} = req.body
        
        if(phone&&review&&star){
            const reviewNumFind =await Hospitalreview.findOne({phone:phone});
            if(!reviewNumFind){
                const savedReviews = Hospitalreview({
                    phone:phone,
                    startsCount:star,
                    review:review
                })
                const savedRes = await savedReviews.save();
                res.send({"success":true,"message":"sucessfully saved","savedRes":savedRes})
            }else{
                res.send({"success":false,"message":"number already exist"})
            }
        }else{
            res.send({"success":false,"message":"star and review missing"})
        }
        
    }

    static GetReview = async (req,res) => {
        const {page1} = req.body;
        const limit = 10;
        const skip = page1&limit;
        const reviews = await Hospitalreview.find().skip(skip).limit(limit);
        return res.send(reviews);
    }

    
}
export default DoctorController