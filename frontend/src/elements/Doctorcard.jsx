import { useState} from "react"
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom"

function Doctorcard({items}) {
  const [isTrue,setIsTrue] = useState(false)
  console.log(items)
  return (
        <motion.div viewport={{amount:"some",root:true}} initial={{translateY:"-100px",opacity:0}} transition={{duration:1,type:"spring",repeatType:"loop"}} whileInView={{translateY:0,opacity:1}} className={`w-[320px] rounded-md shadow-lg containerBox h-[470px] border relative overflow-hidden`} onMouseOver={()=>setIsTrue(true)} onClick={()=>setIsTrue(!isTrue)} onMouseLeave={()=>setIsTrue(false)} >
            <div className="w-[100%] h-[100%] absolute">
              <picture >
                <source type="imafge/webp" />
                <img  loading="lazy" decoding="async" fetchPriority="high" role="presentation" src={`http://localhost:8000/doctorimage/${items.image}`} className={`w-[100%] h-[100%] transition-all duration-500 ${isTrue?"scale-100 blur-[3px]":"blur-none scale-110"}`} alt="" />
              </picture>
            </div>
            <div className={`w-[100%] justify-end flex-col ${isTrue?"flex":"invisible"} h-[100%] relative z-10 `}>
              <h1 className={`font-extrabold names ml-2 text-2xl bg-gradient-to-br from-blue-800 to-purple-700 w-fit text-transparent bg-clip-text `} > {items.name} </h1>
              <p className="hellos font-semibold text-sm ml-2 text-gray-500">
                {items.bio}
              </p>
              <div className="h-10 w-[100%] flex items-center justify-between px-2 btnBox mt-4 mb-4">
                <NavLink state={items} to={`/doctorabout/${items.name}`} className="h-10 btn1 rounded-lg border px-4 navlinks text-[#FFEBEE] py-2 w-fit">
                <p>
                    See More
                </p>
                </NavLink>
                <NavLink to={`/hey`} className="h-10 ml-2 btn2 border rounded-lg px-4 navlinks text-[#FFEBEE] py-2 w-fit">
                    WithAppertMent
                </NavLink>
              </div>
            </div>
        </motion.div>
  )
}

export default Doctorcard
