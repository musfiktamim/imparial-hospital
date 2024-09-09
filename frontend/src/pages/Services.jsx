import { useContext, useEffect } from "react"
import { MediaContext } from "../context/UserContext"
import ServicesItemsBox from "../elements/ServicesItemsBox";

function Services() {

  const {ServicesItems} = useContext(MediaContext);
  // useEffect(()=>{
  //   window.scroll({top:0,left:0})
  // },[])
  
  return (
    <div className="mt-2 flex flex-col overflow-x-hidden gap-y-10 mb-4">
      {
        ServicesItems.map((items,index)=><ServicesItemsBox img={items.img} v={index} text={items.text} name={items.name}  key={index} />)
      }
    </div>
  )
}

export default Services
