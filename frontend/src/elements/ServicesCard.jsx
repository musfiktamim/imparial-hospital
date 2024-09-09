// import Search from "../assets/images/service-icon-1.png"
import {motion} from "framer-motion"
import { useContext } from "react"
import { MediaContext } from "../context/UserContext"

function ServicesCard({text,image}) {
  const {windowHeight} = useContext(MediaContext)
  return (
    <motion.div
    initial={"hidden"}
    whileInView={"visible"}
    viewport={{margin:"30px"}}
    exit={{opacity:0,scale:0.5}}
    drag={windowHeight>768?true:false}
    dragConstraints={{left:0,top:0,right:0,bottom:0}}
    whileDrag={{scale:1.1}}
    whileTap={{scale:1.1}}   
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 }
    }}
    className="w-[330px] h-[200px] flex flex-col border-[1px] gap-2 rounded-md shadow-lg relative before:contents-'' before:absolute before:bg-blue-500 before:h-[100%] before:w-[100%] overflow-hidden before:translate-x-[-100%] active:before:translate-x-0 hover:shadow-2xl before:transition-transform hover:before:translate-x-0 before:-z-10 hover:text-white box">
      <div className="h-[40%] w-[100%] ml-5 mt-2">
        <img src={image } loading="lazy" decoding="async" className="h-[100%] " alt="" />
      </div>
      <div className="pl-2 pr-[1px]">
        <p className="font-thin text-sm text-left mt-5">
          {
            text
          }
        </p>
      </div>
    </motion.div>
  )
}

export default ServicesCard
