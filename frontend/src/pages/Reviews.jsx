import { useEffect, useState } from "react"

import ReviewBoxShow from "../elements/ReviewBoxShow";
import ReviewInputBox from "../elements/ReviewInputBox";
import { getReviewsHospital, postReviewsHospital } from "../api/api";
import { toast } from "sonner";

function Reviews() {
    const [review,setRivew] = useState([])
    
    const [retCount,setRetCount] = useState([]);
    const [reviewTextPhone,setReviewTextPhone] = useState({
        reviewtext:"",
        phone:null,
    })


    async function handleSub(e){
        e.preventDefault()
        if(retCount.length!=0&&reviewTextPhone.reviewtext&&reviewTextPhone.phone){
            const res =await postReviewsHospital({phone:reviewTextPhone.phone,review:reviewTextPhone.reviewtext,star:retCount.length})
            if(res.success){
                toast.success(res.message)
                setRivew((prev)=>[res.savedRes,...prev])
                setReviewTextPhone({phone:"",reviewtext:""})
                setRetCount([])
            }else{
                toast.error(res.message)
            }
        }else{
            toast.error("something went wrong")
        }
    }

    function handleChange(e){
        const filterd = retCount.filter((items)=>items.name==e.target.name)
        if(filterd.length==0){
            setRetCount((prev)=>[...prev,{"name":e.target.name,"chacked":e.target.checked}])
        }else{
            const filterdForremove = retCount.filter((items)=>items.name!=e.target.name)
            setRetCount(filterdForremove)
        }
    }

    const inputItem = [
        {
            "name":"1",
            "id":"1"
        },
        {
            "name":"2",
            "id":"2"
        },
        {
            "name":"3",
            "id":"3"
        },
        {
            "name":"4",
            "id":"4"
        },
        {
            "name":"5",
            "id":"5"
        },
        {
            "name":"6",
            "id":"6"
        }
    ]

    function findChecked(name){
        const finding = retCount.find((items)=>items.name==name)
        if(finding){
            return true
        }else{
            return false
        }
    }

    function handleChangeText(e){
        setReviewTextPhone(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    console.log(reviewTextPhone)


    useEffect(()=>{
        (async function(){
            const res = await getReviewsHospital({"page":1});
            setRivew((prev)=>[...prev,...res])
        })()
    },[])
    
  return (
    <div className="md:w-[500px] w-[350px] flex flex-col gap-y-5 h-auto m-auto mt-3 " onSubmit={handleSub} >
        <ReviewInputBox inputItem={inputItem} findChecked={findChecked} handleChange={handleChange} handleChangeText={handleChangeText} handleSub={handleSub} retCount={retCount} retText={reviewTextPhone} />
        <hr />
        
        <div className="h-auto w-[100%] mb-3 flex flex-col gap-y-3 rounded-md shadow-lg">
            {
                review && review.map((items,index)=><ReviewBoxShow counter={items.startsCount} inputItem={inputItem} key={index} loremtext={items.review} />)
            }
        </div>
        
    </div>
  )
}

export default Reviews
