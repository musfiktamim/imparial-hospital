import React from "react";

function ReviewInputBox({inputItem,findChecked,handleSub,handleChange,handleChangeText,retText,retCount}) {
  return (
    <form className="w-[100%] shadow-lg shadow-gray-300 gap-1 flex flex-col h-[250px] pt-3">
    <div className="flex justify-center gap-2">
        {
            inputItem.map((items)=><label htmlFor={items.id} key={items.name}>
                {/* w-4 h-4 ms-1 text-gray-300 dark:text-gray-500 */}
                {
                    <svg className={`${findChecked(items.name)?"w-4 h-4 text-yellow-300 ms-1":"w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                }
            </label>)
        }

        {
            inputItem.map((items)=><input type="checkbox" className="hidden" onChange={handleChange} name={items.name} id={items.id} key={items.name} />)
        }
    </div>
    <input required type="number" onChange={handleChangeText} value={retText.phone} name="phone" disabled={retCount!=0?false:true} placeholder="Phone" autoFocus={true} className="px-2 py-1 rounded-md  mx-2 border outline-none m-0 " />
    <textarea required value={retText.reviewtext} onChange={handleChangeText} name="reviewtext" placeholder="Review" disabled={retCount!=0?false:true} className={`rounded-md resize-none w-[96%] mx-auto border ${retCount.length!=0?"text-black":"text-white"} outline-none px-1 py-1 mt-2 h-[65%]`} id=""></textarea>
    <button type="submit" disabled={retCount.length!=0?false:true} className={` ${retCount.length!=0?"text-white rounded-md bg-[#078FF7]":"text-black bg-gray-400 opacity-15 cursor-not-allowed"} transition-colors duration-500 py-1`}>
        Submit
    </button>
  </form>
  );
}

export default ReviewInputBox;
