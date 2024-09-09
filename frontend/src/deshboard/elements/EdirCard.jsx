import { useState } from 'react'
import {motion} from "framer-motion"
import DataEditorDialog from './DataEditorDialog'

function EdirCard({item,setShowDialogs,setDialogs}) {
    const [isTrue,setIsTrue] = useState(false)
  return (
    <>    
        <motion.div viewport={{amount:"some",root:true}} initial={{translateY:"-100px",opacity:0}} transition={{duration:1,type:"spring",repeatType:"loop"}} whileInView={{translateY:0,opacity:1}} className={`w-[200px] rounded-md shadow-lg containerBox h-[300px] border relative overflow-hidden`} onMouseOver={()=>setIsTrue(true)} onClick={()=>setIsTrue(!isTrue)} onMouseLeave={()=>setIsTrue(false)} >
            <div className="w-[100%] h-[100%] absolute">
            <img  loading="eager" src={`http://localhost:8000/doctorimage/${item.image}`} className={`w-[100%] h-[100%] transition-all duration-500 ${isTrue?"scale-100 blur-[3px]":"blur-none scale-110"}`} alt="" />
            </div>
            <div className={`w-[100%] justify-end flex-col ${isTrue?"flex":"invisible"} h-[100%] relative z-10 `}>
            <h1 className={`font-extrabold names ml-2 text-2xl bg-gradient-to-br from-blue-800 to-purple-700 w-fit text-transparent bg-clip-text `} > {item.name} </h1>
            <p className="hellos font-semibold text-sm ml-2 text-gray-500">
                {item.bio}
            </p>
            <div className="h-10 w-[100%] flex items-center justify-center px-2 btnBox mt-4 mb-4">
                <button to={`/doctorabout/${item.name}`} onClick={(e)=>{
                    setShowDialogs(true)
                    setDialogs(item)
                }} className="h-10 btn1 rounded-lg border px-4 navlinks text-[#FFEBEE] py-2 w-fit">
                <p>
                    Edit
                </p>
                </button>
            </div>
            </div>
        </motion.div>

    </>
  )
}

export default EdirCard
