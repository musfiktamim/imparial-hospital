import { useState } from "react"

function ReviewBoxShow({inputItem,loremtext,counter}) {
    function slicer(data){
        const [ShowText,setShowText] = useState(false)
        if(data.length>350){
            const slicedValue = <>
                <p className="text-sm">{ ShowText?data:data.slice(0,500)} <button onClick={()=>setShowText(!ShowText)} className="text-xs text-gray-400 underline" >{ShowText?"see Less":"See more"}</button></p>
            </>
            return slicedValue
        }else{
            const slicedValue = <>
                <p className="text-sm">{ ShowText?data:data.slice(0,500)}</p>
            </>
            return slicedValue
        }
    }
    
  return (
    <div className="w-[100%] rounded-md shadow-lg border h-auto">
        <div className="h-[40px] flex items-center pl-2 border-b">
            {
                inputItem.map((items)=>
                    <svg key={items.name} className={`${counter>0?"w-4 h-4 text-yellow-300 ms-1":"w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        {
                            counter--
                        }
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>)
            }
        </div>
        <div className="min-h-40 px-1 py-1 break-words h-auto">
            {
                slicer(loremtext)
            }
        </div>
    </div>
  )
}

export default ReviewBoxShow
